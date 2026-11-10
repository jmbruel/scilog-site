# Journées nationales - Guide pour les organisateurs

Chaque édition des journées nationales du GDR SciLog est **un dossier** dans
`content/journees/<année>/`. Le site (bannière, navigation, programme,
intervenants, lieu, photos, partenaires, comité, code de conduite) est généré
automatiquement à partir de ce dossier : aucun code à écrire, aucun site
annuel à recréer.

## Créer l'édition de l'année

Depuis la racine du dépôt :

```sh
make new-journee EDITION=2028
```

Cette commande copie le modèle `archetypes/journee/` et crée :

```text
content/journees/2028/
├── index.md           informations générales + texte libre (Markdown)
├── programme.yaml     programme jour par jour
├── intervenants.yaml  conférences invitées
├── comite.yaml        comité d'organisation
└── partenaires.yaml   partenaires
```

L'édition apparaît immédiatement dans le menu « Journées » et sur la page
`/journees/`. Mettez `draft: true` dans `index.md` pour la masquer pendant la
préparation.

> L'édition 2027 a déjà été créée : il suffit de compléter
> `content/journees/2027/`.

## Remplir l'édition

Chaque fichier contient des commentaires et un exemple. **Une liste vide ou un
champ vide masque simplement la section correspondante** : on peut publier la
page tôt et la compléter au fil de l'eau.

| Je veux…                         | Où ?                                                             |
| -------------------------------- | ---------------------------------------------------------------- |
| Titre, dates, lieu, résumé       | front matter de `index.md`                                       |
| Bannière                         | image dans `images/`, puis `hero_image: "images/xxx.jpg"`       |
| Bouton « S'inscrire »            | `registration.url` dans `index.md`                               |
| Dates importantes                | `important_dates` dans `index.md`                                |
| Bienvenue, appels, tarifs…       | corps Markdown de `index.md` (chaque titre `##` entre dans le menu de la page) |
| Programme                        | `programme.yaml`                                                 |
| Keynotes (photo, résumé, bio)    | `intervenants.yaml` + photos dans `intervenants/`                |
| Carte du lieu                    | `venue` dans `index.md` (`lat`/`lon` pour la carte)             |
| Photos                           | déposez les fichiers dans `photos/` : la galerie est automatique |
| Partenaires                      | `partenaires.yaml` + logos dans `partenaires/`                   |
| Comité                           | `comite.yaml`                                                    |
| Liens (actes, transparents…)     | `links` dans `index.md`                                          |

Les images sont redimensionnées automatiquement par Hugo ; il est tout de même
conseillé de ne pas déposer de photos de plus de 2000 px.

### Ce qui est automatique

- **Statut** : « Prochaine édition » jusqu'à `end_date`, puis « Archivée »
  (le bouton « S'inscrire » disparaît alors).
- **Libellé des dates** : calculé depuis `start_date`/`end_date` si
  `dates_label` est vide (ex. « 1-4 juin 2027 »).
- **Navigation de la page**, **menu « Journées »** et **archive** `/journees/`,
  triés de la plus récente à la plus ancienne édition.
- **Sessions parallèles** : dans `programme.yaml`, les sessions consécutives
  qui commencent à la même heure s'affichent côte à côte.
- **Code de conduite** commun (`layouts/partials/journees/code-of-conduct.html`),
  désactivable avec `code_of_conduct: false`.

## Exemple de programme

```yaml
days:
  - label: "Lundi 7 juin"
    sessions:
      - time: "14:00-15:30"
        title: "GT IA"
        room: "Amphi A"
        type: gt          # keynote | gt | afadl | talk | poster | pause | social
      - time: "14:00-15:30"
        title: "AFADL - Session 1"
        room: "Salle 1"
        type: afadl
        details: |
          - Article 1, auteurs
          - Article 2, auteurs
```

`content/journees/2026/` est un exemple complet (programme détaillé,
keynotes, photos, partenaires, comité).

## Vérifier le rendu

```sh
make serve      # ou : hugo server
```

puis ouvrez <http://localhost:1313/journees/>.

## Fichiers techniques

| Fichier                                      | Rôle                              |
| -------------------------------------------- | --------------------------------- |
| `archetypes/journee/`                        | modèle d'une nouvelle édition     |
| `layouts/journees/page.html`                 | page d'une édition                |
| `layouts/journees/section.html`              | archive `/journees/`              |
| `layouts/partials/journees/`                 | programme, intervenants, carte…   |
| `assets/css/journees.css`                    | styles                            |

## Compatibilité

Les anciennes adresses redirigent vers les nouvelles :
`/journees/2024-2025/` → `/journees/2025/`, `/journees/2025-2026/` →
`/journees/2026/`, `/journees/2026-2027/` → `/journees/2027/`, et
`/action/national-day/` → `/journees/`.
