---
title: "Trusted : Confiance et traçabilité dans la production de logiciels"
type: page
date: "2026-11-03T11:20:58Z"
draft: false
---

## Responsables

- Thomas Degueule (LaBRI, Bordeaux)
- Sophie Ebersold (IRIT, Toulouse)

## Contexte

Pour la majorité des produits manufacturés, il existe un lien fort entre un produit et sa chaîne de production.
Considérons la conception d'un avion : lors de son développement, les ingénieurs doivent prendre en compte non seulement les performances aériennes souhaitées, mais également la faisabilité de production.
Ils doivent s'assurer que chaque élément, depuis les petits composants électroniques jusqu'aux matériaux utilisés pour le fuselage, peut être produit et assemblé efficacement selon les normes de qualité et de sécurité très strictes de l'industrie aéronautique.
De plus, l'industrie manufacturière identifie et trace chaque élément, chaque pièce, chaque outil ainsi que les matières premières entrant en jeu dans le processus de fabrication au sein de nomenclatures dédiées.

De manière analogue, la production logicielle repose sur une chaîne de production complexe qui mobilise des processus similaires.
Pour produire de nouveaux logiciels, les développeurs assemblent des composants logiciels (internes ou open source), créés et évoluant de manière indépendante, pour répondre à un ensemble d'exigences fonctionnelles et extra-fonctionnelles.
L'ensemble de ces composants constitue la *chaîne d'approvisionnement* du logiciel, traités et assemblés ensuite par divers outils qui constituent sa *chaîne de production* (gestionnaires de paquets, compilateurs, serveurs d'intégration et de déploiement continus, etc.).
Tout au long de sa création, de son évolution et de sa maintenance, il est crucial de pouvoir tracer précisément les composants mis en jeu ainsi que leur méthode d'assemblage afin de répondre à des impératifs de transparence, de sécurité, de certification et de reproductibilité.
En effet, les nombreux exemples récents de compromission et de vulnérabilité dans les chaînes d'approvisionnement logicielles (SolarWinds, Log4Shell, xz-utils) ont mis en valeur leur importance, leur fragilité, et l'incapacité des méthodes et outils actuels à faire face à des menaces toujours plus nombreuses.

Le défi **Trusted** vise à explorer de nouvelles pistes de recherche permettant de mieux spécifier, vérifier et certifier les chaînes d'approvisionnement et de production logicielles, de la spécification des exigences jusqu'à la certification, afin d'adresser les enjeux identifiés par exemple dans l'*EU Cyber Resilience Act* et l'*Executive Order on Improving the Nation's Cybersecurity*.
Le défi explorera notamment les notions de nomenclature logicielle (*Software Bill of Materials* — SBOM), leur génération, leur usage et leur vérification, la traçabilité des artefacts et des exigences tout au long du cycle de vie, ainsi que leur intégration au sein d'écosystèmes logiciels toujours plus grands et plus dynamiques.
Le succès de ce défi pourra être apprécié au regard des bénéfices obtenus en termes de sécurité, de transparence, de reproductibilité et de vérification.

## Verrous scientifiques

- **Spécification complète et précise des chaînes d'approvisionnement :**
  les outils actuels de gestion des nomenclatures (SBOM) sont imprécis, peinent à mettre en relation des artefacts provenant d'écosystèmes hétérogènes, et ne permettent pas des analyses poussées (reproductibilité, sécurité, etc.).
  Il manque un cadre formel permettant de tester, comparer et améliorer la qualité de ces outils et des SBOM qu'ils génèrent.
  Il existe par ailleurs peu d'outils pour évaluer les risques liés à la chaîne d'approvisionnement, ou pour substituer efficacement des éléments en cas de vulnérabilité, d'obsolescence ou de compromission.
  L'analyse de graphes d'écosystèmes logiciels massifs, interdépendants et dynamiques sera nécessaire pour résoudre ces problèmes.

- **Traçabilité, reproductibilité et vérification :**
  assurer une traçabilité complète de la chaîne, incluant dépendances, outils de construction et configurations, via des identifiants robustes (comme les [SWHID](https://www.swhid.org/)).
  L'objectif est de permettre une vérification de bout en bout de la conformité entre la SBOM et le logiciel livré, pour permettre un processus de certification strict.

- **Usage du formel et intégration de la traçabilité dans le processus de développement et de maintenance :**
  la traçabilité doit être native, fluide, non intrusive et intégrée aux outils.
  Elle ne doit pas être un fardeau, mais un atout opérationnel.
  Cela suppose des méthodes formelles accessibles et des outils interopérables.

- **Traçabilité pour la vérification des exigences réglementaires et la certification :**
  dans les systèmes critiques (santé, transport, défense), la traçabilité est une obligation légale et répond à des normes et régulations propres à chaque domaine (par exemple le RGPD pour la confidentialité des données, ou DO-178C pour les logiciels embarqués dans l'aviation).
  Elle doit permettre de démontrer, de manière fiable et vérifiable, que toutes les exigences réglementaires sont respectées, ce qui suppose des liens forts et justifiables entre les artefacts logiciels.

- **Métadonnées pour la traçabilité :**
  associer des métadonnées sémantiques aux artefacts devrait permettre un raisonnement automatisé sur la traçabilité.

- **Versionnement et adaptation dynamique :**
  le versionnement doit notamment permettre la reconstruction (*retrofit*) de l'historique et l'analyse d'impact.

## Liens avec les GTs

- [MTV2](/group/mtv2/)
- [IE](/group/ie/)
- [IIDM](/group/idm/)
- [VL](/group/vl/)

## Liens avec les autres défis

- [AI4SE : IA pour la Production Logicielle](/defi/ai4se/)
- [DevX : Expérience Développeur](/defi/devx/)
- [SE4AIA : Sciences du logiciel pour les applications à base d'IA](/defi/se4aia/)

## Liens avec les autres GdRs

- MADICS (Masses de Données, Informations et Connaissances en Sciences) <https://www.madics.fr/>
- Sécurité Informatique <https://gdr-securite.irisa.fr/>

## Conférences et journaux

- Conférences : ICSE, ASE, FSE, EASE, ICSME, SANER, MSR, MODELS, CAiSE, ER, RE, RCIS, FM
- Journaux : TSE, TOSEM, EMSE, IST, JSS, SCP, SoSyM

