# Publication automatique sur gdr-scilog.cnrs.fr

Le CNRS n'accepte le FTP que depuis certaines adresses IP. La publication se
fait donc en deux temps, sans intervention :

1. **GitHub** : à chaque fusion dans `main`, le workflow construit le site et
   le dépose, prêt à l'emploi, sur la branche `cnrs-site`.
2. **Un ordinateur autorisé** (au travail, allumé en permanence) lance
   `ci/publier-cnrs.sh` toutes les 5 minutes. Quand `cnrs-site` a changé, le
   script envoie par FTP les seuls fichiers modifiés ; sinon il ne fait rien.

Le mot de passe FTP reste sur cet ordinateur : il n'est jamais dans GitHub.
Le site est en ligne environ 5 minutes après la fusion, et l'application
GDR SciLog envoie la notification juste après.

## Installation (une seule fois, environ 10 minutes)

Sur l'ordinateur autorisé (Linux ou macOS) :

1. Installer `lftp` : `sudo apt install lftp` (Linux) ou `brew install lftp` (macOS).
2. Copier le script :

   ```sh
   mkdir -p ~/.scilog-cnrs
   curl -fsSL https://raw.githubusercontent.com/jmbruel/scilog-site/main/ci/publier-cnrs.sh -o ~/.scilog-cnrs/publier-cnrs.sh
   chmod +x ~/.scilog-cnrs/publier-cnrs.sh
   ```

3. Créer `~/.scilog-cnrs/config` (le serveur et le dossier où vous déposez
   le site aujourd'hui) :

   ```sh
   FTP_HOST=ftp.exemple.cnrs.fr
   FTP_DIR=/htdocs
   ```

4. Ajouter l'identifiant FTP à `~/.netrc`, lisible par vous seul :

   ```sh
   printf 'machine ftp.exemple.cnrs.fr\nlogin VOTRE_LOGIN\npassword VOTRE_MOT_DE_PASSE\n' >> ~/.netrc
   chmod 600 ~/.netrc
   ```

   Le nom après `machine` doit être exactement `FTP_HOST`.

5. Essai sans rien envoyer :

   ```sh
   DRY_RUN=1 ~/.scilog-cnrs/publier-cnrs.sh
   ```

   Il affiche les commandes FTP prévues (`mirror -R …` la première fois).

6. Premier envoi réel, puis vérifier le site :

   ```sh
   ~/.scilog-cnrs/publier-cnrs.sh
   ```

7. Lancement automatique toutes les 5 minutes : `crontab -e`, puis ajouter

   ```
   */5 * * * * $HOME/.scilog-cnrs/publier-cnrs.sh >> $HOME/.scilog-cnrs/journal.log 2>&1
   ```

## Au quotidien

- Rien à faire : fusionner une Pull Request suffit.
- Historique des envois : `~/.scilog-cnrs/journal.log`.
- Seuls les fichiers retirés du site sont supprimés du serveur ; un fichier
  déposé à la main sur le serveur n'est jamais touché.
- Si un envoi échoue (réseau, mot de passe), il est refait au passage suivant.
- Ordinateur éteint : la publication reprend à son redémarrage, avec toutes
  les modifications en attente.
- Envoi complet forcé : `rm ~/.scilog-cnrs/dernier-envoi`.
- Le serveur utilise SFTP et non FTP ? Le script doit être adapté : ouvrez
  une issue.
