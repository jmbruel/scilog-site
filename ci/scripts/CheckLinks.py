import os
import posixpath
import re
import json
from enum import Enum
from urllib import request
from urllib.parse import urlparse

# Title : Fichier permettant de vérifier les liens dans les fichiers markdown

# Variables globales
# Si True on vérifie seulement les domaines des URLs externes
FAST_CHECK = True


# Type de vérification des liens
class CheckLinkType(Enum):
    INTERNAL = "Internal"
    EXTERNAL = "External"
    BOTH     = "Both"


# Mode de vérification des liens
CHECK_LINK_TYPE = CheckLinkType.BOTH

# Cache des domaines déjà testés en mode FAST_CHECK
domain_cache = {}


# ======================================== #
# ==== Récupération des liens ignorés ==== #
# ======================================== #
def GetIgnoredLinks():
    """
    Récupère la liste des liens à ignorer dans le fichier ignoredlinks.json

    Returns :
        list : la liste des liens à ignorer
    """
    try:
        ignoredFile = os.path.join('ci', 'scripts', 'ignoredlinks.json')
        with open(ignoredFile, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return []

ignored_links = GetIgnoredLinks()


# ================================ #
# ==== Recherche des fichiers ==== #
# ================================ #
def FindAllMarkdown(dossierPath):
    """
    Permet de parcourir le dossier donné de manière recursive pour trouver tous les fichiers markdown

    Args :
        dossierPath : le chemin du dossier à parcourir

    Returns :
        list : la liste des chemins complets des fichiers Markdown trouvés
    """
    markdowns = []

    # On parcourt tous les directory et fichiers enfants
    for racine, dirs, fichiers in os.walk(dossierPath):
        for fichier in fichiers:

            # Si le fichier se termine par un .md alors on l'ajoute à la liste
            if fichier.endswith('.md'):
                markdowns.append(os.path.join(racine, fichier))

    return markdowns


# ============================== #
# ==== Extraction des liens ==== #
# ============================== #
def GetLinks(fichierPath):
    """
    Permet de trouver tous les liens présents dans un fichier markdown

    Args :
        fichierPath : le path du fichier à analyser

    Returns :
        list : la liste des tuples (url, texte_affichage, fichier_source)
    """
    liens = []

    try:
        # On ouvre le fichier en mode lecture
        with open(fichierPath, 'r', encoding='utf-8') as fichier:
            contenu = fichier.read()
            
        # On cherche les liens markdown
        # Type : [texte](url)
        markdownLinks = re.findall(r'\[([^\]]*)\]\(([^)]+)\)', contenu)

        # On cherche les liens href 
        # Type : <a href="url">
        htmlLinks = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', contenu)

        # On cherche les liens classique
        # Type : https://...
        urlLinks = re.findall(r'<(https?://[^>]+)>', contenu)

        # On ajoute chaque lien à la liste avec le fichier source
        for texte, url in markdownLinks:
            liens.append((url, f"[{texte}]({url})", fichierPath))
        for url in htmlLinks:
            liens.append((url, f'href="{url}"', fichierPath))
        for url in urlLinks:
            liens.append((url, f"<{url}>", fichierPath))

    except Exception as error:
        print(f"Error : problème de lecture dans {fichierPath} : {error}")

    return liens


# ========================== #
# ==== Helpers internes ==== #
# ========================== #

def CleanInternalLink(lien):
    """
    Permet de nettoyer un lien interne en retirant query string et ancre

    Args :
        lien : le lien brut

    Returns :
        le lien nettoyé
    """
    
    # On retire le query string puis l'ancre
    return lien.split('?', 1)[0].split('#', 1)[0].strip()


def LooksLikePageLink(lien):
    """
    Permet de déterminer si le lien interne ressemble à une URL de page Hugo

    Args :
        lien : le lien interne nettoyé

    Returns :
        True si c'est un lien de page sinon False
    """
    
    if not lien:
        return False

    # oN assume qu'un lien terminant par / est forcément une page
    if lien.endswith('/'):
        return True

    # Si le dernier segment n'a pas d'extension, c'est une page Hugo
    dernierSegment = lien.rstrip('/').split('/')[-1]
    
    return os.path.splitext(dernierSegment)[1] == ''


def GetSourcePageDir(fichier_source):
    """
    Permet de calculer le dossier d'URL Hugo correspondant au fichier source

    Args :
        fichier_source : fichier markdown d'origine

    Returns :
        dossier d'URL ou None si hors content/
    """
    
    contentRoot = os.path.abspath('content')
    sourceAbs   = os.path.abspath(fichier_source)

    try:
        # Chemin relatif depuis la racine content/
        rel = os.path.relpath(sourceAbs, contentRoot)
    except ValueError:
        return None

    # Le fichier est en dehors de content/
    if rel.startswith('..'):
        return None

    # Conversion en style posix pour le traitement de l'URL
    relPosix = rel.replace('\\', '/')
    base      = posixpath.basename(relPosix)
    dossier   = posixpath.dirname(relPosix)

    if base in ('_index.md', 'index.md'):
        return dossier

    if base.endswith('.md'):
        slug = base[:-3]
        return posixpath.join(dossier, slug) if dossier else slug

    return dossier


def ResolveToPagePath(lien, fichier_source):
    """
    Permet de transformer un lien interne en chemin d'URL Hugo relatif à content/

    Args :
        lien : le lien interne nettoyé
        fichier_source : fichier markdown d'origine

    Returns :
        chemin d'URL relatif à content/ ou None si non résolu
    """
    
    # Lien absolu
    if lien.startswith('/'):
        
        # On retire le slash initial
        return lien.lstrip('/')

    sourcePageDir = GetSourcePageDir(fichier_source)
    if sourcePageDir is None:
        return None

    # On résout le lien relatif depuis le dossier de la page source    
    baseDir = sourcePageDir if sourcePageDir else '.'
    normalized = posixpath.normpath(posixpath.join(baseDir, lien))

    # Le lien sort de l'arborescence content/
    if normalized.startswith('..'):
        return None

    return '' if normalized == '.' else normalized


def PageExists(pagePath):
    """
    Permet de vérifier l'existence d'une page Hugo depuis son chemin URL

    Args :
        pagePath : chemin URL relatif à content/

    Returns :
        True si une page Hugo correspond sinon False
    """
    contentRoot = os.path.abspath('content')
    cleaned     = pagePath.strip('/').strip()

    # On part sur le principe qu'une page Hugo ne sera définie par un _index.md ou index.md dans un dossier, ou par un fichier .md portant le même nom que la page
    if cleaned:
        candidates = [
            os.path.join(contentRoot, cleaned, '_index.md'),
            os.path.join(contentRoot, cleaned, 'index.md'),
            os.path.join(contentRoot, f"{cleaned}.md"),
        ]
    else:
        # Racine du site
        candidates = [os.path.join(contentRoot, '_index.md')]

    return any(os.path.exists(candidate) for candidate in candidates)


# ========================================= #
# ==== Vérification des liens internes ==== #
# ========================================= #

def IsInternalPageLink(lien, fichier_source):
    """
    Permet de déterminer si un lien correspond à une page du site Hugo

    Args :
        lien : lien brut
        fichier_source : fichier markdown d'origine

    Returns :
        estPageInterne, pagePath
    """
    if not lien:
        return False, None

    # On considère que les liens commençant par http://, https://, mailto: ou tel: ne sont pas des liens de page Hugo donc liens externes (ou non internes)
    if lien.startswith(('http://', 'https://', 'mailto:', 'tel:')):
        return False, None

    cleaned = CleanInternalLink(lien)

    # Sans extension ni slash final ce n'est pas une page Hugo
    if not LooksLikePageLink(cleaned):
        return False, None

    pagePath = ResolveToPagePath(cleaned, fichier_source)
    
    # Le lien pointe en dehors de content/
    if pagePath is None:
        return False, None

    return True, pagePath


def InternalVerification(lien, fichier_source):
    """
    Permet de vérifier l'existence d'un lien interne : page Hugo ou asset/fichier local

    Args :
        lien : lien brut
        fichier_source : le fichier markdown d'origine

    Returns :
       bool : True si le fichier existe sinon False
    """
    
    ## Ancre seule ## 
    # On sort pas du document courant, considérée valide
    if lien.startswith('#') or lien in ignored_links:
        return True

    ## Lien de page Hugo ##
    # On vérifie via l'arborescence content/
    estPageInterne, pagePath = IsInternalPageLink(lien, fichier_source)
    if estPageInterne:
        return PageExists(pagePath)

    ## Asset ou fichier local ##
    # On vérifie l'existence physique du fichier
    cleaned = CleanInternalLink(lien)
    if cleaned.startswith('/'):
        cheminAbsolu = cleaned.lstrip('/')
    else:
        dossierSource = os.path.dirname(fichier_source)
        cheminAbsolu  = os.path.join(dossierSource, cleaned)

    return os.path.exists(os.path.normpath(cheminAbsolu))


# ========================================= #
# ==== Vérification des liens externes ==== #
# ========================================= #

def GetDomainOnly(url):
    """
    Récupère le domaine d'un URL (par exemple https://github.com)

    Args :
        url : l'URL complète

    Returns :
        str : le domaine principal
    """
    try:
        parsed = urlparse(url)
        return f"{parsed.scheme}://{parsed.netloc}"
    except Exception:
        return url


def MakeRequest(target):
    """
    Permet de faire une tentative de requête HEAD sur la cible puis GET en fallback.

    Args :
        target : l'URL ou le domaine à tester

    Returns :
        True si la cible répond avec un status < 400 sinon False
    """
    try:
        req = request.Request(target, method="HEAD")
        with request.urlopen(req, timeout=5) as response:
            if response.status < 400:
                return True
    except Exception:
        pass

    try:
        with request.urlopen(target, timeout=5) as response:
            return response.status < 400
    except Exception:
        return False


def ExternalVerification(url):
    """
    Permet de vérifier si un lien externe est accessible.
    
    En mode FAST_CHECK, seul le domaine est testé

    Args :
        url : l'URL à tester

    Returns :
        bool : True si l'URL répond sinon False
    """
    domain = GetDomainOnly(url)

    # Si le domaine est dans la liste des liens ignorés
    if domain in ignored_links:
        
        # Automatiquement validé
        return True

    if FAST_CHECK:
        # Si le domaine est déjà dans le cache on retourne le résultat mis en cache
        if domain not in domain_cache:
            domain_cache[domain] = MakeRequest(domain)
        return domain_cache[domain]

    # Mode complet
    return MakeRequest(url)


def MailVerification(url):
    """
    Permet de vérifier le format d'un lien mailto

    Args :
        url : lien mailto

    Returns :
        True si format correct sinon False
    """
    address = url[len('mailto:'):].split('?', 1)[0].strip()
    return bool(re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', address))


# =================================== #
# ==== Dispatch par type de lien ==== #
# =================================== #
def VerifyLink(url, source_file):
    """
    Détermine le type de lien et appelle le vérificateur approprié.

    Args :
        url : le lien à vérifier
        source_file : le fichier markdown d'origine

    Returns :
        tuple(bool, str) : (résultat, portée) où portée vaut 'INTERNAL', 'EXTERNAL' ou 'SKIP'
    """
    # Ancre seule ou lien ignoré
    if url.startswith('#') or url in ignored_links:
        
        # Pas de vérification
        return True, "SKIP"

    if url.startswith(('http://', 'https://')):
        return ExternalVerification(url), "EXTERNAL"

    if url.startswith('mailto:'):
        return MailVerification(url), "EXTERNAL"

    # Tout le reste est traité comme lien interne
    return InternalVerification(url, source_file), "INTERNAL"


def run(check_type=CHECK_LINK_TYPE):

    # On récupère tous les fichiers markdown
    allMd = FindAllMarkdown(".")

    erreurs = False

    # On récupère tous les liens
    allLiens = []
    for md in allMd:
        allLiens.extend(GetLinks(md))

    nbLiensTotal = len(allLiens)
    
    print(f"Total liens trouvés : {nbLiensTotal} | Mode de vérification : {check_type.value} | Vérification sur les domaines uniquement : {FAST_CHECK}")
    
    # On vérifie chaque lien
    for nbLiensTraites, (url, display_text, source_file) in enumerate(allLiens, start=1):

        result, portee = VerifyLink(url, source_file)

        # On filtre selon le mode choisi
        if portee == "SKIP":
            continue
        if check_type == CheckLinkType.INTERNAL and portee != "INTERNAL":
            continue
        if check_type == CheckLinkType.EXTERNAL and portee != "EXTERNAL":
            continue

        if not result:
            print(f"X [{nbLiensTraites}/{nbLiensTotal}] [{portee}] {url} ({source_file})")
            erreurs = True

    return erreurs
