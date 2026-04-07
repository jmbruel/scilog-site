---
title: "IPP : Interopérabilité pour les preuves et les programme"
type: page
date: "2024-06-23T11:20:58Z"
draft: false
---

Le défi **IPP** ...

## Porteurs

- Olivier Hermant (Mines Paris), 
- Julien Signoles (CEA List)

## Contexte

Les méthodes formelles regroupent aujourd'hui des nombreux outils de spécification, de modélisation, d'analyse statique et dynamique pour démontrer des propriétés mathématiques et établir la correction de programmes informatiques. 
Il s'agit d'un domaine de recherche actif qui offre des solutions suffisamment matures pour être utilisées opérationnellement dans différents domaines applicatifs (avionique, nucléaire, défense, carte à puce, …).

Néanmoins, la façon de spécifier, modéliser, développer et vérifier des logiciels évolue et il convient d’adapter les techniques formelles existantes pour les prendre en compte. Ainsi par exemple, les logiciels sont développés de plus en plus souvent à l’aide de multiples langages de programmation, tout en intégrant des langages modernes comme Rust ou WAsm et des paradigmes différents (traits fonctionnels, dynamiques, etc).
De manière similaire, la vérification de propriétés repose aussi bien sur des prouveurs automatiques comme Alt-Ergo, que sur des assistants de preuve comme Coq ou Lean, que sur des plate-formes d'aide à la vérification de programmes, comme Why3 ou Dafny.  

Si l'on est aujourd'hui en capacité d'utiliser chacun de ces outils individuellement pour des vérifications de taille conséquente, leur combinaison reste hors de portée de l'état de l'art. 
Ils reposent notamment sur des formalismes distincts et peuvent être spécialisés pour des objectifs spécifiques.