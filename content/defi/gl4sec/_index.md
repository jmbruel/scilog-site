---
title: "GL4Sec :  Outils de test et de vérification pour la sécurité"
type: page
date: "2026-08-18T11:20:58Z"
draft: false

---

---

📣 **Journée de la Sécurité et du Génie des Logiciels 2027**

<span style="color:DarkRed">Le [programme complet](/defi/gl4sec/gl4sec27) est désormais disponible !</span>

Cette **journée scientifique** réunit des chercheurs français et internationaux travaillant à l’**interface entre le génie logiciel et la cybersécurité**. Son objectif est de favoriser les échanges sur la manière dont les méthodes de **test**, de **vérification** et, plus largement, du génie logiciel peuvent être mises à profit pour améliorer la sécurité, la fiabilité et la confiance dans les systèmes logiciels. Le programme couvre à la fois les techniques fondamentales et les avancées récentes du domaine, en abordant des axes de recherche établis ainsi que des thématiques et défis émergents.

*L’atelier est coorganisé par le défi [GL4Sec](/defi/gl4sec), les groupes de travail [MTV2](/group/mtv2) et [GLSec](/group/gl-sec) du GdR [SciLog](/), ainsi que le projet [SECUBIC](https://secubic-ptcc.github.io) du [PTCC](https://ptcc.fr/projets/secubic/). Nous remercions chaleureusement le CNRS, le PTCC et le CEA pour leur soutien.*

## Informations pratiques

* **Quand ?** Le 7 janvier 2027, de 10h00 à 17h00 
* **Où ?** [Campus Cyber Paris-La Défense](https://maps.app.goo.gl/9ecxNorVG11TGnZX6), 5-7 Rue Bellini, 92800 Puteaux, France 
* **Comment s’y rendre ?** 
  * **Métro ligne 1 :** arrêt *Esplanade de la Défense*, puis 3 minutes à pied 
  * **RER A ou E :** arrêt *La Défense Grande Arche*, puis métro ligne 1 ou 15 minutes à pied

**L’inscription est gratuite mais obligatoire** avant le 7 décembre 2026 via le [formulaire dédié](https://framaforms.org/inscription-journee-de-la-securite-et-du-genie-des-logiciels-1793185102).

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
