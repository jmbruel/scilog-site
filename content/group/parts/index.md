---
title: "PARTS"
type: page
date: "2026-09-23T11:20:58Z"
draft: false
---

### Programmation sûre pour les nouvelles applications temps réel

## Contact
* Julien Forget (U. Lille)
* Houssam Zahaf (U. Nantes)

## Membres du GT : [Sur le site MyGDR](https://mygdr.hosted.lip6.fr/GTView/205/)

## Liste de diffusion : [Groupe Renater](https://groupes.renater.fr/sympa/info/gt-parts-gdr-scilog)

## Contexte

Le paysage de l'informatique fait face à une forte diversification des
architectures matérielles sur lesquelles les programmes
s'exécutent. Ainsi, l'internet des objets (Internet of Things - IoT)
amène un regain d'intérêt pour les cibles matérielles fortement
contraintes en termes de ressources, qu'il s'agisse de puissance de
calcul, de mémoire, ou d'énergie. À l'opposé, l'essor de
l'apprentissage automatique induit une augmentation très forte des
besoins en mémoire et en puissance de calcul, motivant la diffusion de
plateformes matérielles hautes performances et hétérogènes, et ce sur
l'ensemble des segments, depuis les serveurs de calcul jusqu'aux
systèmes embarqués.

Une part importante de ces systèmes est plongée dans un environnement
constitué de processus physiques dont les dynamiques dictent le rythme
des interactions. Ces systèmes sont *temps réel* : ils sont sensibles
à la latence et doivent répondre aux événements extérieurs dans des
délais prédéterminés. La nature des interactions entre ces systèmes et
leur environnement fait qu'ils sont souvent *critiques*. Il est donc
primordial d'assurer la sûreté du système, à savoir non seulement que
celui-ci produit toujours les bonnes réactions en réponse à
l'évolution de l'environnement, mais également qu'il les produit au
bon moment. Les systèmes d'aide à la conduite automobile (Advanced
driver-assistance system - ADAS), de contrôle de vol avionique, de
pilotes automatiques ferroviaires, ou encore de surveillance
environnementale s'appuyant sur des réseaux de capteurs autonomes,
sont autant de systèmes temps réel critiques qui s'imposent dans notre
quotidien.

## Thèmes étudiés

### Modèles et langages de programmation dédiés

  + Langages synchrones pour les architectures parallèles et
    hétérogènes, langages synchrones pour les capteurs autonomes
  + Approches dirigées par les modèles pour la diffusion des outils
    d'analyse dédiés au TR dans les processus industriels

### Analyse statique

  + Extension des techniques d'analyse de pire temps d'exécution
    (WCET) aux architectures modernes : multicoeur, accélérateurs,
    exécution Out-of-Order.
  + Extension des techniques d'analyse d'ordonnançabilité aux
    architectures modernes : parallélisme massif et hétérogènes, prise
    en compte des interférences. Approches probabibilistes, approches
    symboliques, lien avec la vérification de modèles.


### Systèmes formellement vérifiés

  + Extension des assistants de preuve pour intégrer les aspects
    temporels afin de permettre la preuve de logiciels temps réel.
  + Utilisation des assistants de preuve dans la conception des coeurs
    de calcul assurance l'absence d'anomalies temporelles, en lien
    avec les approches _open hardware_.

### Intégration de l'apprentissage automatique dans les systèmes temps réel

  + Exploiter la régularité des calculs sur réseaux de neurones dans
    les techniques d'analyse WCET.
  + Exploiter la régularité des graphes de calcul dans les techniques
    de placement-ordonnancement sous contrainte TR.

## Synchro : séminaires de la communauté francophone temps-réel

### lundi 16 novembre 2026, 10h00
- En ligne : https://visio.numerique.gouv.fr/tml-zuak-rpp
- Intervenant : Yahya Hamdani, LIAS, ISAE-ENSMA
- Titre : Ordonnancement temps réel optimal sur plateformes
  multiprocesseurs uniformes : l’algorithme PCG*
- Résumé : Sur les plateformes multiprocesseurs uniformes, où les
  processeurs ont des vitesses différentes, l’ordonnancement optimal
  se paie souvent par un grand nombre de préemptions et de
  migrations. Je présenterai nos travaux sur ce problème, notamment
  l’algorithme PCG*: son principe, ses garanties en termes de
  préemptions et sa position par rapport aux approches existantes.
- Bio : Yahya Hamdani est doctorant en deuxième année au LIAS
  (ISAE-ENSMA, Poitiers). Il travaille sur l’ordonnancement temps réel
  sur des plateformes multiprocesseurs uniformes.
