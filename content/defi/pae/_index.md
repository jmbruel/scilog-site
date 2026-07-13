---
title: "PAE : Programmation et Analyse de systèmes Embarqués"
type: page
date: "2024-06-23T11:20:58Z"
draft: false
---

## Contact
* Julien Forget (U. Lille)
* Dorra Ben-Khalifa (ENAC)

## Membres du défi : [Sur le site MyGDR](https://mygdr.hosted.lip6.fr/GTView/216/)

## Contexte

Les systèmes embarqués sont au cœur de nombreuses applications
modernes, comme par exemple l'automatisation des transports
(automobile, train, avionique), ou encore le domaine de l'Internet des
objets (IoT). Pour supporter l'augmentation et la diversification des
systèmes embarqués, il est impératif d'améliorer leur
*efficacité*, afin de limiter l'utilisation de ressources
matérielles, tout en assurant leur *fiabilité*, afin d'éviter
tout accident. En effet, les systèmes embarqués sont souvent
*critiques*, du fait de leurs interactions avec leur
environnement physique. Une erreur dans l’exécution du logiciel peut
endommager le système physique, et potentiellement avoir des
conséquences graves sur les personnes et les biens.

Le domaine de l'embarqué connaît actuellement une grande
diversification. Sur le plan des applications, il intègre un nombre
croissant de composants à base de modèles d'intelligence artificielle
(réseaux de neurones). Sur le plan matériel, il s'appuie sur des
plateformes hétérogènes mêlant multi-coeurs, System-on-Chip, GPU et
FPGA. Afin de faire face à cette diversification, il est nécessaire de
proposer de nouveaux cadres de modélisation, d'analyse, de conception,
de compilation et de vérification, ainsi que des nouveaux supports
d’exécution. Les cadres proposés doivent permettre d’améliorer
l'efficacité (temps de calcul, consommation énergétique, consommation
mémoire) et la fiabilité (comportement déterministe, sûreté de
fonctionnement, sécurité logicielle et matérielle, tolérance aux
fautes, robustesse à l'incertitude) des systèmes embarqués.

Le défi PAE s'intéresse particulièrement à des problématiques liées à
trois sous-classes de systèmes embarqués. Tout d'abord, l’application
et le développement des méthodes formelles pour les **systèmes
critiques**. Ensuite, l'analyse et le développement de **systèmes
temps réel**, des systèmes embarqués devant répondre aux événements
extérieurs dans des délais prédéterminés. Enfin, l’utilisation des
méthodes formelles pour la validation des comportements des
**systèmes interactifs**, tels que ceux que l'on peut trouver
dans les domaines de la robotique ou des systèmes embarqués
interactifs.

## Verrous scientifiques

Les principaux verrous à lever afin d'atteindre les objectifs du défi sont listés ci-dessous :

* Concevoir des langages de programmation dédiés avec des sémantiques
  intuitives et bien définies
* Développer des outils de modélisation et de programmation pour
  systèmes hybrides à dynamiques continues et discrètes
* Développer des outils de modélisation et de programmation pour
  architectures matérielles hétérogènes distribuées à ressources
  limitées
* Proposer des analyses permettant d'assurer le respect des
  contraintes temps réel sur des architectures matérielles hétérogènes
  distribuées à ressources limitées
* Etendre les assistants de preuve pour intégrer les aspects temps
  réel et des coeurs de calcul assurant l’absence d’anomalies
  temporelles
* Optimiser l’efficacité énergétique et la précision numérique des
  programmes
* Intégrer des jumeaux numériques dans les architectures MAPE-K pour
  l'adaptation autonome
* Maîtriser la co-évolution et de la dérive (drift) entre jumeaux
  numériques et systèmes réels
* Intégrer des composants d'apprentissage automatique fiables et
  efficaces dans des systèmes embarqués critiques
* Vérifier formellement des propriétés spatiales et interactives
* Développer des outils permettant le portage sécurisé d’applications
  critiques sur des systèmes embarqués contraints (FPGA,
  microcontrôleurs)

