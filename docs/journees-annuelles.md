# Journées nationales - Guide de maintenance

Ce document explique comment le site organise les journées nationales annuelles
du GDR SciLog, et surtout comment ajouter ou modifier une édition sans toucher
au code.

## Principe

Les journées nationales sont une section de premier niveau du site, au même
titre que Défis, Groupes ou Actions. Chaque édition annuelle dispose de sa
propre page sous `/journees/`, et l'ensemble est listé sur la page d'archive
`/journees/`.

L'ajout d'une édition est piloté par Markdown :

1. Un fichier `content/journees/<edition>/_index.md` contient les métadonnées
   de carte dans son front matter.
2. Le même fichier contient le contenu éditable : texte, appels, programme,
   tableaux de tarifs, intervenants, lieu, comité et ressources.
3. La navigation principale et l'archive découvrent les éditions
   automatiquement.

Il n'y a plus de fiche YAML séparée pour les journées. Les calendriers et
tableaux doivent rester dans les fichiers Markdown d'édition.

## Modifier l'édition 2026-2027

L'édition suivante est prête ici :

```text
content/journees/2026-2027/_index.md
```

Les organisateurs peuvent modifier directement ce fichier pour remplacer les
lignes `à compléter` par les dates, appels, tarifs, intervenants, lieu,
partenaires et ressources réels.

## Ajouter Une Édition

Depuis la racine du dépôt :

```sh
make new-journee EDITION=2027-2028
```

Cette commande crée :

```text
content/journees/2027-2028/_index.md
```

Ensuite :

1. Modifiez le front matter : `title`, `label`, `date_label`, `location`,
   `status`, `summary`, liens et navigation.
2. Remplissez le corps Markdown.
3. Lancez `make serve` ou `hugo` pour vérifier le rendu.

Une fois `draft: false` dans la page, l'édition apparaît automatiquement dans
le menu "Journées" et dans l'archive `/journees/`.

## Structure

```text
content/journees/
├── _index.md
├── 2024-2025/
│   └── _index.md
├── 2025-2026/
│   └── _index.md
├── 2026-2027/
│   └── _index.md
└── _template/
    └── _index.md
```

## Format Recommandé

Gardez les sections habituelles avec des ancres Markdown :

```md
## Programme {#programme}

| Horaire | Session | Salle |
| --- | --- | --- |
| 09:00-10:15 | Conférence invitée | Amphi A |

## Inscription {#inscription}

| Tarif | Avant la date limite | Après la date limite |
| --- | --- | --- |
| Tarif normal | à compléter | à compléter |
```

Le shortcode de page reste seulement un wrapper de présentation :

```md
{{< journee-edition >}}

... contenu Markdown ...

{{< /journee-edition >}}
```

## Contenu Incomplet Accepté

Une édition peut être renseignée au fil de l'eau. Pour une information pas
encore connue, laissez une ligne explicite dans le tableau :

```md
| à annoncer | Ouverture des inscriptions |
```

Cela évite les liens cassés et rend clair ce qu'il reste à compléter.

## Compatibilité

L'ancienne adresse `/action/national-day/` redirige vers `/journees/`. Les
serveurs liés aux éditions passées, par exemple `https://scilog2026.fr` et
`https://gdrgpl2025.sciencesconf.org`, restent référencés dans les pages
Markdown des éditions archivées.
