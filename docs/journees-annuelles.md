# Journées nationales — Guide de maintenance

Ce document explique comment le site organise les journées nationales annuelles
du GDR SciLog, et surtout **comment ajouter une nouvelle édition sans toucher
au code**.

## Principe

Les journées nationales sont une **section de premier niveau** du site, au même
titre que Défis, Groupes ou Actions. Chaque édition annuelle dispose de sa
propre page sous `/journees/`, et l'ensemble est listé sur la page d'archive
`/journees/`.

L'ajout d'une édition est **piloté par les données, pas par les templates** :

1. Une fiche YAML décrit le contenu de l'édition.
2. Une page `_index.md` lie cette fiche à une URL.
3. La navigation (menu « Journées ») et l'archive découvrent l'édition
   automatiquement.

## Ajouter une édition (ex. 2027–28)

Depuis la racine du dépôt :

```sh
make new-journee EDITION=2027-2028
```

Cette commande crée deux fichiers :

```
data/journees_editions/2027-2028.yml
content/journees/2027-2028/_index.md
```

Ensuite, remplissez la fiche YAML avec les informations utiles : dates, lieu,
appels, programme, inscription, intervenants, etc. Chaque champ est optionnel.
Une fois `draft: false` placé dans la page, lancez `make serve` : l'édition
apparaît immédiatement dans le menu « Journées » et dans l'archive.

> Rien d'autre à faire : pas de template à modifier, pas de CSS à toucher, pas
> de nouvelle entrée de menu à ajouter.

## Structure

```
content/journees/
├── _index.md                 ← archive /journees/ et entrée de menu
├── 2025-2026/
│   └── _index.md             ← page de l'édition 2025–26
├── 2026-2027/
│   └── _index.md             ← page de l'édition 2026–27
└── _template/                ← modèle utilisé par "make new-journee"

data/
└── journees_editions/
    ├── 2025-2026.yml         ← contenu détaillé de l'édition 2025–26
    ├── 2026-2027.yml
    └── _template.yml         ← modèle de fiche
```

Le contenu **fin** d'une édition (programme, inscription, intervenants…) est
déclaré dans sa fiche YAML et rendu par des composants réutilisables :

```
layouts/partials/journees/
├── edition-hero.html
├── edition-nav.html
├── edition-card.html
├── important-dates.html
├── calls.html
├── programme.html
├── speakers.html
├── registration.html
├── venue.html
├── photos.html
├── code-of-conduct.html
├── partners.html
├── committee.html
└── resources.html
```

## Contenu incomplet accepté

Une édition peut être renseignée au fil de l'eau. Les sections absentes
ou désactivées ne s'affichent pas (aucune navigation cassée) :

```yaml
sections:
  photos: false            # ne pas afficher cette section
registration:              # pas encore ouverte -> pas de section rendue

programme:
  status: "Programme en préparation"
```

## Ce que l'organisateur n'a PAS besoin de savoir

Hugo, les templates Go, le CSS, le HTML, le fonctionnement des menus
déroulants : rien de tout cela n'est nécessaire pour ajouter une édition.

## Compatibilité

L'ancienne adresse `/action/national-day/` redirige désormais vers `/journees/`.
Les serveurs liés aux éditions passées (ex. `https://scilog2026.fr`) continuent
d'être référencés dans les fiches d'édition correspondantes.
