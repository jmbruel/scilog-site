---
title: "IPP : Interopérabilité pour les preuves et les programme"
type: page
date: "2024-06-23T11:20:58Z"
draft: false

---

## Contexte

Les méthodes formelles regroupent aujourd'hui des nombreux outils de
spécification, de modélisation, d'analyse statique et dynamique pour démontrer
des propriétés mathématiques et établir la correction de programmes
informatiques. Il s'agit d'un domaine de recherche actif,
comme on peut le voir notamment au travers des activités des GT [LVP](../../group/lvp)
et [MTV2](../../group/mtv2) du {{% scilog %}} qui offre des
solutions suffisamment matures pour être utilisées opérationnellement dans
différents domaines applicatifs (avionique, nucléaire, défense, carte à puce,
…).

Si l’on est aujourd’hui en capacité d’utiliser chacun de ces outils
individuellement pour des vérifications de taille conséquente, leur combinaison
reste hors de portée de l’état de l’art. En particulier, ils reposent souvent
sur des formalismes distincts et peuvent être spécialisés pour des objectifs
spécifiques. L’objectif de ce défi est de faciliter l’interopérabilité entre les
nombreux outils existants et ainsi d’améliorer l’expérience utilisateur lors des
développements formels et de leur maintenance en intégrant ce domaine comme une
partie usuelle du développement logiciel.

## Quelques exemples

- Interopérabilité entre assistants de preuves pour réutiliser des théorèmes: [Dedukti](https://github.com/Deducteam/Dedukti)
- Analyse de programmes combinant des langages différents
  - Python+C avec [Mopsa](https://mopsa.lip6.fr/)
  - C+Rust avec [Owi](https://github.com/OCamlPro/owi)
- Vérification de FFI (Foreign Functions Interface): [Melocoton](https://melocoton-project.github.io/)
- Vérification de programmes avec des langages de spécification différents: [Frama-C](https://frama-c.com) (logique de Hoare,
séquentiel) et [VerCors](https://vercors.ewi.utwente.nl/) (logique de séparation, concurrence)
- DSL (Dedicated Specification Languages): greffons [Aoraï](https://frama-c.com/fc-plugins/aorai.html), [RPP](https://frama-c.com/fc-plugins/rpp.html), [MetAcsl](https://frama-c.com/fc-plugins/metacsl.html) de Frama-C
- Différents niveaux d'abstraction: [ACSL](https://github.com/acsl-language/acsl) et [Why3](https://why3.org/)

## Responsables

- Olivier Hermant (Mines Paris), 
- Virgile Prevosto (CEA List)

## Actualités du défi IPP
