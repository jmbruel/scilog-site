#!/usr/bin/env bash
# Envoie sur gdr-scilog.cnrs.fr la dernière version du site construite par
# GitHub (branche cnrs-site). Le CNRS n'accepte le FTP que depuis certaines
# adresses : ce script tourne donc sur un ordinateur autorisé, toutes les
# 5 minutes (cron), et ne fait rien quand le site n'a pas changé.
#
# Configuration (voir docs/publication-cnrs.md) :
#   ~/.scilog-cnrs/config  FTP_HOST (serveur), FTP_DIR (dossier du site),
#                          FTP_PORT (facultatif, 21 par défaut)
#   ~/.netrc               identifiant et mot de passe FTP (jamais dans GitHub)
# Options : DRY_RUN=1 affiche les commandes FTP sans rien envoyer.
set -euo pipefail

REPO=${SCILOG_REPO:-https://github.com/jmbruel/scilog-site.git}
WORK=${SCILOG_WORK:-$HOME/.scilog-cnrs}
# shellcheck source=/dev/null
[ -f "$WORK/config" ] && . "$WORK/config"
: "${FTP_HOST:?FTP_HOST manquant dans $WORK/config (ex. ftp.exemple.cnrs.fr)}"
: "${FTP_DIR:?FTP_DIR manquant dans $WORK/config (dossier du site sur le serveur)}"
FTP_PORT=${FTP_PORT:-21}
SITE=$WORK/site
SENT=$WORK/dernier-envoi   # commit de cnrs-site déjà envoyé au CNRS
LOCK=$WORK/verrou

log() { printf '%s %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"; }

mkdir -p "$WORK"
# Une seule exécution à la fois ; un verrou de plus d'une heure est abandonné.
if [ -d "$LOCK" ] && [ -n "$(find "$LOCK" -maxdepth 0 -mmin +60)" ]; then rmdir "$LOCK"; fi
mkdir "$LOCK" 2>/dev/null || exit 0
trap 'rmdir "$LOCK"' EXIT

if [ ! -d "$SITE/.git" ]; then
  git clone -q --depth 1 --single-branch --branch cnrs-site "$REPO" "$SITE"
fi
cd "$SITE"
git fetch -q --depth 1 origin cnrs-site
new=$(git rev-parse FETCH_HEAD)
old=$(cat "$SENT" 2>/dev/null || true)
[ "$new" = "$old" ] && exit 0
git checkout -q --force --detach "$new"

# Seuls les fichiers modifiés depuis le dernier envoi sont transférés (tout
# le site au premier envoi). Seuls les fichiers retirés du site sont supprimés
# du serveur : ce qui n'existe que sur le serveur n'est jamais touché.
commands=$(mktemp)
trap 'rm -f "$commands"; rmdir "$LOCK"' EXIT
q() { printf '"%s"' "$1"; }
{
  echo "set cmd:fail-exit yes"
  echo "set net:max-retries 3"
  # Sous cette forme (et non ftp://…), lftp lit le mot de passe dans ~/.netrc.
  echo "open -p $FTP_PORT $(q "$FTP_HOST")"
  echo "cd $(q "$FTP_DIR")"
} > "$commands"
changed= deleted=
if [ -n "$old" ] && git cat-file -e "$old^{commit}" 2>/dev/null; then
  changed=$(git -c core.quotepath=false diff --name-only --no-renames --diff-filter=AMT "$old" "$new")
  deleted=$(git -c core.quotepath=false diff --name-only --no-renames --diff-filter=D "$old" "$new")
fi
# Envoi complet au premier passage, ou si un nom de fichier contient " ou \.
if [ -z "$old" ] || ! git cat-file -e "$old^{commit}" 2>/dev/null || grep -q '["\\]' <<< "$changed$deleted"; then
  echo "mirror -R --no-perms --parallel=4 -x \"^\\.git(/|\$)\" . ." >> "$commands"
  summary="envoi complet"
else
  while IFS= read -r file; do
    [ -n "$file" ] || continue
    dir=$(dirname "$file")
    [ "$dir" = . ] || echo "mkdir -f -p $(q "$dir")"
    echo "put $(q "$file") -o $(q "$file")"
  done <<< "$changed" >> "$commands"
  # Supprimés après l'envoi des nouveaux fichiers : aucun lien cassé entre-temps.
  while IFS= read -r file; do
    [ -z "$file" ] || echo "rm -f $(q "$file")"
  done <<< "$deleted" >> "$commands"
  summary="$(grep -c . <<< "$changed" || true) envoyé(s), $(grep -c . <<< "$deleted" || true) supprimé(s)"
fi

if [ "${DRY_RUN:-}" = 1 ]; then
  log "Essai (DRY_RUN) : $(git log -1 --format=%s), $summary"
  cat "$commands"
  exit 0
fi
lftp -f "$commands"
echo "$new" > "$SENT"
log "gdr-scilog.cnrs.fr à jour : $(git log -1 --format=%s), $summary"
