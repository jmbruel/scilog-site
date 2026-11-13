---
title: "Journée LVP 2024"
type: news
date: "2024-11-14T22:00:59Z"
draft: false
categories:
- An2024
- EvenementGPL
- LVP
archives: ["2024-11"]
---

# Journée 2024 du GT LVP du GdR GPL du CNRS

- Cette journée se déroulera le **jeudi 14 novembre 2024** à l'**IRIF** (Université Paris Cité).
- Le [groupe de travail LVP](https://gdrgpl.myxwiki.org/xwiki/bin/view/Main/GTs/GT%20Langages%20et%20v%C3%A9rification%20de%20programmes%20(LVP)) du [GdR GPL](https://gdr-gpl.cnrs.fr) est dédié aux Langages et à la Vérification de Programmes.
- La participation est gratuite mais l'[inscription](https://docs.google.com/forms/d/e/1FAIpQLSf-Sk_uiMzEEVmrclQxBJUIIlM1E_QiXMz46PYZTX3ZtAYfzg/viewform) est obligatoire.

## Localisation

- IRIF, Université Paris Cité
- Place Aurélie Nemours, 75013 Paris
- Bâtiment Sophie Germain, niveau -1, amphithéâtre Turing

**Transports à proximité**

- Métro 14, RER C : « Bibliothèque François-Mitterrand »
- Tramway T3a : « Avenue de France »
- Bus 62, 89 : « Porte de France »

**Plans d'accès**

- [Plan du campus à imprimer avec entrée IRIF](https://www.irif.fr/_media/informations/plan_prg_web2017.pdf)
- [Photo du bâtiment avec entrée IRIF](https://www.irif.fr/_media/informations/irif-entrance.png)
- [Plan d'accès (Google Maps)](https://www.google.fr/maps/place/IRIF+%28Institut+de+Recherche+en+Informatique+Fondamentale%29/@48.8272375,2.3805452,17z/data=!4m5!3m4!1s0x47e6723a27b7f6eb:0xb51f9eff53bd0a1a!8m2!3d48.8270299!4d2.3813651)
- [Plan d'accès (OpenStreetMap)](https://umap.openstreetmap.fr/fr/map/access-preuves-programmes-et-systemes_8011#17/48.82608/2.38092)

## About talks

- Presentations can be given in English or French.
- The length of talks is 50 minutes (questions included) for invited talks and 20 minutes (questions included) for regular talks.

## Orateurs invités

- Julie Cailler, Université de Lorraine, Loria, *[SC-TPTP : étendre le format TPTP pour les preuves basées sur les séquents](#resume-cailler)*
- Virgile Prevosto, Université Paris-Saclay, CEA, List, *[Vérification de programmes : au-delà des contrats de fonction](#resume-prevosto)*

## Programme

- 09:00-10:30 **Session 1**
  - 09:00-09:50 Virgile Prevosto, *[Vérification de programmes : au-delà des contrats de fonction](#resume-prevosto)*
  - 09:50-10:10 Keisuke Nishimura, *[Towards Formal Verification of the Linux Kernel Scheduler](#resume-nishimura)*
  - 10:10-10:30 Catherine Dubois, *[Deductive Verification of Sparse Sets in Why3](#resume-dubois)*
- 10:30-11:00 **Pause**
- 11:00-12:20 **Session 2**
  - 11:00-11:20 Emilio Jesús Gallego Arias, *[Flèche: Incremental Validation for Hybrid Formal Documents](#resume-arias)*
  - 11:20-11:40 Léo Andrès, *[Owi : exécution symbolique parallèle cross-langage](#resume-andres)*
  - 11:40-12:00 Guillaume Bury, *[Chamelon : un delta-debugger pour OCaml](#resume-bury)*
  - 12:00-12:20 Basile Starynkevitch, *[Le moteur d'inférences libre RefPerSys](#resume-starynkevitch)*
- 12:20-14:00 **Déjeuner**
- 14:00-15:50 **Session 3**
  - 14:00-14:50 Julie Cailler, *[SC-TPTP : étendre le format TPTP pour les preuves basées sur les séquents](#resume-cailler)*
  - 14:50-15:10 Nathanaëlle Courant, *[Testing convertibility in parallel](#resume-courant)*
  - 15:10-15:30 David Monniaux, *[Collaboration between untrusted imperative code and Coq code](#resume-monniaux)*
  - 15:30-15:50 Andrew Samokish, *[Automated debugging of SMTCoq](#resume-samokish)*
- 15:50-16:20 **Pause**
- 16:20-17:40 **Session 4**
  - 16:20-16:40 Vincent Trélat, *[Enhancing B language reasoners with SMT techniques](#resume-trelat)*
  - 16:40-17:00 Sylvie Boldo, *[Formalisation des éléments finis en Coq](#resume-boldo)*
  - 17:00-17:20 Raphaël Monat, *[Formalizing Date Arithmetic and Statically Detecting Ambiguities for the Law](#resume-monat)*
  - 17:20-17:40 Ghilain Bergeron, *[Compilation vérifiée de spécifications d'algorithmes distribués](#resume-bergeron)*
- 17:40 **Clôture**

## Résumés des exposés

### Vérification de programmes : au-delà des contrats de fonction <small style="font-weight:normal">Virgile Prevosto, Université Paris-Saclay, CEA, List (exposé invité) — [Slides](/assets/pdf/lvp/2024/prevosto.pdf)</small> {#resume-prevosto}

Un prérequis à la vérification formelle d'un programme est de disposer d'une spécification formelle de ce que celui-ci est censé faire. Depuis Eiffel, de nombreux langages de programmation ont été munis d'un langage de spécification associé (Java avec JML, C avec ACSL, Ada avec Spark, Rust avec Creusot, ...), basé sur la notion de contrat de fonction : pour chaque fonction, on précise ce qu'elle attend de son appelant (sa précondition), et ce qu'elle garantit au moment du retour (sa postcondition). Ce type de spécification permet de décrire de nombreuses propriétés et se prête bien à la vérification déductive.

Toutefois, certains types de propriétés ne peuvent pas réellement être représentés sous forme de contrats de fonction, sauf au prix d'un encodage complexe qui, s'il est fait à la main, augmente grandement le risque d'introduire une erreur dans la spécification elle-même, et rend donc difficile de se convaincre (ou de convaincre un évaluateur) que ce qu'on a vérifié correspond bien à la propriété de départ. Un premier exemple d'un tel type de propriétés met en jeu l'intégrité des données: vérifier qu'on ne modifie une location mémoire donnée que lorsque certaines conditions sont vérifiées. Cela pourrait conduire à ajouter une assertion pour chaque accès en écriture dans le code, ce qui devient vite prohibitif. Un autre type de propriétés difficile à exprimer à l'aide de contrats met en jeu plusieurs exécutions, comme dans le cas de la non-interférence, où on cherche à montrer que deux exécutions d'une fonction à partir d'états dont la partie publique est identique donnent également en sortie des états dont la partie publique est identique. Enfin, un troisième exemple concerne des propriétés sur des séquences d'opérations, notamment pour s'assurer qu'on applique des fonctions dans un ordre adéquat (ne pas écrire dans un fichier qu'on a fermé, ou qu'on a ouvert en lecture seule).

Dans cet exposé, nous présenterons différents greffons de l'outil d'analyse de code C Frama-C qui permettent de facilement exprimer des propriétés des types indiqués ci-dessus (respectivement MetAcsl, RPP, et Aoraï), fournissant une instrumentation du code sur laquelle il est possible de lancer des analyseurs classiques (interprétation abstraite avec Eva, vérification déductive avec Wp ou vérification à l'exécution avec E-ACSL), ou, dans certains cas, de procéder directement à des analyses dédiées.

### Towards Formal Verification of the Linux Kernel Scheduler <small style="font-weight:normal">Keisuke Nishimura, Inria, Whisper team — [Slides](/assets/pdf/lvp/2024/nishimura.pdf)</small> {#resume-nishimura}

The frequent tweaking of heuristics in the Linux kernel task scheduler suggests a need for formal verification, to ensure that important properties are maintained. Nevertheless, writing and verifying specifications for Linux kernel code have been considered to be impractical, leading other operating system verification efforts to propose co-design of new code and associated specifications instead. Furthermore, the Linux kernel evolves frequently, making any verification effort quickly out of date. Still, verification tools for C code are becoming more and more robust. In this paper, we explore whether it is now possible to apply formal verification directly to Linux kernel code, and to maintain the resulting specifications as the Linux kernel evolves. Our experiment focuses on the function should_we_balance, which is the gatekeeper to the Linux kernel scheduler’s load balancer, and on the verification tool Frama-C.

### Deductive Verification of Sparse Sets in Why3 <small style="font-weight:normal">Catherine Dubois, ENSIIE, Inria, LMF — [Slides](/assets/pdf/lvp/2024/dubois.pdf)</small> {#resume-dubois}

To represent finite sets of integers on an interval 0..n, Briggs and Torczon studied a very simple data structure in 1993, called  "sparse sets". With this representation, initialisation, membership test, insertion and deletion of an element are O(1) operations and iteration is O(n), where n is the cardinality of the set. This data structure is often used in compilers to allocate registers or to represent the objects in a video game. A variant of this data structure is also used in finite domain constraint solvers to represent the domains of integer variables. This variant makes it a backtrackable data structure. We have formalised and verified the original data structure and its variant in Why3. Set operations such as intersection and union are formally verified, even though they are less commonly used with this representation of sets. Although numerous implementations of sparse sets are available on the web, to our knowledge this is the first formal verification of this data structure with all its set operations and in particular its backtrackable variant.

### Flèche: Incremental Validation for Hybrid Formal Documents <small style="font-weight:normal">Emilio Jesús Gallego Arias, Inria, IRIF, Université de Paris</small> {#resume-arias}

We present Flèche, an engine for the incremental validation of hybrid formal documents, containing intermixed markup and code. Flèche has been designed using a set of qualitative and quantitative observations from users and developers of interactive proof assistants, and in particular it targets key use cases on existing systems such as non-linear interactive document development, enabling Human-Computer-Interaction research, and providing a document validation interface that meets the needs of tools used by researchers in software engineering, HCI, and machine learning.

A core challenge for Flèche is to meet the above needs, while at the same time providing a robust, flexible, and extensible implementation, suitable in a variety of different document configurations and languages. To this aim, we have developed a methodology based on programming language techniques that fosters a "correct by construction" approach. The methodology is based on a generic notion of functional interpretation for a family of languages, which captures the basic semantics of multi-layered documents with structure in one shot. Then, we use a combination of memoization and algebraic effects to instrument this interpreter hierarchy, capturing document dynamics such as changes, observation, environment updates, and error recovery in a modular way. We have developed a production-ready Flèche engine for the Coq Proof Assistant, which has been used to build several key applications, such as `fcc`, an extensible command line compiler for Coq, `petanque` an agent tailored to reinforcement-learning applications, `coq-lsp` an implementation of the Language Server Protocol for Coq, and jsCoq 2.0, which enables collaborative proof development purely from the web.

### Owi : exécution symbolique parallèle cross-langage <small style="font-weight:normal">Léo Andrès, OCamlPro — [Slides](/assets/pdf/lvp/2024/andres.pdf)</small> {#resume-andres}

Les limitations de JavaScript en tant que langage par défaut du Web ont conduit au développement de WebAssembly (Wasm), un langage sûr, efficace et modulaire. Wasm, bien qu’initialement conçu pour les applications web, est devenu une alternative sérieuse pour les environnements serveurs et les systèmes embarqués, en raison de ses avantages en termes de performances et de sécurité. Cependant, des vulnérabilités comme les débordements de tampon et les fuites de mémoire subsistent, ce qui peut conduire à des vulnérabilités. Pour répondre à cette problématique, nous introduisons Owi, un interpréteur symbolique pour Wasm, écrit en OCaml. Owi est basé sur un interpréteur modulaire et monadique capable d’exécutions concrètes et symboliques de programmes Wasm. Grâce à cette architecture, nous avons développé un outil de détection de bogues performant qui, selon notre évaluation, est le meilleur actuellement disponible pour Wasm.

En outre, puisque Wasm est une cible de compilation pour de nombreux langages, Owi peut être utilisé pour détecter des bogues dans des programmes issus d’autres langages tels que C et Rust, ou dans des projets mêlant les deux. Nos expériences, basées sur les benchmarks Test-Comp 2024, montrent qu’Owi offre des performances comparables à celles des outils représentant l’état de l’art comme KLEE, avec certains avantages dans des scénarios spécifiques où les approximations de KLEE peuvent entraîner des faux négatifs. Contrairement aux autres outils d’exécution symboliques qui ont une approche ad-hoc, le nôtre présente l’avantage d’être facilement utilisable pour tout langage possédant un compilateur vers Wasm.

### Chamelon : un delta-debugger pour OCaml <small style="font-weight:normal">Guillaume Bury, OCamlPro — [Slides](/assets/pdf/lvp/2024/bury.pdf)</small> {#resume-bury}

Tools that manipulate OCaml code can sometimes fail even on correct programs. Identifying and understanding the cause of the error usually involves manually reducing the size of the program in question, so as to obtain a shorter program causing the same error - a long, sometimes complex and rarely interesting task. Our work consists in automating this task using a minimiser, or *delta-debugger*. To do so, we propose a list of unitary heuristics, i.e. applying small-scale reductions to the program, combined with a dichotomy-based state-of-the-art algorithm. These proposals are implemented in the free Chamelon tool. Although designed to assist the development of an OCaml compiler, Chamelon can be adapted to all kinds of projects that manipulate OCaml code. It can analyse multifile projects and efficiently minimise real programs, reducing their size by one to several orders of magnitude. It is currently used to assist the industrial development of the flambda2 optimising compiler.

### Le moteur d'inférences libre RefPerSys <small style="font-weight:normal">Basile Starynkevitch</small> {#resume-starynkevitch}

[RefPerSys](https://github.com/RefPerSys/RefPerSys) est un moteur d'inférences libre pour Linux en cours de développement. On donnera les caractéristiques de ce moteur d'inférences (sous licence GPLv3+) et les difficultés rencontrées durant l'écriture de ce logiciel libre.

### SC-TPTP : étendre le format TPTP pour les preuves basées sur les séquents <small style="font-weight:normal">Julie Cailler, Université de Lorraine, Loria (exposé invité) — [Slides](/assets/pdf/lvp/2024/cailler.pdf)</small> {#resume-cailler}

SC-TPTP est une extension du format TPTP (Thousands of Problems for Theorem Provers) conçue pour intégrer les preuves basées sur les séquents dans un cadre standardisé. En effet, bien qu'étant un standard dans la communauté de preuve automatique, le format TPTP ne permet pas la représentation de preuves basées sur les séquents. Ces preuves sont pourtant très intéressantes, car elles se traduisent naturellement vers des assistants de preuve, permettant ainsi la génération de certificats de preuves.

SC-TPTP remédie à cette limitation en ajoutant une expressivité supplémentaire au format, permettant de formaliser ces preuves tout en restant compatible avec les outils et formats existants. Le format est également conçu comme un format d’échange entre les prouveurs automatiques et interactifs. L’un des objectifs clés de SC-TPTP est de répondre à un besoin fondamental : éviter la prolifération des formats et des standards dans la communauté. En unifiant les représentations de preuves, SC-TPTP simplifie le développement d'outils de preuve, réduit la complexité des conversions entre formats et permet une adoption plus large de diverses approches de preuves.

En parallèle, SC-TPTP s’accompagne d'une bibliothèque d'outils, SC-TPTP Utilities, incluant des prouveurs/assistants de preuve capables de générer/importer et valider des preuves au format SC-TPTP, ainsi que des outils de traduction permettant l’export vers d’autres systèmes de preuves interactifs comme Coq, facilitant ainsi encore plus l'interopérabilité.

### Testing convertibility in parallel <small style="font-weight:normal">Nathanaëlle Courant, Inria & OCamlPro — [Slides](/assets/pdf/lvp/2024/courant.pdf)</small> {#resume-courant}

In this talk, I will present a machine for testing the convertibility of lambda-terms. This machine is based on implementations of strong call-by-need evaluation, and is able to exploit that convertibility is closed by context: to prove that `f x` is convertible with `f y` when `f` is a constant, it is enough to prove that `x` and `y` are convertible. However, it is sometimes more efficient to unfold `f` to prove convertibility, for instance if it does not use its argument. Our machine solves both convertibility problems in parallel while sharing computations, and stops as soon as it is able to conclude about the initial problem.

### Collaboration between untrusted imperative code and Coq code <small style="font-weight:normal">David Monniaux, CNRS, Verimag — [Slides](/assets/pdf/lvp/2024/monniaux.pdf)</small> {#resume-monniaux}

Writing a whole program in Coq implies stringent requirements. A popular approach (e.g. in CompCert) is to offload certain computationally intensive aspects to imperative code developed in OCaml. However, linking arbitrary OCaml code to Coq may break type-safety and correctness. Many problems may be avoided by wrapping OCaml inside a monad. Many imperative aspects of OCaml may be simply modeled as nondeterminism. If the final result of a nondeterministic monadic program may be proved to be deterministic (with respect to a slow reference implementation, maybe), then it is possible to exit the monad. We illustrate this approach on a formally correct library for computing over BDD (binary decision diagrams).

### Automated debugging of SMTCoq <small style="font-weight:normal">Andrew Samokish, Université Paris-Saclay, CNRS, ENS Paris-Saclay, LMF</small> {#resume-samokish}

Debugging SMTCoq is challenging, often requiring considerable time to identify and resolve discrepancies. Locating the source of an error necessitates a deep understanding of both the formal proof environment and the underlying logical theories managed by the SMT solver. The complexity of the interaction between these systems means that even minor inconsistencies can be hard to trace, making the debugging process both time-consuming and demanding. We propose the development of a quasi-interactive command-line interface integrated with Coq to assist users in precisely locating the source of problems during the debugging process. The generated script allows keeping the trace and replaying proof steps with Coq, making the debugging process much more effective and fast.

### Enhancing B language reasoners with SMT techniques <small style="font-weight:normal">Vincent Trélat, Université de Lorraine, CNRS, Inria, Loria — [Slides](/assets/pdf/lvp/2024/trelat.pdf)</small> {#resume-trelat}

### Formalisation des éléments finis en Coq <small style="font-weight:normal">Sylvie Boldo, Inria & Université Paris-Saclay, LMF — [Slides](/assets/pdf/lvp/2024/boldo.pdf)</small> {#resume-boldo}

Ce travail formalise en Coq ce qu'est un élément fini, qui est une brique de base de la méthode des éléments finis qui vise à résoudre des équations différentielles sur des géométries complexes. Après la définition et quelques propriétés, nous avons défini les éléments finis de Lagrange en toute généralité (dimension, ordre...).

### Formalizing Date Arithmetic and Statically Detecting Ambiguities for the Law <small style="font-weight:normal">Raphaël Monat, Inria Lille — [Slides](/assets/pdf/lvp/2024/monat24.pdf)</small> {#resume-monat}

Legal expert systems routinely rely on date computations to determine the eligibility of a citizen to social benefits or whether an application has been filed on time. Unfortunately, date arithmetic exhibits many corner cases, which are handled differently from one library to the other, making faithfully transcribing the law into code error-prone, and possibly leading to heavy financial and legal consequences for users. In this work, we aim to provide a solid foundation for date arithmetic working on days, months and years. We first present a novel, formal semantics for date computations, and formally establish several semantic properties through a mechanization in the F⋆ proof assistant. Building upon this semantics, we then propose a static analysis by abstract interpretation to automatically detect ambiguities in date computations. We finally integrate our approach in the Catala language, a recent domain-specific language for formalizing computational law, and use it to analyze the Catala implementation of the French housing benefits, leading to the discovery of several date-related ambiguities.

### Compilation vérifiée de spécifications d'algorithmes distribués <small style="font-weight:normal">Ghilain Bergeron, Université de Lorraine, CNRS, Inria, Loria — [Slides](/assets/pdf/lvp/2024/bergeron.pdf)</small> {#resume-bergeron}

Les systèmes distribués sont présents tout autour de nous. Afin de garantir leur bon fonctionnement, les algorithmes qu'ils implémentent sont souvent vérifiés dans des outils tels que TLA+. Mais qu'en est-il des implémentations ? Peut-on faire confiance à une implémentation écrite à la main ? Dans cet exposé, nous verrons comment gagner en confiance dans le bon fonctionnement de ces systèmes, en dérivant automatiquement, à partir d'une spécification donnée en PlusCal, des implémentations d'algorithmes satisfaisant la spécification.


## Liste des participants

- Idir Ait-Sadoune, Université Paris-Saclay, CentraleSupélec, LMF
- Michele Alberti, Université Paris-Saclay, CEA, List
- Léo Andrès, OCamlPro
- Jaime Arias, CNRS, LIPN, Université Sorbonne Paris Nord
- Farah Benmouhoub, Université Paris-Saclay, CEA, List
- Ghilain Bergeron, Université de Lorraine, CNRS, Inria, Loria
- Giovanni Bernardi, Université Paris Cité, IRIF
- Téo Bernier, Thales TRT
- Sylvie Boldo, Inria & Université Paris-Saclay, LMF
- Guillaume Bury, OCamlPro
- Julie Cailler, Université de Lorraine, Loria
- Pierre Chambart, OCamlPro
- Térence Clastres, Université d'Orléans, LIFO
- Basile Clément, OCamlPro
- François Clément, Inria
- Loïc Correnson, Université Paris-Saclay, CEA, List
- Nathanaëlle Courant, Inria & OCamlPro
- Frédéric Dabrowski, Université d'Orléans, LIFO
- Pierre-Évariste Dagand, Université Paris Cité, IRIF
- Jérémy Damour, Université Paris-Saclay, CEA, List
- Catherine Dubois, ENSIIE & Inria & Université Paris-Saclay, LMF
- Stefania Dumbrava, ENSIIE
- Jean-Christophe Filliâtre, CNRS
- Aymeric Fromherz, Inria
- Laurent Fuchs, Université de Poitiers, XLIM-ASALI
- Emilio Jesús Gallego Arias, Inria & Université Paris Cité, IRIF
- Christophe Garion, ISAE-SUPAERO
- Alain Giorgetti, Université de Franche-Comté, Institut FEMTO-ST
- Julien Girard-Satabin, Université Paris-Saclay, CEA, List
- Armaël Guéneau, Inria Saclay, LMF
- Jordan Ischard, Université d'Orléans, LIFO
- Jacques-Henri Jourdan, CNRS, LMF
- Xavier Leroy, Collège de France
- Jean-Marie Madiot, Inria
- Nicolas Magaud, ICube, Université de Strasbourg
- Frédéric Mallet, Université Côte d'Azur, CNRS, Inria, I3S
- Mattéo Manighetti, Inria & Université Paris-Saclay, LMF
- Claude Marché, Inria & Université Paris-Saclay, LMF
- Micaela Mayero, Inria Saclay
- Raphaël Monat, Inria Lille
- David Monniaux, CNRS, Verimag
- Patricia Mouy, Université Paris-Saclay, CEA, List
- Julien Narboux, Université Paris Cité, IRIF
- Keisuke Nishimura, Inria, Whisper team
- Carlos Olarte, Sorbonne Paris Nord, LIPN
- Andrei Paskevich, Université Paris-Saclay, LMF
- Paul Patault, Université Paris-Saclay, LMF
- Virgile Prevosto, Université Paris-Saclay, CEA, List
- Larisa Safina, Inria
- Andrew Samokish, Université Paris-Saclay, CNRS, ENS Paris-Saclay, LMF
- Alexis Saurin, CNRS, IRIF
- Thibaut Sautereau, ANSSI
- Muriel Shan Shei Fan, OCamlPro
- Julien Signoles, Université Paris-Saclay, CEA, List
- Basile Starynkevitch
- Vincent Trélat, Université de Lorraine, CNRS, Inria, Loria
- Alix Trieu, ANSSI
- Li-Yao Xia, Inria, LMF
- Boris Yakobowski, AdaCore
- Irène Yoon, Inria
- Yani Ziani, Université d'Orléans & Thales TRT

## Organisation

Journée organisée par [Nicolas Magaud](mailto:magaud@unistra.fr) (Université de Strasbourg) et [Julien Signoles](mailto:julien.signoles@cea.fr) (Université Paris-Saclay, CEA, List) pour le programme scientifique et [Julien Narboux](mailto:julien.narboux@irif.fr) (Université Paris Cité) pour l'organisation locale, avec le soutien du [GdR GPL](https://gdr-gpl.cnrs.fr) du CNRS et de l'Université Paris Cité.

<p style="display:flex; flex-wrap:wrap; align-items:center; gap:2rem;">
  <a href="https://www.cnrs.fr/"><img src="/assets/png/lvp-logos/cnrs.jpg" alt="Logo du CNRS" style="height:70px;"/></a>
  <a href="https://gdr-gpl.cnrs.fr"><img src="/assets/png/lvp-logos/gdrgpl.jpg" alt="Logo du GdR GPL" style="height:70px;"/></a>
  <a href="https://u-paris.fr/"><img src="/assets/png/lvp-logos/upariscite.png" alt="Logo de l'Université Paris Cité" style="height:70px;"/></a>
  <a href="https://list.cea.fr/"><img src="/assets/png/lvp-logos/cealist.png" alt="Logo du CEA List" style="height:70px;"/></a>
  <a href="https://www.unistra.fr/"><img src="/assets/png/lvp-logos/ustrasbourg.png" alt="Logo de l'Université de Strasbourg" style="height:70px;"/></a>
</p>
