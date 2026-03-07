# Génie Logiciel du Jumeau Numérique

## Contact
* Jannik Laval (jannik.laval@univ-lyon2.fr),
* Antoine Beugnard (antoine.beugnard@imt-atlantique.fr),
* Sylvain Vauttier (sylvain.vauttier@mines-ales.fr)
* Sylvain Guerin (sylvain.guerin@imt-atlantique.fr)

## Thématique

Selon le [Digital Twin Consortium](https://www.digitaltwinconsortium.org/), un jumeau numérique est une représentation virtuelle intégrée, basée sur des données, d'entités et de processus du monde réel, avec une interaction synchronisée à une fréquence et une fidélité spécifiées. Les systèmes de jumeaux numériques sont construits sur des systèmes IOT intégrés et synchronisés, utilisent des données historiques et en temps réel pour représenter le passé et le présent, et simulent des futurs prédits. Cette capacité lui permet notamment de s'adapter et d’apprendre de l’environnement de manière dynamique et continue. Il est donc un système complexe à forte composante logicielle qui contient des modèles, des schémas de données, des processus, du code, des modèles d’IA, capables d’interagir avec son environnement matériel. Le défi pour notre communauté est la manière de construire le jumeau numérique.

## Détails

Le défi est de construire le jumeau numérique en adaptant les acquis des sciences du logiciel (abstraction, modularité, composabilité, interopérabilité sémantique, gestion de la variabilité, gestion de l‘évolution, cycle de vie ...) tout en considérant l’ensemble de ses composantes. Le jumeau numérique doit être considéré dès sa conception comme un système durable en termes de :

* Temporalité :     
    * Système temps long (construction continue, logiciel pérenne) ;
    * Cycle de vie (création, configuration, déploiement, maintenance) ;
    * Mesure de l’évolution de la fidélité, le couplage, la co-évolution entre jumeaux numériques et sa version physique,
* Scalabilité :
    * Différents niveaux d’observations / de granularité de la représentation numérique et des évènements numériques et/ou physiques ;
    * Interfaces (modèle commun d’échange de données et approches de communication bidirectionnelles entre les modèles du jumeau numérique et si industriel avec les systèmes du jumeau physique) ;
    * Gestion massive de données, leur présentation, leur analyse, etc.
* Hétérogénéité :
    * Différence des profils des parties prenantes impliquées dans sa conception et son usage (génie logiciel, experts métier, traitement de données, réseaux ...).
    * Intégration/Interopérabilité de plusieurs JNs couvrant des domaines et des préoccupations diverses et variées et avec des couvertures connexes (et possibles recouvrements).

Également, alors que les sciences du logiciel vont apporter des réponses à la création desjumeaux numériques, l’étude du jumeau numérique fera progresser nos pratiques par la nécessité d’intégrer les données collectées et leurs modèles de traitement, le système opérant et sa connexion avec le jumeau, l’évolution dynamique et la nécessité de maintenir une représentation fidèle. Le jumeau numérique implique de gérer en même temps tous les problèmes de GL et le désilotage des thématiques GL (gestion de version, déploiement, test, etc.), de manière systémique avec un passage à l’échelle et un couplage fort. Au centre des nombreuses disciplines concernées, l’ingénierie logicielle joue un rôle d’intégrateur dans la conception et le développement de jumeaux numériques sûrs et évolutifs. La complexité inhérente au jumeau numérique (nombre, hétérogénéité des acteurs, hybridation des modèles, multidisciplinaire, en continu ...) pourrait permettre de repenser les paradigmes GL actuels.

La réalisation d’instances de jumeau numérique sera un moyen de valider les méthodes et outils proposés.

### Verrous :

* Conception
    * Définir les préoccupations spécifiquement à prendre en compte au moment de l’ingénierie des JN ainsi que les modèles et langages ;
    * Définir et calculer les niveaux de fidélité (à surveiller dans le temps) et d’échelle (granularité et précision), en fonction de l’usage (besoin, confiance, urgence), des capacités de calculs.
* Dynamicité du JN
    * Le JN est un logiciel critique dont on doit minimiser les « downtime » ;
    * Définir l’architecture dynamique du JN ;
    * Gérer l’évolution : Intégration/modification/suppression d'un constituant ;
    * Définir la notion de co-évolution avec prise en compte de la déviation (drift) entre le JN et son système opérant, conséquence du fort couplage bidirectionnel entre le système et le JN ;
    * Définir des priorités pour les actions d’évolution (JN ou système) pour traiter des éventements liés à la déviation ;
    * Gérer l’historique et les versions du JN ;
    * assurer une continuité numérique pour l’évolution de JN (notion de digital Thread) ;
    * Les différentes approches d’interopérabilité entre les modèles du JN et avec les systèmes externes du JP : API, shared memory, middlewares, etc.
* Maintenance / évolution
    * Instancier les exigences en considérant la maintenance logicielle ;
    * Considérer la réutilisabilité, la généricité et la reconfigurabiltié ;
    * Intégrer la cybersécurité et la robustesse (le JN est un logiciel critique).
* Outils logiciels
    * Créer et intégrer des interfaces pour une composition sure et dynamique de JNs ;
    * Intégrer les outils en considérant leur alignement sémantique ;
    * Développer la vérification et la validation ;
    * Développer les approches Model in the Loop / HIL / SIL.

### Actions :

**Animation**
– du GT : 2 réunions présentielles par an, d’autres rendez-vous en visio selon les activités.
– intra GDR : partager les problématiques transverses du jumeau numérique avec les autres GT, en invitant des présentations ou en étant invité lors de leurs propres journées.
– inter GDR : un CT jumeau numérique a été créé à la SAGIP, société savante associée au GDR MACS. D’autres GDR partagent nos problématiques. Il reste à les identifier et prendre contact avec eux.

**Diffusion / pédagogie**
– La création d’un cursus de Master « Dev. du JN » (multi-disciplinaire, international) en Erasmus semble être une piste sérieuse autour de laquelle les membres du GT peuvent collaborer.

Projets
– Le nombre d’appels à projets concernant les jumeaux numériques augmente. Le GT peut être une instance d’animation, permettant la mise en commun de nos forces et de nos efforts.

## Équipes (non exhaustif)

* DISP Lab (Jannik Laval, Vincent Cheutet)
* P4S du Lab-STICC (Antoine Beugnard, Sylvain Guérin, Fabien Dagnat, Salvador Martinez, Jean-Christophe Bach, Gwendal Beaumont, Eric Cariou, Fabien Dagnat, Salvador Martinez)
* Shaker du Lab-STICC (Nathalie Julien)
* IRISA / DiverSE (Benoit Combemale, Jean-Marc Jézéquel, Quentin Perez, Djamel Khelladi)
* SM@RT / IRIT (Jean-Michel Bruel, Nan Messe, Sophie Ebersold et Benoit Combemale)
* EuroMov Digital Health in Motion / IMT Mines Alès (Christelle Urtado, Sylvain Vauttier)
* LSR / IMT Mines Alès (Souad Rabah-Chaniour)
* VULCAIN Ingénierie (Fahima Babas)
* IRT SystemX (Stephen Creff, Abdelhadi Belfadel, Jean-Patrick Brunet)
* CERISN, Mines Douai (Noury Bouraqadi)
* CEA/List (Marcos Didonet Del Fabro, Sébastien Gérard, Ariane Piel)
* Opal Research (Jérémy Patrix)
* LIP6/MoVe (Jacques Malenfant)
* LIRMM (Djamel Seriai)
* INRIA (Pascale Vicat-Blanc)
* LISTIC (Flavien Vernier)
* RED (Amine Hamri et Eric Ramat)
