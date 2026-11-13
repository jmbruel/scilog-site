---
title: "Journée LVP 2025"
type: news
date: "2025-08-13T22:00:59Z"
draft: false
categories:
- An2025
- EvenementGPL
- LVP
archives: ["2025-11"]
---

# Journée 2025 du GT LVP du GdR GPL du CNRS

- Cette journée se déroulera le **jeudi 13 novembre 2025** sur le campus de l'Esplanade de l'**Université de Strasbourg**.
- Le [groupe de travail LVP](https://gdrgpl.myxwiki.org/xwiki/bin/view/Main/GTs/GT%20Langages%20et%20v%C3%A9rification%20de%20programmes%20(LVP)) du [GdR GPL](https://gdr-gpl.cnrs.fr) est dédié aux Langages et à la Vérification de Programmes.
- La participation est gratuite mais l'[inscription](https://framaforms.org/journee-lvp-du-13-novembre-2025-1756886583) est obligatoire.

## Calendrier

- **17 octobre 2025** : date limite pour proposer un exposé
- **31 octobre 2025** : date limite pour s'inscrire (sans proposer d'exposé)
- **13 novembre 2025** : journée à Strasbourg

## Localisation

- UFR Mathématique-Informatique, Université de Strasbourg
- 7 rue Descartes, 67000 Strasbourg
- PAMAI (petit amphithéâtre de Mathématique et d'Informatique)

**Transports à proximité**

- Tram C, E, F : arrêt « Université »

**Plans d'accès**

- [Plan d'accès (Google Maps)](https://maps.app.goo.gl/bpfBeSq986fADQyz7)
- [Plan d'accès (OpenStreetMap)](https://osm.org/go/0DOBNx4Nx?relation=366500)

## About talks

- Presentations can be given in English or French.
- The length of talks is 50 minutes (questions included) for invited talks and 20 minutes (questions included) for regular talks.

## Orateurs invités

- Loïc Pujet, ICube, CNRS, Université de Strasbourg, *[Réinterpréter la théorie des types dans les sétoïdes](#resume-pujet)*
- Jacques-Henri Jourdan, LMF, CNRS, Université Paris-Saclay, *[Vérifiez vos programmes Rust avec Creusot](#resume-jourdan)*

## Programme

- 09:30 **Ouverture**
- 09:40-10:50 **Session 1**
  - 09:40-10:30 Loïc Pujet, *[Réinterpréter la théorie des types dans les sétoïdes](#resume-pujet)*
  - 10:30-10:50 Olivier Hermant, *[Défi interopérabilité des preuves et des programmes](#resume-hermant)*
- 10:50-11:20 **Pause**
- 11:20-12:40 **Session 2**
  - 11:20-11:40 Vincent Trélat, *[Brewing the Soundness of BEer: Denotational Semantics, Set Theory and B](#resume-trelat)*
  - 11:40-12:00 Ghilain Bergeron, *[Sémantique dénotationnelle, espaces métriques et Go](#resume-bergeron)*
  - 12:00-12:20 Pierre Wilke, *[Formalisation de mécanismes de sécurité matériels](#resume-wilke)*
  - 12:20-12:40 Clément Poncelet, *[Tailoring Hybrid Fuzzing to Expose Vulnerabilities](#resume-poncelet)*
- 12:40-14:20 **Déjeuner**
- 14:20-15:50 **Session 3**
  - 14:20-15:10 Jacques-Henri Jourdan, *[Vérifiez vos programmes Rust avec Creusot](#resume-jourdan)*
  - 15:10-15:30 Paul Patault, *[Une barrière d'abstraction explicite pour la vérification de programmes](#resume-patault)*
- 15:30-16:00 **Pause**
- 16:00-17:20 **Session 4**
  - 16:00-16:20 Valentin Barbazo, *[Shape Analysis by Abstract Interpretation of Non-Blocking Concurrent Programs](#resume-barbazo)*
  - 16:20-16:40 Arthur Charguéraud, *[Typage de la surcharge](#resume-chargueraud)*
  - 16:40-17:00 Yanni Lefki, *[Binding Boolean Expressions and Extended Pattern Matching](#resume-lefki)*
  - 17:00-17:20 Elian Morel, *[Optimisation de l’inférence LLM avec OptiTrust](#resume-morel)*
- 17:20-17:30 **Clôture**

## Résumés des exposés

### Réinterpréter la théorie des types dans les sétoïdes <small style="font-weight:normal">Loïc Pujet, ICube, CNRS, Université de Strasbourg (exposé invité) — [Slides](/assets/pdf/lvp/2025/2025_pujet.pdf)</small> {#resume-pujet}

Comme son nom l'indique, la théorie des types *intensionnelle* ne permet pas d'utiliser les principes d'extensionnalité des fonctions et des propositions, afin de préserver la décidabilité du typage. Si l'absence d'extensionnalité est un obstacle à la formalisation des maths, il existe une technique bien connue pour la contourner : utiliser des sétoïdes, c'est-à-dire des types équipés d'une relation d'équivalence.

Dans ses travaux de thèse, Hofmann a proposé plusieurs traductions qui interprètent les types comme des sétoïdes, mais aucun d'entre eux ne parvient à préserver toutes les égalités définitionnelles de la théorie des types. Pour cela, il a fallu attendre les travaux d'Altenkirch, qui simplifient les sétoïdes en confinant les relations d'équivalence à un univers de propositions « strictes ». Dans cet exposé, je présenterai une modification du modèle d'Hofmann qui permet d'avoir une traduction de la théorie des types sans pour autant contraindre les relations d'équivalence à être strictes. Je discuterai ensuite des conséquences de ce nouveau modèle, en particulier en ce qui concerne les formes faibles de l'axiome du choix.

### Défi interopérabilité des preuves et des programmes <small style="font-weight:normal">Olivier Hermant, Mines Paris PSL — [Slides](/assets/pdf/lvp/2025/2025_hermant.pdf)</small> {#resume-hermant}

Dans le cadre du renouvellement du GdR GPL en 2026, différents défis sont mis en place. Cette présentation décrira les enjeux de la proposition de défi « interopérabilité des preuves et des programmes » et sera l'occasion d'échanger sur ce thème avec les participants.

### Brewing the Soundness of BEer: Denotational Semantics, Set Theory and B <small style="font-weight:normal">Vincent Trélat, Université de Lorraine, CNRS, Inria — [Slides](/assets/pdf/lvp/2025/2025_trelat.pdf)</small> {#resume-trelat}

We present a denotational semantics of the B language, implemented in the Lean proof assistant and used to prove the correctness of an encoding from B to SMT-LIB.

### Sémantique dénotationnelle, espaces métriques et Go <small style="font-weight:normal">Ghilain Bergeron, Université de Lorraine, CNRS, Inria — [Slides](/assets/pdf/lvp/2025/2025_bergeron.pdf)</small> {#resume-bergeron}

Distributed PlusCal est un langage de spécification d'algorithmes concurrents/distribués ressemblant fortement à un langage de programmation. Cependant, celui-ci ne compile qu'en TLA+ et n'est donc pas exécutable. Dans cet exposé, je vais vous présenter une sémantique dénotationnelle pour Go, dans l'optique de vérifier formellement un compilateur pour Distributed PlusCal ciblant Go.

### Formalisation de mécanismes de sécurité matériels <small style="font-weight:normal">Pierre Wilke, CentraleSupélec Rennes — [Slides](/assets/pdf/lvp/2025/2025_wilke.pdf)</small> {#resume-wilke}

La sécurité des systèmes repose in fine sur la sécurité du matériel sur lequel ils s'exécutent. Afin de garantir cette sécurité, nous utilisons Kôika, un langage de description de matériel (Hardware Description Language, HDL) embarqué dans l'assistant de preuve Rocq. En particulier, nous étendons heRVé, un processeur RISC-V écrit en Kôika, avec différents mécanismes de sécurité : une shadow stack et des landing pads pour l'intégrité du flot de contrôle, des niveaux de privilèges pour l'isolation entre mode utilisateur et mode noyau, ainsi qu'un mécanisme de protection de la mémoire physique (PMP) pour l'isolation inter-processus. En plus de ces implémentations, nous nous attachons à prouver le bon fonctionnement de ces mécanismes. Pour faciliter la maintenance des preuves, celles-ci sont déchargées à un solveur SMT.

### Tailoring Hybrid Fuzzing to Expose Vulnerabilities <small style="font-weight:normal">Clément Poncelet — [Slides](/assets/pdf/lvp/2025/2025_poncelet.pdf)</small> {#resume-poncelet}

The presentation is about my previous postdoc project at Uppsala University. What follows is an extract of the paper published at ASE'22: Fuzz testing (“fuzzing”) is a widely-used and effective dynamic technique to discover crashes and security vulnerabilities in software, supported by numerous tools, which keep improving in terms of their detection capabilities and speed of execution. In this paper, we report our findings from using state-of-the-art mutation-based and hybrid fuzzers on a non-trivial code base, that of Contiki-NG, to expose and fix serious vulnerabilities in various layers of its network stack. As a by-product, we provide a Git-based platform which allowed us to create and apply a new, quite challenging, open-source bug suite for evaluating fuzzers on real-world software vulnerabilities. Using this bug suite, we present an impartial and extensive evaluation of the effectiveness of these fuzzers, and measure the impact that sanitizers have on it.

### Vérifiez vos programmes Rust avec Creusot <small style="font-weight:normal">Jacques-Henri Jourdan, LMF, CNRS, Université Paris-Saclay (exposé invité) — [Slides](/assets/pdf/lvp/2025/2025_jourdan.pdf)</small> {#resume-jourdan}

Creusot est un outil de vérification déductive pour le langage Rust. Il traduit des programmes Rust annotés en des programmes Coma, qu'il envoie à l'outil Why3 pour en décharger les obligations de preuves à l'aide de prouveurs SMT. Il exploite les garanties de contrôle de l'aliasing fournies par le système de types de Rust afin de simplifier les obligations de preuves.

Après une présentation des mécanismes à l'œuvre pour la gestion des programmes typés dans le fragment « safe » de Rust, nous présenterons de nouvelles fonctionnalités permettant de vérifier formellement des programmes ne respectant pas les conventions habituelles de contrôles de l'aliasing, écrites donc dans le fragment « unsafe ». Celles-ci s'appuient sur une notion de code fantôme avec possession afin de décrire à l'outil de preuve les mécanismes plus complexes de transfert de possession dans ces programmes. Grâce à ces mécanismes, nous avons pu prouver correct dans Creusot des algorithmes utilisant conjointement de la mutation et du partage, comme la structure d'union disjointe, les tableaux persistants ou l'algorithme de Morris pour le parcours efficace en mémoire d'arbres binaires. Nous envisageons d'utiliser ces mécanismes pour prouver des programmes concurrents, en particulier avec des accès mémoires faiblement cohérents.

### Une barrière d'abstraction explicite pour la vérification de programmes <small style="font-weight:normal">Paul Patault, Laboratoire Méthodes Formelles, Université Paris-Saclay — [Slides](/assets/pdf/lvp/2025/2025_patault.pdf)</small> {#resume-patault}

Dans cet exposé nous présentons Coma, un langage pour la vérification de programmes qui permet au programmeur de choisir quelle partie d'une fonction est vérifiée par l'appelant et quelle partie lui est cachée et vérifiée plutôt lors de sa définition. Nous illustrons cette notion de barrière d'abstraction explicite au travers de plusieurs exemples, en montrant notamment comment elle permet de simplifier (voire de supprimer) les spécifications.

### Shape Analysis by Abstract Interpretation of Non-Blocking Concurrent Programs <small style="font-weight:normal">Valentin Barbazo, ENS, Université Paris-Saclay — [Slides](/assets/pdf/lvp/2025/2025_barbazo.pdf)</small> {#resume-barbazo}

While concurrency can achieve significant performance improvements, it also introduces an additional layer of complexity in program design. Synchronization mechanisms are required to prevent data races on shared resources, which could otherwise lead to inconsistent results or data corruption. For instance, pointer updates by one thread may render some memory regions unreachable to others, thereby invalidating their assumptions about shared data. In this talk I present ongoing work toward a shape analysis for concurrent programs based on non-blocking synchronization mechanisms. Our goal is to prove the preservation of structural properties of dynamically allocated data structures shared across multiple threads. Our approach builds on previous work describing how to embed Rely-Guarantee reasoning in the Abstract Interpretation framework. I describe our current progress on the design of an effective thread-modular shape analysis leveraging existing separation-logic-based memory abstract domains to precisely capture and account for thread interactions.

### Typage de la surcharge <small style="font-weight:normal">Arthur Charguéraud, ICube, Inria — [Slides](/assets/pdf/lvp/2025/2025_charguerand.pdf)</small> {#resume-chargueraud}

Les formules mathématiques usuelles cachent une quantité importante d'information implicite, notamment le type des opérateurs : on écrit généralement "+" et non "+_Z". Autrement dit, les opérateurs usuels sont surchargés (overloading). Parmi les algorithmes de typage existants permettant de résoudre la surcharge, aucun n'est accompagné d'une borne formelle de complexité. Dans ce travail, nous proposons un algorithme polynomial (en la taille du programme explicitement typé et la taille de la description des opérateurs surchargés) permettant de résoudre la surcharge des fonctions (y compris d'ordre supérieur), des constantes, mais aussi des noms de champs de structures, et des constructeurs de données (y compris dans les patterns).

### Binding Boolean Expressions and Extended Pattern Matching <small style="font-weight:normal">Yanni Lefki, Université de Strasbourg, Inria — [Slides](/assets/pdf/lvp/2025/2025_lefki.pdf)</small> {#resume-lefki}

Pattern matching has been around for decades, and subject to extensive research and extensions over the years. Nevertheless, recent features such as Rust's if-let construct, and recent articles such as Cheng and Parreaux OOPSLA'24, suggest that there might still be room for improvement. In this talk, I will describe a streamlined presentation that unifies the various constructs related to pattern matching and to extended forms of conditionals. For the proposed constructs, I will present syntax, semantics, typing rules, as well as a naive compilation scheme. Interestingly, all the ingredients take the form of conservative extensions of the traditional ML formalism. Regarding program optimization, I will present a few representative rewrite rules, and explain how OptiTrust's type-and-effect system can be used to check for commutativity or idempotence of effects, two properties that are crucial for optimizing patterns that feature possibly effectful expressions.

### Optimisation de l’inférence LLM avec OptiTrust <small style="font-weight:normal">Elian Morel, Université de Strasbourg, Inria</small> {#resume-morel}

OptiTrust est un framework interactif de transformation source à source pour du code C, permettant d’appliquer des optimisations tout en garantissant la préservation de la sémantique du programme. Cet exposé présente l'utilisation d'OptiTrust pour optimiser l’inférence d’un modèle de langage (LLM). Les optimisations réalisées incluent la transformation du traitement séquentiel token-par-token en une version vectorisée traitant le prompt globalement, ainsi que l’application de "strip mining" pour améliorer la gestion des données. Un travail en cours porte sur l'optimisation dénommée "quantization", qui consiste à réduire la précision des nombres à travers des normalisations locales. Nous sommes également en train de terminer l'implémentation des conditions suffisantes qui permettent de garantir la préservation sémantique pour chacune des transformations mises en jeu. Enfin, l'exposé présentera des nouveaux mécanismes d'inférence de certaines opérations fantômes requises notamment pour analyser en logique de séparation les ressources dans du code manipulant des matrices.


## Liste des participants

- Christian Attiogbe, LS2N, Nantes Université
- Thibaut Balabonski, LMF, Université Paris-Saclay
- Valentin Barbazo, ENS, Université Paris-Saclay
- Thibaut Benjamin, LMF, Université Paris-Saclay
- Ghilain Bergeron, Université de Lorraine, CNRS, Inria
- Pierre Boutry, ICube, Université de Strasbourg
- Julie Cailler, Université de Lorraine, CNRS, Inria
- Arthur Charguéraud, ICube, Inria
- Mahmoud Chaari, EPITA, LIP6
- Catherine Dubois, ENSIIE
- Laurent Fuchs, XLIM-ASALI, Université de Poitiers
- Alain Giorgetti, Université Marie et Louis Pasteur, institut FEMTO-ST
- Olivier Hermant, Mines Paris PSL
- Alexandre Jean, Université de Strasbourg
- Jacques-Henri Jourdan, CNRS, LMF
- Anissa Kheireddine, LIP6
- Nikolai Kosmatov, Thales cortAIx Labs
- Yanni Lefki, Université de Strasbourg, Inria
- Nicolas Magaud, ICube, Université de Strasbourg
- Dylan Marinho, LIP6, Sorbonne Université
- Elian Morel, Université de Strasbourg, Inria
- Andrei Paskevich, LMF, Université Paris-Saclay
- Paul Patault, Laboratoire Méthodes Formelles, Université Paris-Saclay
- Clément Poncelet
- Loïc Pujet, ICube, Université de Strasbourg
- Julien Signoles, Université Paris-Saclay, CEA, List
- Daniel Stan, LRE EPITA & ICube
- Vincent Trélat, Université de Lorraine, CNRS, Inria
- Pierre Wilke, CentraleSupélec Rennes
- Yani Ziani, Université d'Orléans

## Organisation

Journée organisée par [Julie Cailler](mailto:julie.cailler@loria.fr) (Université de Lorraine, Loria), [Nicolas Magaud](mailto:magaud@unistra.fr) (Université de Strasbourg) et [Julien Signoles](mailto:julien.signoles@cea.fr) (Université Paris-Saclay, CEA, List) pour le programme scientifique et [Nicolas Magaud](mailto:magaud@unistra.fr) (Université de Strasbourg) pour l'organisation locale, avec le soutien du [GdR GPL](https://gdr-gpl.cnrs.fr) du CNRS et de l'Université de Strasbourg.

<p style="display:flex; flex-wrap:wrap; align-items:center; gap:2rem;">
  <a href="https://gdr-gpl.cnrs.fr"><img src="/assets/png/lvp-logos/gdrgpl.jpg" alt="Logo du GdR GPL" style="height:70px;"/></a>
  <a href="https://list.cea.fr/"><img src="/assets/png/lvp-logos/cealist.png" alt="Logo du CEA List" style="height:70px;"/></a>
  <a href="https://www.loria.fr/"><img src="/assets/png/lvp-logos/logo_loria.png" alt="Logo du LORIA" style="height:70px;"/></a>
  <a href="https://www.univ-lorraine.fr/"><img src="/assets/png/lvp-logos/logo_universite_de_lorraine.png" alt="Logo de l'Université de Lorraine" style="height:70px;"/></a>
  <a href="https://www.unistra.fr/"><img src="/assets/png/lvp-logos/ustrasbourg.png" alt="Logo de l'Université de Strasbourg" style="height:70px;"/></a>
</p>
