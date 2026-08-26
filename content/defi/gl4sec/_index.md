---
title: "GL4Sec :  Outils de test et de vérification pour la sécurité"
type: page
date: "2026-08-18T11:20:58Z"
draft: false

---

## Contexte

La sécurité des logiciels est devenue une préoccupation majeure dans un contexte où 
ceux-ci pilotent la plupart des activités humaines et marqué par une augmentation de 
la cybercriminalité et des tensions internationales accrues aussi sur le cyberespace. 
Le boom récent des nouvelles techniques de génération semi-aléatoire de tests (fuzzing) 
a ouvert de nouvelles perspectives pour la détection de certaines failles de sécurité. 
En parallèle, les autres techniques de test et de vérification doivent être adaptées 
aux objectifs et menaces de sécurité.

Dans ce défi, il s’agira de trouver des solutions efficaces pour explorer le programme, 
le tester par rapport aux propriétés de sécurité, détecter des failles potentielles, 
confirmer leur exploitabilité, etc. Des outils mettant en oeuvre ces techniques doivent 
être développés et évalués sur des logiciels de taille réelle.

Les scénarios basés sur le code et sur le modèle pourront être utilisés. De nouvelles 
approches de test et des usages combinés de différentes techniques pourront être étudiées. 
Notamment, l’analyse de code pourra être réalisée au niveau du code source ou du code binaire. 
Des types de vulnérabilités émergents (e.g., backdoors) pourront être étudiés.

## Verrous scientifiques

Il reste beaucoup à faire pour améliorer la portée, l’efficacité et l’automatisation des 
techniques de test et de vérification pour la recherche de failles de sécurité. 
Les verrous incluent:

- Guider l’exploration du programme vers des comportements potentiellement vulnérables.
Notamment, combiner au mieux différentes techniques (fuzzing, analyse de code, exécution 
symbolique, vérification à l’exécution, techniques à base de modèles, LLM).
- Définir des critères pour reconnaître des comportements dangereux lors de l’exécution.
- Optimiser l’efficacité des analyses dynamiques (e.g. réduction du temps de génération 
de tests, réduction du temps et de la consommation mémoire de la vérification à l’exécution).
- Automatiquement ou semi-automatiquement corriger et étudier l'impact d'une faille 
dynamiquement détectée (par exemple, avec l'aide de LLMs).
- Etudier des applications dans les domaines émergents comme les jumeaux numériques.

## Responsables

- Nikolaï KOSMATOV (Thales cortAIx Labs)
- Michaël MARCOZZI (CEA List) 
