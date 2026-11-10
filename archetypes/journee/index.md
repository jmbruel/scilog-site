---
# ==================================================================
#  Journées nationales du GDR SciLog {{ .Name }}
#
#  Ce dossier contient TOUTE l'édition :
#    index.md          <- ce fichier : informations générales + texte libre
#    programme.yaml    <- programme jour par jour
#    intervenants.yaml <- conférences invitées (photos dans intervenants/)
#    comite.yaml       <- comité d'organisation
#    partenaires.yaml  <- partenaires (logos dans partenaires/)
#    images/           <- bannière (hero_image ci-dessous)
#    photos/           <- déposez-y les photos : la galerie est automatique
#
#  Un champ vide ou une liste vide masque simplement la section.
#  Guide complet : docs/journees-annuelles.md
# ==================================================================
title: "Journées nationales du GDR SciLog {{ .Name }}"
subtitle: ""
label: "{{ .Name }}"
date: {{ now.Format "2006-01-02" }}
# Passez à true pour masquer l'édition du site pendant sa préparation.
draft: false

# Dates de l'événement (AAAA-MM-JJ). Elles servent au tri et au statut
# automatique ("Prochaine édition" avant la fin, "Archivée" après).
start_date: {{ .Name }}-06-01
end_date: {{ .Name }}-06-04
# Texte affiché pour les dates. Laissez vide pour le calculer.
dates_label: "à annoncer"
location: "à préciser"

# Bannière : déposez l'image dans images/ puis indiquez son nom.
hero_image: ""

summary: >
  Présentation courte de l'édition, affichée sur la page des archives.

registration:
  # Lien vers le formulaire d'inscription (affiche le bouton "S'inscrire").
  url: ""

important_dates:
  - date: "à annoncer"
    label: "Ouverture des inscriptions"
  - date: "à annoncer"
    label: "Date limite pour le tarif non majoré"

venue:
  name: ""
  address: ""
  description: ""
  # Coordonnées GPS pour afficher la carte (facultatif).
  lat:
  lon:

# Liens utiles affichés dans la section "Ressources".
links: []
#  - label: "Actes"
#    url: "https://..."

# Mettez false pour ne pas afficher le code de conduite commun.
code_of_conduct: true
---

## Bienvenue

Cette page prépare l'édition {{ .Name }} des journées nationales du GDR SciLog. Le texte ci-dessous est libre (Markdown) : présentation, appels à contributions, tarifs et modalités d'inscription, informations pratiques…

## Inscription et tarifs {#inscription}

Les modalités d'inscription seront publiées ici.

| Tarif | Avant la date limite | Après la date limite |
| --- | --- | --- |
| Tarif normal | à compléter | à compléter |
| Tarif étudiant | à compléter | à compléter |
