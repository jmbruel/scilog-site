# Calendrier - Ajouter un évènement

La page [/calendrier/](https://gdr-scilog.cnrs.fr/calendrier/) affiche les
évènements du GDR SciLog dans une vue mensuelle et une liste « À venir », avec
des filtres par type, groupe thématique (GT) et défi.

Tous les évènements sont dans **un seul fichier** : `data/calendrier.yaml`.
Aucun code à écrire.

## Ajouter un évènement

Ajoutez un bloc à la fin de la liste `evenements` :

```yaml
  - titre: "Réunion du GT IIDM"
    type: reunion
    debut: "2027-01-14T14:00"
    fin: "2027-01-14T17:00"
    lieu: "IRIT, Toulouse"
    visio: "https://visio.numerique.gouv.fr/xxx-yyyy-zzz"
    lien: "/group/idm/"
    groupes: [idm]
    defis: [trusted]
    description: "Point d'étape et exposés des doctorants."
```

| Champ | Obligatoire | Contenu |
|---|---|---|
| `titre` | oui | Nom de l'évènement |
| `type` | oui | `reunion` (GT / défi), `conference`, `soutenance`, `appel` (appel à projets, date limite) |
| `debut` | oui | `"AAAA-MM-JJ"` pour une journée entière, `"AAAA-MM-JJTHH:MM"` avec l'heure (heure de Paris) |
| `fin` | non | Même format, dernier jour **inclus**. Pour plusieurs jours : `debut: "2027-03-02"`, `fin: "2027-03-04"` |
| `lieu` | non | Ville, laboratoire, salle… ou « En ligne » |
| `visio` | non | Lien de visioconférence (affiché « Rejoindre la visio ») |
| `lien` | non | Page de l'évènement : `/chemin/` sur ce site, ou une adresse complète |
| `groupes` | non | Identifiants des GT concernés, ex. `[idm, lvp]` |
| `defis` | non | Identifiants des défis concernés, ex. `[ipp]` |
| `description` | non | Une ou deux phrases |

Les identifiants de GT et de défis sont listés en haut du fichier (`groupes:`
et `defis:`). Pour en ajouter un, ajoutez une ligne `identifiant: "Nom court"`.

Exemples rapides :

```yaml
  - titre: "Soutenance de thèse de Camille Martin"
    type: soutenance
    debut: "2027-02-10T14:00"
    lieu: "LaBRI, Bordeaux"
    visio: "https://..."
    groupes: [clap]

  - titre: "Date limite : bourses de mobilité 2027"
    type: appel
    debut: "2027-03-31"
    lien: "/action/appel-mobilite/"
```

## Ce qui est automatique

- Les **Journées nationales** (`content/journees/<année>/`) apparaissent
  d'elles-mêmes, à partir de `start_date`, `end_date` et `location`. Inutile de
  les recopier.
- Les évènements passés restent visibles dans la vue mensuelle ; la vue
  « À venir » ne montre que ceux qui ne sont pas terminés.

- La page d'accueil affiche les 5 prochains évènements grâce au shortcode
  `{{< prochains-evenements >}}` (dans `content/_index.md`). On peut le placer
  dans n'importe quelle page, et choisir le nombre :
  `{{< prochains-evenements nombre="3" >}}`.
- Le calendrier est aussi publié en JSON à `/calendrier/index.json`.
  L'application mobile GDR SciLog le lit pour son écran « Calendrier » :
  un évènement ajouté ici apparaît aussi dans l'application.

## Filtres et liens partagés

- **Filtrer par GT ou défi** ne montre que les évènements qui portent ce GT ou
  ce défi : pensez à renseigner `groupes` / `defis`.
- Les filtres sont repris dans l'adresse, on peut donc partager un lien
  filtré, par exemple depuis la page d'un GT :
  `/calendrier/?gt=lvp`, `/calendrier/?defi=ipp&vue=liste`,
  `/calendrier/?types=soutenance`.
- « Mémoriser mes filtres » enregistre le choix dans le navigateur du
  visiteur (aucune donnée n'est envoyée).
- Sous chaque évènement, « Ajouter à mon agenda » l'ajoute en un clic dans
  Google Agenda ou Outlook, ou télécharge un fichier `.ics` (Apple Calendrier,
  Thunderbird…). Les évènements terminés portent la mention « passé » et
  n'ont plus ce lien.
- « Exporter (.ics) » télécharge les évènements filtrés pour les importer dans
  un agenda (Thunderbird, Outlook, Google Agenda, Apple Calendrier…).

## Vérifier

```sh
hugo server -D
```

puis ouvrez <http://localhost:1313/calendrier/>. Si un évènement n'apparaît
pas, vérifiez l'indentation YAML et le format de `debut`.
