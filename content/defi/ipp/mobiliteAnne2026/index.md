---
title: "Mobilité d'Anne Grieu (11-18 mars 2026)"
type: news
date: "2026-04-03T10:00:00Z"
draft: false
categories:
- An2026
- IPP
- mobilite
archives: ["2026-03"]
---

Anne Grieu, doctorante à l'IRIT, a bénéficié d'une mobilité de 1 semaine (11-18 mars 2026) au sein du laboratoire LMF à Saclay dans le cadre du défi IPP du {{% scilog %}}.

<img src="ens_saclay.jpg" alt="Entrée de l'ENS Saclay" width="90%"/>

## Contexte du déplacement

La thèse d'Anne est financée par le projet ANR ICSPA : *Interoperable and Confidential Set-Based Proof Assistants*. Ce projet regroupe SAMOVAR, INRIA Nancy, LORIA, INRIA Paris-Saclay, LMF, l'IRIT, le LIRMM et CLEARSY. L'objectif de ce projet est de faciliter l'interopérabilité entre les assistants de preuve Atelier B, Event-B et TLA+, en utilisant Lambdapi comme framework pivot.

Lambdapi est un assistant de preuve interactif basé sur la théorie des types dépendants, avec la possibilité de définir des règles de réécriture et raisonner modulo ces règles. Lambdapi est un framework logique permettant de définir sa propre logique et raisonner avec. Plusieurs outils sont développés ou en cours de développement pour permettre d'exporter et d'importer les logiques et les preuves d'autres assistants de preuve ou de prouveurs, faisant de Lambdapi un pivot pour l'échange de preuves entre différents outils afin de permettre leur interopérabilité.

À l'IRIT, nous travaillons sur la traduction des preuves produites par Event-B et sa plateforme Rodin, vers Lambdapi. Nous rencontrons de nombreux défis, liés aux particularités d'Event-B et de Rodin. Certaines de ces particularités sont partagées par des doctorants ou post-doctorants de l'équipe Deducteam, comme Ciáran Dunne, post-doctorant dont les travaux portent sur une traduction vers Lambdapi du prouveur PP, un prouveur automatique intégré à Atelier B et Event-B et Melanie Taprogge, une doctorante en co-tutelle avec une université allemande, qui travaille sur une traduction de LEO-III, un prouveur automatique, vers Lambdapi. Le déplacement au laboratoire LMF a aussi permis de rencontrer Frédéric Blanqui, directeur de recherche à INRIA, à la tête de l'équipe Deducteam.

## Rapport d'activités

La semaine passée à Saclay au LMF m'a permis de côtoyer des utilisateurs de Lambdapi et nous a permis de bénéficier de nombreux temps d'échange fructueux.

<img src="bureau.jpg" alt="Melanie Taprogge dans son bureau" width="90%"/>

Nous avons pu échanger tout au long de la semaine avec Melanie autour des formalismes que nous sommes en train de traduire vers Lambdapi, en recherchant ce que nous pouvions mettre en commun et les idées que nous pouvions avoir avec un regard neuf sur nos difficultés respectives. Certaines règles de nos prouveurs ayant des difficultés similaires de traduction, comme éliminer les propositions dupliquées, nous avons développé des théorèmes méta pour les résoudre, mais en suivant des pistes différentes. Nous avons pu confronter nos idées et chercher ce que nous pouvions adapter dans nos traductions.

Nous avons échangé avec Melanie sur un petit prouveur automatique pour Lambdapi, développé à l'IRIT, qui nous permet de prouver des buts simples du premier ordre, et ainsi nous permettre de générer automatiquement les preuves des règles de réécriture exploitées par l'outil de preuve Rodin. Pour l'instant, ce prouveur automatique n'est pas intégré à Lambdapi, il utilise un langage de tactiques récemment ajouté à Lambdapi et pas encore très développé. J'ai présenté les nouvelles tactiques que nous avons développées pour Lambdapi et que nous allons proposer pour intégration au projet. Ces tactiques ont été imaginées par rapport à nos besoins, en utilisant des fonctionnalités récentes de Lambdapi, et la présentation a permis de confirmer qu'elles intéressaient d'autres développeurs utilisant Lambdapi.

<img src="ciaran_melanie_reunion.jpg" alt="Ciaran Dunne et Melanie Taprogge dans une salle de réunion" width="90%"/>

Ciáran nous a présenté son plongement profond des règles du prouveur PP développé par la société Clearsy dans Lambdapi. Nous avons discuté des progrès qu'il a pu faire après son passage à Clearsy, puis de difficultés spécifiques qu'il rencontre. Lors d'une séance de travail en commun, nous avons pu clarifier une règle et prouver un résultat, en utilisant un méta-théorème adapté à la situation. Nous avons aussi discuté des inconvénients du prolongement profond dans le cadre d'une interopérabilité entre systèmes, et avancé dans la discussion autour des différentes possibilités de plongement de la théorie des ensembles dans Lambdapi, ainsi que des difficultés à trouver un modèle compatible avec les différents formalismes.

<img src="conference.jpg" alt="Présentation de Ciaran Dunne dans un amphi" width="90%"/>

## Actions envisagées

Nos discussions ont porté sur les besoins au niveau de la représentation des formules de théories du premier ordre (ensembliste typé ou non, avec des aspects fonctionnels ou non) ainsi qu'au niveau de la preuve automatique dans Lambdapi, qui doivent encore être approfondis :

* échanger des énoncés et des preuves dans différentes théories (théorie des ensembles typés de B, théorie des ensembles non typés de TLA, dialectes TPTP)
* enrichir Lambdapi par des tactiques plus évoluées permettant l'expression en Lambdapi de procédures de décision. Ces tactiques permettraient en particulier de démontrer automatiquement la correction de bases de règles, parfois plusieurs centaines, utilisées dans les spécifications des divers formalismes logiques.

<img src="repas.jpg" alt="Plusieurs membres de l'équipe autour d'une table" width="90%"/>
