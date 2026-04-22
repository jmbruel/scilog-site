---
title: "ADDYCT : ADaptation DYnamique et ConTinue"
type: page
date: "2024-06-23T11:20:58Z"
draft: false
---

## Contact
* Jannik Laval (DISP, Université Lumière Lyon 2)
* Jolan Philippe (LIFO, Orléans)

### Laboratoires et chercheurs inscrits dans le Défi : [Sur le site MyGDR](https://mygdr.hosted.lip6.fr/GTView/210/)


## Contexte

L'adaptabilité est un enjeu majeur des systèmes complexes dans des
environnements dynamiques. Ces environnements regroupent les
architectures distribuées composées de systèmes "component-based" et les
infrastructures déployées sur des plateformes hétérogènes à différentes
échelles : Cloud, Fog, Edge, ou IoT. Tous ces systèmes doivent être
capables d'ajuster leur configuration de manière autonome pour répondre
à des évènements exogènes et/ou endogènes.

Les systèmes logiciels doivent être considérés dès leur conception comme
des systèmes durables en termes de temporalité (Système temps long,
Cycle de vie, Couplage), de scalabilité (Granularité, Interfaces,
Gestion massive de données) et d'hétérogénéité (Intégration,
Interopérabilité).

Ces challenges sont d'autant plus importants lorsque la taille du
système est grande et couplée avec des artefacts matériels (IoT, CPS,
Jumeaux numériques, Cloud\...)

L'objectif de ce défi est de modéliser, analyser et d'implémenter des
moyens et des politiques d'adaptation pour des systèmes logiciels
complexes (distribués, componentisés etc.).

L'approche adoptée repose sur les boucles de contrôle MAPE-K, un modèle
d'auto-adaptation autonome capable de s'ajuster dynamiquement à un
environnement permettant de répondre à la nécessité d'intégrer les
données collectées et leurs modèles de traitement, le système opérant et
sa connexion avec son environnement, l'évolution dynamique et la
nécessité de maintenir une représentation fidèle du comportement
attendu.

## Verrous scientifiques

Les systèmes logiciels sont amenés à évoluer continuellement, que ce
soit de manière planifiée dans le cadre d'une maintenance, ou de façon
réactive face à des événements imprévus affectant leur environnement ou
leur système de référence. Cette capacité d'adaptation soulève des
verrous scientifiques majeurs, tant sur le plan de la robustesse des
décisions que sur celui de l'architecture logicielle et de la cohérence
entre modèle et système.

- **Dynamisme des architectures logicielles et des infrastructures
  d'exécution:** Les systèmes visés doivent être capables d'évoluer à
  l'exécution tant au niveau de l'architecture qu'au niveau des
  infrastructures sous-jacentes. Cela implique la conception
  d'architectures logicielles modulaires, flexibles et adaptables,
  supportant l'ajout, la suppression ou la modification de composants
  hétérogènes sans interruption de service ni dégradation des
  performances. D'autre part, les infrastructures d'exécution (cloud,
  edge, fog, systèmes embarqués, etc.) doivent offrir des mécanismes de
  supervision, de déploiement et de reconfiguration en temps réel, afin
  de soutenir cette adaptabilité. L'évolution continue du comportement
  logiciel, la gestion adaptative des ressources, la migration
  transparente de services, ainsi que la reconfiguration dynamique et
  autonome des configurations d'exécution constituent des axes majeurs à
  développer pour garantir la résilience, la performance et la
  continuité de service dans des environnements en évolution continue.

- **Validation incrémentale :** Le processus de validation incrémental
  permet de considérer les écarts d'une spécification évolutive, pour
  répondre au mieux aux besoins de l'utilisateur, tout en préservant la
  stabilité du logiciel existant à mesure que nouvelles fonctionnalités
  sont intégrées. L'intégration de techniques telles que
  Model-in-the-Loop (MiL), Software-in-the-Loop (SiL) ou
  Hardware-in-the-Loop (HiL) impose de résoudre des verrous de
  synchronisation, de validation distribuée et d'orchestration des
  configurations.

- **Prise en compte de l'incertitude dans la décision :** Les données
  disponibles peuvent être partielles, bruitées ou de granularité
  insuffisante pour une analyse fine. L'environnement d'exécution doit
  être considéré comme dynamique et non maitrisable. Il s'agit de
  modéliser et quantifier ces incertitudes, puis de les intégrer de
  manière explicite dans les processus de décision et d'adaptation
  (analyse, plan). La difficulté est de garantir le niveau de service
  malgré l'incertitude, tout en préservant un équilibre entre robustesse
  et sûreté, afin d'assurer que le système reste fiable et performant.

- **Résilience et service dégradé :** Il s'agit de fournir des garanties
  de fonctionnement même en cas de conditions dégradées, notamment
  lorsque l'environnement devient partiellement ou totalement
  imprévisible. La notion de service dégradé doit être formellement
  définie, et le processus de mise en œuvre des actions d'adaptation
  doit être explicité.

Plus particulièrement, lorsque nous étudions le jumeau numérique (JN) en
tant qu'objet scientifique, la complexification de l'architecture et la
précision des algorithmes sont augmentées. Les JNs sont des systèmes
adaptables spécifiques. Les verrous suivants doivent être ajoutés pour
répondre à leur besoin d'adaptation continue :

- **Relation bidirectionnelle entre modèle et système :** L'interaction
  continue entre le modèle et le système réel induit des phénomènes de
  dérive (en anglais, *drift*) ou de réajustement. Comprendre, détecter
  et gérer ces dynamiques est un enjeu clé pour maintenir la pertinence
  des représentations utilisées. Plus particulièrement, un jumeau
  numérique doit rester synchronisé avec son système de référence tout
  en minimisant les interruptions. Cela suppose de détecter les écarts
  significatifs, d'en analyser les causes, et de mettre en place des
  actions correctrices.

- **Fidélité et granularité adaptatives :** Les niveaux de fidélité et
  d'échelle doivent pouvoir être ajustés dynamiquement en fonction des
  objectifs, des contraintes de calcul, de la criticité ou de l'urgence.
  La notion de systèmes de systèmes ou d'écosystème aidera à considérer
  une adaptation par la composition. Par ailleurs, il est nécessaire de
  définir des métriques robustes pour guider ces ajustements, par
  exemple la distance entre le jumeau numérique et son système de
  référence ou encore l'intégration de probabilité sur les entrées.
  Cette adaptation doit intégrer le déploiement en plus de
  l'architecture.

## Liens avec les GTs

Ce défi est directement relié aux [GT EDT](https://gdr-scilog.cnrs.fr/group/edt/) (Engineering
Digital Twin), le [GT SyLA](https://gdr-scilog.cnrs.fr/group/syla/) (Systèmes Logiciels Adaptables), qui traitent
respectivement de la représentation logicielle (i.e., modèle) des
systèmes physiques, et de la capacité d'adaptation des logiciels face à
des contextes changeants, et le GT IIDM (Industrialisation de
l'ingénierie dirigée par les modèles) qui propose des solutions pour
représenter avec des modèles l'état du système à adapter et les
informations nécessaires à l'adaptation lors de l'implémentation des
boucles d'adaptation (MAPE-K, par exemple). Cela correspond au domaine
de recherche dit des models@run.time.

Ce défi est également relié aux autres groupes de travail, sans pour
autant qu'il soit un élément central.

## Liens avec les autres défis

- Programmation et Analyse de systèmes Embarqués ([PAE](https://gdr-scilog.cnrs.fr/defi/pae/))

- Confiance et traçabilité dans la production de logiciels ([Trusted](http://localhost:1313/defi/trusted/))

- Interopérabilité pour les preuves et les programmes ([IPP](https://gdr-scilog.cnrs.fr/defi/ipp/))

- Scénarios décroissants du numérique ([fadingICT](https://gdr-scilog.cnrs.fr/defi/glia/))

## Liens avec les autres GdRs

- [RSD (Réseaux et Systèmes Distribués)](https://gdr-rsd.cnrs.fr/)

- [MADICS (Masses de Données, Informations et Connaissances en Sciences)](<https://www.madics.fr/>)

- [MACS (Modélisation, Analyse et Conduite des Systèmes dynamiques)](https://gdr-macs.fr/)

- [SOC2 (SOC: Sûreté de Fonctionnement et Sécurité des Systèmes)](https://www.gdr-soc.cnrs.fr/)

- [ROD (Recherche opérationnelle et décision)](http://gdrro.lip6.fr/)

