var data = [
  {
    id: 1,
    name: `Acteurs et ressources QVT en Occitanie`,
    color: '#ee7167',
  },
  {
    id: 2,
    parentId: 1,
    name: `Contenu et organisation du travail`,
    description: `L’organisation du travail désigne l’ensemble des règles et des processus qui structurent le fonctionnement de l’entreprise, du/des collectif(s) et l’activité de travail (ex : horaires de travail, répartition de la charge de travail, délais de production, procédures, répartition des rôles et des missions…).
            Elle concerne aussi l’ensemble des processus  qui participent à la production et à la modification de ces règles de fonctionnement (régulations, coopérations, interactions entre l’entreprise et son environnement…)

            Le contenu du travail renvoie aux conditions d’exercice et de réalisation du travail.
            Il pose la question du sens, de la finalité du travail (variété des tâches, enrichissement, valeurs du travail, sentiment d’utilité…), mais aussi de la capacité à intervenir sur son travail et des moyens à disposition pour faire un travail de qualité (autonomie, marges de manœuvre, clarté des consignes, matériel à disposition, capacité d’expression et d’action sur le contenu de son travail…).`,
    color: '#078ea4',
  },
  {
    id: 3,
    parentId: 1,
    name: `Relations  au  travail,  climat  social`,
    description: `Ce champ QVT regroupe l’ensemble des sujets portant sur la qualité du dialogue social (rôle et fonctionnement des instances représentatives du personnel, négociation…), la qualité des relations de travail (relation manager-managé, relations entre collègues, relations avec usagers/clients/bénéficiaires…) et l’ambiance de travail (bienveillance, confiance, respect, convivialité, partage de temps informels…).`,
    color: '#30b5ad',
  },
  {
    id: 4,
    parentId: 1,
    name: `Santé au travail`,
    description: `Ce champ QVT recouvre l’ensemble des sujets, actions et démarches visant à prendre en compte la santé au travail et à prévenir toute altération de la santé physique et psychique des travailleurs en agissant notamment sur le collectif et sur l’organisation et le contenu du travail : mise en place d’une démarche collective, paritaire et participative permettant l’identification des risques et la mise en œuvre du plan d’action, prise en compte des RPS et des TMS, prévention de la pénibilité, actions réalisées sur le maintien dans l’emploi, aménagement des lieux et des postes de travail…`,
    color: '#01658a',
  },
  {
    id: 5,
    parentId: 1,
    name: `Compétences, parcours professionnels`,
    description: `Ce champ QVT correspond à la prise en compte des besoins et des intérêts individuels et collectifs en matière d’emploi, de formation et de parcours professionnel. Il permet de travailler sur l’ensemble des possibilités et des dispositifs proposés par l’entreprise/l’organisation pour accompagner les évolutions de l’activité, favoriser le développement des compétences, le maintien de l’employabilité et répondre aux besoins d’enrichissement, d’évolution et de parcours (parcours d’intégration, réalisation des entretiens annuels et d’évaluation, accès à la formation, gestion et adaptation des compétences, valorisation de l’expérience, mobilité…).`,
    color: '#27416c',
  },
  {
    id: 6,
    parentId: 1,
    name: `Egalité  professionnelle  pour  tous`,
    description: `Ce champ QVT renvoie aux principes d’égalité et d’équité, à leur incarnation au quotidien et dans le management du travail (reconnaissance, soutien et justice organisationnelle, qualité de la communication…). Il interroge aussi les dispositions proposées par l’entreprise/l’organisation pour favoriser l’équilibre vie privée/vie professionnelle et améliorer l’articulation des temps de vie (aménagement des horaires, droit à la déconnexion, soutien aux aidants…).
Le champ « Égalité professionnelle pour tous » concerne également l’ensemble des démarches et actions qui visent la déconstruction des stéréotypes et la lutte contre les discriminations dans et au travail (égalité femmes-hommes, diversité, personnes handicapées, nouveaux/anciens, jeunes/âgés,...). `,
    color: '#00827c',
  },
  {
    id: 7,
    parentId: 1,
    name: `Management participatif, engagement`,
    description: `Ce champ de la QVT désigne l’ensemble des pratiques managériales qui visent à renforcer l’engagement du collectif et à soutenir la réalisation de l’activité par la prise en compte du travail réel. Cette dimension renvoie notamment à l’existence, dans l’organisation du travail, d’espaces d’échanges collectifs permettant l’expression sur le travail et sa mise en discussion en vue de sa régulation.
Elle concerne également la communication interne et l’ensemble des actions mises en place pour associer les salariés aux projets de transformations en leur permettant d’être des acteurs des changements qui les concernent.`,
    color: '#00b0c7',
  },
  {
    id: 8,
    parentId: 2,
    name: `Secteur privé`,
  },
  {
    id: 9,
    parentId: 2,
    name: `Secteur public`,
  },
  {
    id: 10,
    parentId: 3,
    name: `Secteur privé`,
  },
  {
    id: 11,
    parentId: 3,
    name: `Secteur public`,
  },
  {
    id: 12,
    parentId: 4,
    name: `Secteur privé`,
  },
  {
    id: 13,
    parentId: 4,
    name: `Secteur public`,
  },
  {
    id: 14,
    parentId: 5,
    name: `Secteur privé`,
  },
  {
    id: 15,
    parentId: 5,
    name: `Secteur public`,
  },
  {
    id: 16,
    parentId: 6,
    name: `Secteur privé`,
  },
  {
    id: 17,
    parentId: 6,
    name: `Secteur public`,
  },
  {
    id: 18,
    parentId: 7,
    name: `Secteur privé`,
  },
  {
    id: 19,
    parentId: 7,
    name: `Secteur public`,
  },
  {
    id: 20,
    parentId: 8,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur  unique, au niveau régional, pour toute question concernant :
            	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour l’amélioration de la qualité de l’emploi et des relations du travail) ;
            	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
            	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
            	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
            	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
            	- les actions sociales et économiques de la politique de la ville ;
            	- le contrôle et l’inspection des établissements et services sociaux ;
            	- la formation et la certification des professions sociales et de santé non médicales ;
            	- l’insertion sociale et professionnelle.

            Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

            Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },
  {
    id: 21,
    parentId: 8,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  {
    id: 22,
    parentId: 8,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
	
  {
    id: 23,
    parentId: 22,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
  {
    id: 24,
    parentId: 23,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },
	
	
  {
    id: 25,
    parentId: 23,
    name: `FRSEA`,
    description: `Email : frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },
	
  {
    id: 26,
    parentId: 23,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },
	
  {
    id: 27,
    parentId: 23,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },
	
  {
    id: 28,
    parentId: 22,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
	
  {
    id: 29,
    parentId: 28,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
	
  {
    id: 30,
    parentId: 28,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
	
  {
    id: 31,
    parentId: 28,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
	
  {
    id: 32,
    parentId: 28,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
	
  {
    id: 33,
    parentId: 28,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
	
	
  {
    id: 34,
    parentId: 8,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
		
{
    id: 35,
    parentId: 9,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },
	
{
    id: 36,
    parentId: 9,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité.
Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé. 
Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

      Pour en savoir plus :
https://www.occitanie.ars.sante.fr/

Pour prendre contact avec l’ARS Occitanie ou ses 13 délégations départementales : https://www.occitanie.ars.sante.fr/contact-7`,
  },	
	
	
	
	
  {
    id: 37,
    parentId: 9,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise. L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

      Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services : https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },
	{
    id: 38,
    parentId: 9,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
	
  {
    id: 39,
    parentId: 9,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
		
  {
    id: 40,
    parentId: 39,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
		
  {
    id: 41,
    parentId: 39,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
		
  {
    id: 42,
    parentId: 39,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
		
  {
    id: 43,
    parentId: 39,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
		
  {
    id: 44,
    parentId: 39,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },
		
  {
    id: 45,
    parentId: 39,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
		
  {
    id: 46,
    parentId: 39,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaitre vos contacts en région et dans les départements :
      https://fsu.fr/annuaire/`,
  },
		
  {
    id: 47,
    parentId: 39,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },
		
  {
    id: 48,
    parentId: 39,
    name: `UNSA`,
    description: `Tel. : 05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },
	
  {
    id: 49,
    parentId: 9,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },	
{
    id: 50,
    parentId: 10,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
	{
    id: 51,
    parentId: 10,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur  unique, au niveau régional, pour toute question concernant :
            	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour - l’amélioration de la qualité de l’emploi et des relations du travail) ;
            	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
            	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
            	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
            	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
            	- les actions sociales et économiques de la politique de la ville ;
            	- le contrôle et l’inspection des établissements et services sociaux ;
            	- la formation et la certification des professions sociales et de santé non médicales ;
            	- l’insertion sociale et professionnelle.

            Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

            Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },
{
    id: 52,
    parentId: 10,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  }, 
{
    id: 53,
    parentId: 10,
    name: `La CPRI Occitanie`,
    description: `Créée pour représenter les entreprises de moins de 11 salariés d’Occitanie, la Commission Paritaire Régionale Interprofessionnelle (CPRI) est une instance de dialogue et d’échanges qui réunit des représentants des employeurs et des représentants des salariés.
Elle conseille et informe les salariés et chefs d’entreprise en matière d’emploi, de formation et mène des actions pour le dialogue social, la prévention des conflits et la mutualisation d’activités sociales et culturelles.

      Pour prendre contact avec la CPRI Occitanie : cpri.occitanie@gmail.com`,
  },
 
	{
    id: 54,
    parentId: 10,
    name: `La CPRIA`,
    description: `La Commission Paritaire Régionale Interprofessionnelle de l’Artisanat (CPRIA) est une instance de dialogue et d’échanges qui réunit au niveau territorial les représentants des employeurs et des salariés des entreprises de l’artisanat (U2P, CFDT, CFE-CGC, CFTC, CGT, CGT-FO).

      La CPRIA Occitanie a pour missions de favoriser l’amélioration des conditions de travail et l’emploi dans les TPE de l’artisanat et d’innover en matière de dialogue social pour les TPE de l’artisanat.
      Elle conseille les entreprises artisanales et leurs salariés sur toutes demandes concernant l’application des droits conventionnels. Elle peut également être sollicitée pour accompagner de manière paritaire la prévention des conflits au sein de ces entreprises et apporter des informations et des recommandations sur le sujet.

      Pour en savoir plus sur la CPRIA Occitanie et ses missions : https://cpria.proximeo-france.fr/occitanie

      Pour contacter la CPRIA Occitanie :
contact@cpria-occitanie.fr`,
  },
	{
    id: 55,
    parentId: 10,
    name: `Les ODDS`,
    description: `Les observatoires départementaux d’analyse et d’appui au dialogue social et à la négociation (ODDS) ont pour objectif de favoriser, d'encourager et d'accompagner au plus près le dialogue social et la négociation collective dans les entreprises de moins de 50 salariés de leur département. Ils ont notamment pour missions :
      - D’établir un bilan régulier du dialogue social au niveau départemental
      - De répondre aux saisines des organisations syndicales et professionnelles représentatives relatives aux difficultés rencontrées dans le cadre d’une négociation
      - D’apporter leur concours et leur expertise juridique aux entreprises de leur ressort dans le domaine du droit social

      Pour en savoir plus sur les ODDS et prendre contact avec les services départementaux de la DREETS Occitanie : https://occitanie.dreets.gouv.fr/Dialogue-social-Installation-des-observatoires-departementaux`,
  },
  {
    id: 56,
    parentId: 10,
    name: `L'IRT d’Occitanie`,
    description: `L'Institut Régional du Travail d'Occitanie est une composante autonome de l'Université Toulouse - Jean Jaurès. Il a pour missions
- D’organiser la formation universitaire des syndicalistes des trois principales confédérations syndicales de salarié-es (CFDT, CGT, FO) afin qu’ils/elles puissent exercer efficacement leur mandat
- De développer la recherche en sciences humaines et sociales du travail au plus près de la demande sociale.
      
L’IRT Occitanie propose aux membres des organisations syndicales (CFDT, CGT et FO) de la région Occitanie des formations universitaires et interdisciplinaires en sciences humaines et sociales du travail (sociologie, économie, droit, psychosociologie…). Il propose également des formations destinées exclusivement aux représentant.es du personnel non syndiqué.es.

      Pour en savoir plus sur l'IRT Occitanie : https://irt.univ-tlse2.fr/

      Contacts
      Tél. : 05 61 50 25 74
      irt@univ-tlse2.fr`,
  },
   {
    id: 57,
    parentId: 10,
	name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
	
{
    id: 58,
    parentId: 11,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },

	
{
    id: 59,
    parentId: 58,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
	
{
    id: 60,
    parentId: 58,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
      
{
    id: 61,
    parentId: 58,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
         
{
    id: 62,
    parentId: 58,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
        
{
    id: 63,
    parentId: 58,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },
     
{
    id: 64,
    parentId: 58,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
       
{
    id: 65,
    parentId: 58,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaître vos contacts en région et dans les départements :
https://fsu.fr/annuaire/`,
  },
       
{
    id: 66,
    parentId: 58,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },
         
{
    id: 67,
    parentId: 58,
    name: `UNSA`,
    description: `Tel. : 05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },
 
	{
    id: 68,
    parentId: 11,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
	
 {
    id: 69,
    parentId: 11,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },	
  {
    id: 70,
    parentId: 11,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé (ARS) pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité. Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé.

Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

      L'ARS Occitanie propose également via l’Instance Régionale de Médiation d’Occitanie (IRMO) un service de médiation pour les personnels d’établissements publics de santé, sociaux et médicosociaux.

      Pour en savoir plus :
      https://www.occitanie.ars.sante.fr/

      Pour prendre contact avec l’ARS Occitanie et ou ses 13 délégations départementales :
      https://www.occitanie.ars.sante.fr/contact-7`,
  },	
 {
    id: 71,
    parentId: 11,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise. L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

      Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services : https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },	
  {
    id: 72,
    parentId: 11,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
	
{
    id: 73,
    parentId: 50,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
		
{
    id: 74,
    parentId: 73,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },
	
{
    id: 75,
    parentId: 73,
    name: `FRSEA`,
    description: `frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },
   
{
    id: 76,
    parentId: 73,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },  
      
{
    id: 77,
    parentId: 73,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },  

  {
    id: 78,
    parentId: 50,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
  {
    id: 79,
    parentId: 78,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
	
  {
    id: 80,
    parentId: 78,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
	
  {
    id: 81,
    parentId: 78,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
	
  {
    id: 82,
    parentId: 78,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
	
      
  {
    id: 83,
    parentId: 78,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
      
      
  {
    id: 84,
    parentId: 12,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur unique, au niveau régional, pour toute question concernant :
      	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour l’amélioration de la qualité de l’emploi et des relations du travail) ;
      	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
      	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
      	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
      	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
      	- les actions sociales et économiques de la politique de la ville ;
      	- le contrôle et l’inspection des établissements et services sociaux ;
      	- la formation et la certification des professions sociales et de santé non médicales ;
      	- l’insertion sociale et professionnelle.

      Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

      Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },
{
    id: 85,
    parentId: 12,
    name: `Les CARSAT`,
    description: `Structure privée paritaire exerçant une mission de service public, la caisse d'assurance retraite et de santé au travail (CARSAT) assure toutes les entreprises du régime général de Sécurité Sociale et fixe leur taux de cotisations des accidents du travail et des maladies professionnelles. Elle est un acteur majeur de la prévention des risques professionnels, autant pour des raisons éthiques (préserver la santé des salariés) qu’économiques (réduire le coût des sinistres).
      Elle applique les orientations définies aux niveaux national et régional, par les partenaires sociaux de la branche AT/MP, et participe au déploiement de la politique publique de santé et sécurité au travail. Pour cela, la CARSAT intervient en priorité dans les secteurs où la sinistralité, immédiate ou différée, est élevée. Elle peut intervenir directement sur les lieux de travail et mener des actions collectives auprès de branches professionnelles. Elle assure une veille sur les risques émergents, conçoit des dispositifs d’évaluation et de prévention, diffuse de bonnes pratiques, et aide financièrement les entreprises à prévenir les risques professionnels.


      Pour en savoir plus sur les aides financières proposées :
      - Carsat LR : https://www.carsat-lr.fr/home/entreprise/ameliorer-vos-conditions-de-travail/nos-aides-financieres.html
      - Carsat MP : https://www.carsat-mp.fr/home/entreprises/ameliorer-vos-conditions-de-travail/nos-incitations-financieres.html

      Pour en savoir plus et prendre contact avec votre Carsat :
      - Carsat Languedoc-Roussillon : https://www.carsat-lr.fr/
      - Carsat Midi-Pyrénées : http://www.carsat-mp.fr`,
  },
	 {
    id: 86,
    parentId: 12,
    name: `Les SPSTI`,
    description: `Les Services de Prévention et de Santé au Travail Interentreprises (SPSTI) ont pour principale mission d’éviter toute altération de la santé des travailleurs du fait de leur travail. Les missions des SPSTI sont assurées par des équipes pluridisciplinaires (médecins, ergonomes, ingénieurs, infirmières, psychologues…). Elles concernent notamment :
- La conduite d'actions de santé au travail, visant à préserver la santé physique et mentale des travailleurs tout au long de leur parcours professionnel dont l’appui aux entreprises pour l’évaluation et la prévention des risques professionnels
- Le conseil aux employeurs, aux travailleurs et à leurs représentants sur les dispositions et mesures nécessaires pour : éviter ou diminuer les risques professionnels, améliorer la qualité de vie et des conditions de travail, prévenir la consommation d’alcool et de drogue sur le lieu de travail, prévenir le harcèlement sexuel ou moral, prévenir ou réduire les effets de l’exposition aux facteurs de risques professionnels mentionnés à l’article L.4161-1 et la désinsertion professionnelle et contribuer au maintien dans l’emploi des travailleurs
- La surveillance de l’état de santé des travailleurs
- La participation au suivi et à la traçabilité des expositions professionnelles et la contribution à la veille sanitaire
- La participation à des actions de promotion de la santé sur le lieu de travail et d’information et de sensibilisation aux situations de handicap au travail

Pour prendre contact avec votre service de prévention et de santé au travail : http://www.prst-occitanie.fr/r/129/les-services-de-prevention-et-de-sante-au-travail/`,
  },
  {
    id: 87,
    parentId: 12,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  {
    id: 88,
    parentId: 12,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },

	 {
    id: 89,
    parentId: 12,
    name: `L'OPPBTP`,
    description: `Organisme référent de la branche BTP depuis 1947, l'Organisme Professionnel de Prévention du Bâtiment et des Travaux Publics (OPPBTP) a pour mission de sensibiliser les professionnels du bâtiment et des travaux publics à la prévention des risques et à l’amélioration des conditions de travail.

      Il propose aux entreprises une gamme étendue d’outils pratiques pour évaluer et gérer les risques professionnels : le site www.preventionbtp.fr proposant, en plus d’informations pratiques et de témoignages, un service personnalisé et sécurisé de gestion de prévention en ligne, des formations, des sessions d’information, des guides thématiques, une publication mensuelle… Ces outils lui permettent de mener à bien ses missions de conseil (6500 actions par an), de formateur (15 000 stagiaires en formation professionnelle par an) et d’informateur en privilégiant la proximité aux entreprises grâce à 18 implantations régionales et 335 collaborateurs.

      Pour en savoir plus sur l’OPPBTP : http://www.preventionbtp.fr

      Contacts : https://www.oppbtp.com/Nous-contacter`,
  },
	 {
    id: 90,
    parentId: 12,
    name: `La MSA`,
    description: `La Mutualité Sociale Agricole (MSA), deuxième régime de protection sociale en France, protège l’ensemble de la profession agricole. Elle s’appuie sur les valeurs du mutualisme, que sont la solidarité, la responsabilité et la démocratie, pour faire vivre les territoires ruraux.

      La MSA a en charge la prévention des risques professionnels liés aux métiers de l'agriculture et plus généralement, les conditions de travail de ses adhérents, salariés agricoles, exploitants ou chefs d'entreprises. Elle développe des actions de prévention, de formation, d'information et mène des études pour évaluer les risques professionnels.

      Pour en savoir plus et prendre contact avec votre MSA :
      MSA Grand Sud : 6 rue du Palais - 11011 CARCASSONNE Cedex 9
      http://www.msagrandsud.fr/

      MSA Languedoc : Place Chaptal - C.S. 59501 - 34262 MONTPELLIER Cedex 2
      http://www.msalanguedoc.fr/

      MSA Midi-Pyrénées Nord : 17 avenue Victor Hugo - 12022 RODEZ Cedex 9
      http://www.msa-mpn.fr/

      MSA Midi-Pyrénées Sud : 61 allée de Brienne - 31064 TOULOUSE Cedex 9
      http://www.msa-mps.fr/`,
  },
  {
    id: 91,
    parentId: 12,
    name: `Les CPHSCT (Agriculture)`,
    description: `Lieux de concertation et de réflexion entre employeurs et salariés, les Commissions Paritaires d'Hygiène, de Sécurité et des Conditions de Travail (CPHSCT) ont pour mission d’aider les entreprises agricoles de moins de 11 salariés dépourvues de représentants du personnel à prévenir les risques en matière de santé et sécurité au travail.

      Pour en savoir plus et connaitre les actions et documents produits par les CPHSCT dans les départements de la région : 
-	Site de la DREETS Occitanie : https://occitanie.dreets.gouv.fr/La-Commission-Paritaire-d-Hygiene-de-Securite-et-des-Conditions-de-Travail
-	Site de la MSA Grand Sud : https://grandsud.msa.fr/lfy/sst/cphsct
-	Site de la MSA Languedoc : https://languedoc.msa.fr/lfy/web/msa-du-languedoc/sst/cphsct-languedoc
-	Site de la MSA Midi-Pyrénées Nord : https://mpn.msa.fr/lfy/sst/cphsct
-	Site de la MSA Midi-Pyrénées Sud : https://mps.msa.fr/lfy/web/msa-midi-pyrenees-sud/sst/les-cphsct`,
  },
	  {
    id: 92,
    parentId: 12,
    name: `L'AGEFIPH Occitanie`,
    description: `L'Association de Gestion du Fond pour l'Insertion Professionnelle des Personnes Handicapées (Agefiph) est chargée de soutenir le développement de l'emploi des personnes handicapées. Pour cela, elle propose des services et aides financières pour les personnes et pour les entreprises privées, quelle que soit leur taille, qu’elles soient soumises ou non à l’obligation d’emploi de personnes handicapées.

      Pour en savoir plus et contacter l'Agefiph Occitanie :
https://www.agefiph.fr/occitanie`,
  },
	 {
    id: 93,
    parentId: 12,
    name: `Les Cap emploi`,
    description: `Les Cap Emploi sont des organismes de placement spécialisés (OPS) exerçant une mission de service public. Ils sont en charge de la préparation, de l’accompagnement, du suivi durable et du maintien dans l’emploi des personnes handicapées.

      Les conseillers du réseau Cap emploi sont présents dans chaque département. Ils apportent aux employeurs du secteur privé ainsi qu’aux employeurs du secteur public (administrations d’Etat, collectivités territoriales, fonction publique hospitalière) des aides et des conseils pour le recrutement, l’intégration et le maintien dans l’emploi de collaborateurs handicapés.

      Pour prendre contact avec l’OPS Cap emploi de votre département :
      https://lannuaire.service-public.fr/navigation/occitanie/cap_emploi`,
  },
  {
    id: 94,
    parentId: 12,
    name: `L'Association Addictions France`,
    description: `L’Association Addictions France a pour mission d’améliorer la santé en agissant sur les addictions et leurs conséquences. Association loi 1901 reconnue d’utilité publique et agréée d’éducation populaire, elle est force de proposition pour faire évoluer les opinions et contribuer à la mise en place d’une politique cohérente sur les addictions.

     Elle est un organisme de formation et de prévention des risques professionnels auprès des entreprises et des structures publiques. Ses équipes de prévention assurent des interventions adaptées au contexte de chaque organisation, en impliquant tous les acteurs autour d’une méthode globale, en lien avec les services de santé au travail.

      Pour en savoir plus et prendre contact avec l’association : https://addictions-france.org/regions/occitanie/
      Direction régionale Occitanie : 04 99 77 10 77`,
  },
   {
    id: 95,
    parentId: 12,
    name: `La Ligue contre le cancer`,
    description: `Créée en 1918, la Ligue contre le cancer est une association loi 1901 reconnue d'utilité publique. Elle initie et finance des projets de recherche, informe, sensibilise et mène des actions visant à lutter efficacement contre le cancer et agit au plus près des personnes fragilisées par la maladie cancéreuse (soutien financier, aide psychologique, activité physique…). La Ligue s’érige en porte-parole des personnes malades et de leurs proches et œuvre auprès des institutions et des entreprises afin de promouvoir les droits des patients et des usagers du système de santé.

      Pour favoriser la prévention et le dépistage du cancer et le retour ou le maintien dans l’emploi des salariés touchés directement ou indirectement par le cancer, l’association mène des actions dans les entreprises pour :
      -	Sensibiliser les collaborateurs à la problématique du cancer et aux répercussions éventuelles sur l’emploi
      -	Déployer des actions de prévention et de dépistage
      -	Former les managers pour une meilleure connaissance de la problématique
      -	Lever les tabous et changer le regard porté sur le cancer et sur les personnes touchées par cette maladie
      -	Fédérer autour d’un projet commun

      Pour en savoir plus : https://www.ligue-cancer.net/`,
  },
  {
    id: 96,
    parentId: 12,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
	
  {
    id: 97,
    parentId: 88,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
  {
    id: 98,
    parentId: 97,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },
	
  {
    id: 99,
    parentId: 97,
    name: `FRSEA`,
    description: `frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },
	
  {
    id: 100,
    parentId: 97,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },
	
	
  {
    id: 101,
    parentId: 97,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },
	
  {
    id: 102,
    parentId: 88,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
	
  {
    id: 103,
    parentId: 102,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
	
  {
    id: 104,
    parentId: 102,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
	
  {
    id: 105,
    parentId: 102,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
	
  {
    id: 106,
    parentId: 102,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
		
  {
    id: 107,
    parentId: 102,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
      
	
	  {
    id: 108,
    parentId: 13,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },
	  {
    id: 109,
    parentId: 13,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé (ARS) pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité.

      Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé.

Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

      Pour en savoir plus sur l'ARS Occitanie et ses missions :
      https://www.occitanie.ars.sante.fr/

      Pour prendre contact avec l’ARS Occitanie et ou ses 13 délégations départementales :
      https://www.occitanie.ars.sante.fr/contact-7`,
  },
	  {
    id: 110,
    parentId: 13,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise. L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

      Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services : https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },
  {
    id: 111,
    parentId: 13,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
	 {
    id: 112,
    parentId: 13,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
	
	 {
    id: 113,
    parentId: 112,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },

	 {
    id: 114,
    parentId: 112,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
      
      
	 {
    id: 115,
    parentId: 112,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
      
	 {
    id: 116,
    parentId: 112,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },

	 {
    id: 117,
    parentId: 112,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },

	 {
    id: 118,
    parentId: 112,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
      
	 {
    id: 119,
    parentId: 112,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaitre vos contacts en région et dans les départements :
https://fsu.fr/annuaire/`,
  },
      
	 {
    id: 120,
    parentId: 112,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },
      
	 {
    id: 121,
    parentId: 112,
    name: `UNSA`,
    description: `Tel. : 05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },

  {
    id: 122,
    parentId: 13,
    name: `Le FIPHFP`,
    description: `Acteur essentiel de la politique handicap dans la Fonction publique, le Fond pour l'Insertion des Personnes Handicapées dans la Fonction Publique (FIPHFP) impulse une dynamique et incite les employeurs publics à agir en favorisant le recrutement, l'accompagnement et le maintien dans l'emploi au sein des trois fonctions publiques.

      Pour en savoir plus et prendre contact : http://www.fiphfp.fr/Le-FIPHFP/En-region/Le-FIPHFP-dans-votre-region/Occitanie`,
  },
  {
    id: 123,
    parentId: 13,
    name: `Les Cap emploi`,
    description: `Les Cap Emploi sont des organismes de placement spécialisés (OPS) exerçant une mission de service public. Ils sont en charge de la préparation, de l’accompagnement, du suivi durable et du maintien dans l’emploi des personnes handicapées.

      Les conseillers du réseau Cap emploi sont présents dans chaque département. Ils apportent aux employeurs du secteur privé ainsi qu’aux employeurs du secteur public (administrations d’Etat, collectivités territoriales, fonction publique hospitalière) des aides et des conseils pour le recrutement, l’intégration et le maintien dans l’emploi de collaborateurs handicapés.

      Pour prendre contact avec l’OPS Cap emploi de votre département :
      https://lannuaire.service-public.fr/navigation/occitanie/cap_emploi`,
  },	
	  {
    id: 124,
    parentId: 13,
    name: `L'Association Addictions France`,
    description: `L’Association Addictions France a pour mission d’améliorer la santé en agissant sur les addictions et leurs conséquences. Association loi 1901 reconnue d’utilité publique et agréée d’éducation populaire, elle est force de proposition pour faire évoluer les opinions et contribuer à la mise en place d’une politique cohérente sur les addictions.

 Elle est un organisme de formation et de prévention des risques professionnels auprès des entreprises et des structures publiques. Ses équipes de prévention assurent des interventions adaptées au contexte de chaque organisation, en impliquant tous les acteurs autour d’une méthode globale, en lien avec les services de santé au travail. 

Pour en savoir plus et prendre contact avec l’association : 
https://addictions-france.org/regions/occitanie/
Direction régionale Occitanie : 04 99 77 10 77`,
  },
	  {
    id: 125,
    parentId: 13,
    name: `La Ligue contre le cancer`,
    description: `Créée en 1918, la Ligue contre le cancer est une association loi 1901 reconnue d'utilité publique. Elle initie et finance des projets de recherche, informe, sensibilise, mène des actions visant à lutter efficacement contre le cancer et agit au plus près des personnes fragilisées par la maladie cancéreuse (soutien financier, aide psychologique, activité physique…). La Ligue s’érige en porte-parole des personnes malades et de leurs proches et œuvre auprès des institutions et des entreprises afin de promouvoir les droits des patients et des usagers du système de santé.

Pour favoriser la prévention et le dépistage du cancer et le retour ou le maintien dans l’emploi des salariés touchés directement ou indirectement par le cancer, l’association mène des actions dans les entreprises pour :
- Sensibiliser les collaborateurs à la problématique du cancer et aux répercussions éventuelles sur l’emploi
- Déployer des actions de prévention et de dépistage
- Former les managers pour une meilleure connaissance de la problématique
- Lever les tabous et changer le regard porté sur le cancer et sur les personnes touchées par cette maladie
- Fédérer autour d’un projet commun

Pour en savoir plus : https://www.ligue-cancer.net/`,
  },
  {
    id: 126,
    parentId: 13,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
	
	
 {
    id: 127,
    parentId: 14,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur unique, au niveau régional, pour toute question concernant :
      	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour l’amélioration de la qualité de l’emploi et des relations du travail) ;
      	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
      	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
      	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
      	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
      	- les actions sociales et économiques de la politique de la ville ;
      	- le contrôle et l’inspection des établissements et services sociaux ;
      	- la formation et la certification des professions sociales et de santé non médicales ;
      	- l’insertion sociale et professionnelle.

      Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

      Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },
  {
    id: 128,
    parentId: 14,
    name: `La Région Occitanie`,
    description: `Dans le cadre de ses compétences en matière de développement économique et de formation professionnelle, la Région Occitanie a mis en place une offre de services « Ressources Humaines » à destination des entreprises.

Cette offre de services repose sur 4 volets : 
-	Information et sensibilisation des entreprises
-	Pré-diagnostic ressources humaines
-	Développement des compétences
-	Accompagnement au recrutement

Pour en savoir plus sur les services proposés par la Région : https://www.laregion.fr/competencesRH-entreprises`,
  },
	  {
    id: 129,
    parentId: 14,
    name: `Pôle Emploi`,
    description: `Service public de l’emploi en France, Pôle Emploi œuvre au quotidien pour faciliter le retour à l’emploi des demandeurs et offrir aux entreprises des réponses adaptées à leurs besoins de recrutement. 
Il accueille, informe et oriente toutes les personnes – qu’elles soient ou non déjà en poste – dans la recherche d’un emploi, d’une formation, d’un conseil professionnel, d’une aide à la mobilité ou à l’insertion sociale et professionnelle.

Ses conseillers accompagnent les employeurs et les conseillent en partageant des diagnostics nourris par une connaissance approfondie des bassins d’emploi locaux. Ils accompagnent également les employeurs ayant des difficultés à recruter ou à définir leurs besoins.

Pour prendre contact avec les conseillers entreprise de votre territoire :
 https://www.pole-emploi.fr/region/occitanie/employeur/services--conseils/conseillers-entreprises.html

Pour trouver votre agence Pôle Emploi :
https://www.pole-emploi.fr/annuaire/votre-pole-emploi.html`,
  },
	  {
    id: 130,
    parentId: 14,
    name: `L'APEC`,
    description: `Association privée et paritaire présente sur tout le territoire à travers ses 12 délégations régionales, l’Apec est un acteur de référence sur le marché des compétences cadres. Elle agit pour fluidifier le marché de l’emploi des cadres et apporte une analyse, une connaissance et des outils indispensables aux stratégies de recrutement et au développement des entreprises. 

Plus précisemment, l’Apec :
      - Propose des services destinés aux employeurs permettant de sécuriser leurs recrutements par des informations et des conseils adaptés (recruter, attirer les candidats, accompagner l’évolution professionnelle)
      - Propose des services bénéficiant à l’ensemble des cadres et des jeunes diplômé.e.s de l’enseignement supérieur (conseil en évolution professionnelle, accompagnement à la recherche d’emploi…)
      - Collecte et diffuse les offres d’emploi cadres
      - Développe un programme d’études et de veille sur le marché du travail des cadres et en diffuse les résultats

      Pour en savoir plus et trouver votre centre Apec :
      https://www.apec.fr/mon-centre.html#/recherche`,
  },
  {
    id: 131,
    parentId: 14,
    name: `Les OPCO`,
    description: `Créés le 1er avril 2019, les 11 opérateurs de compétences (OPCO) sont chargés d’accompagner la formation professionnelle.
Ils remplacent les anciens organismes paritaires collecteurs agréés (OPCA) et ont pour missions de financer l’apprentissage, d’aider les branches à construire les certifications professionnelles et d’accompagner les PME pour définir leurs besoins en formation.

      Pour connaître votre OPCO grâce à votre Identifiant de Convention Collective :
      https://travail-emploi.gouv.fr/ministere/acteurs/partenaires/opco`,
  },
  {
    id: 132,
    parentId: 14,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
	  {
    id: 133,
    parentId: 14,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
	  {
    id: 134,
    parentId: 14,
    name: `Les CCI`,
    description: `Les Chambres de Commerce et d'Industrie (CCI) sont des établissements publics de l'Etat administrés par des dirigeants d’entreprises élus. Elles représentent les intérêts des entreprises commerciales, industrielles et de services de leur territoire auprès des pouvoirs publics. Elles accompagnent, informent, conseillent les entreprises à toutes les étapes de leur développement et participent à la formation et au développement des compétences sur leur territoire. Elles contribuent au développement économique, à l’attractivité et à l’aménagement de leur territoire.

      Les CCI proposent une offre de services diversifiée dans le champ des ressources humaines : pré-diagnostic RH, information et actualités juridiques et sociales, appui au recrutement, accompagnement en gestion des ressources humaines, formation, ateliers et échanges entre professionnels RH…

      Pour prendre contact avec votre CCI et découvrir son offre de services :
      https://www.occitanie.cci.fr/le-reseau-des-cci-0`,
  },
	  {
    id: 135,
    parentId: 14,
    name: `Les CMA`,
    description: `Les Chambres de métiers et de l’artisanat (CMA) sont des établissements publics de l’Etat gérées par des chef.fe.s d’entreprises artisanales élu.e.s. Elles représentent et défendent les intérêts des artisans dans le département, forment ceux de demain et accompagnent les entreprises artisanales dans leur développement. Leurs missions d’accompagnement couvrent toutes les étapes de la vie de l’entreprise, de la détection d’un projet à la transmission d’entreprise afin d’en assurer le développement et la pérennité.

      Pour trouver et prendre contact avec votre CMA :
      https://www.artisanat.fr/reseau-des-cma/un-reseau-de-proximite/annuaire-des-cma`,
  },
	  {
    id: 136,
    parentId: 14,
    name: `L'ANDRH`,
    description: `Créée en 1947, L’Association Nationale des DRH (ANDRH) est une association loi 1901 au service des professionnel·le·s des ressources humaines d'entreprises et d'organisations de tous secteurs d’activité et de toutes tailles, publiques et privées, nationales et internationales.
      L’ANDRH anticipe et accompagne l’évolution des métiers des ressources humaines et porte les intérêts de la communauté RH. Elle est force de proposition auprès des pouvoirs publics, des instances européennes et internationales et des partenaires sociaux sur tous les sujets qui concernent la pratique professionnelle de ses adhérent·e·s.

      Elle accompagne et professionnalise ses adhérent·e·s.dans la pratique du métier RH et valorise et promeut la fonction RH.
      Forte de ses groupes locaux, l'ANDRH organise régulièrement des rencontres enrichissantes et conviviales entre membres pour échanger sur les bonnes pratiques et les actualités du métier et soutient ses membres face aux problématiques de leur activité.

      Pour prendre contact avec les groupes locaux d’Occitanie :
      - ANDRH Languedoc-Roussillon : https://www.andrh.fr/groupes-locaux/3/andrh-languedoc-roussillon
      - ANDRH Midi-Pyrénées : https://www.andrh.fr/groupes-locaux/43/andrh-midi-pyrenees`,
  },
	  {
    id: 137,
    parentId: 14,
    name: `Les Groupements d'Employeurs`,
    description: `Les groupements d’employeurs (GE) sont des associations loi 1901 à but non lucratif qui permettent à plusieurs employeurs de se réunir afin de partager entre eux le temps de travail d’un ou de plusieurs salariés. L’objectif est de répondre aux besoins en compétences, en temps partiel ou saisonniers des entreprises, tout en proposant une offre d’emploi à temps plein et pérenne au salarié.

      Les groupements d’employeurs constituent une solution efficace aux entreprises pour se doter de compétences tout en contribuant au développement d’emplois qui répondent à leurs besoins de flexibilité. Ils peuvent aussi être une solution pour un maintien d’emploi au sein d’une structure qui doit diminuer le temps d’activité de ses effectifs.

      Les GE peuvent également proposer à leurs adhérents une offre de services dédiée à la sécurisation des recrutements et à la gestion des ressources humaines. Ils contribuent ainsi au développement économique des entreprises et à la sécurisation des parcours professionnels.

      Pour en savoir plus : https://www.crge-occitanie.fr/`,
  },
  {
    id: 138,
    parentId: 14,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
	
  {
    id: 139,
    parentId: 133,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	
  {
    id: 140,
    parentId: 139,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },

  {
    id: 141,
    parentId: 139,
    name: `FRSEA`,
    description: `frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },

  {
    id: 142,
    parentId: 139,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },

  {
    id: 143,
    parentId: 139,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },
	
  {
    id: 144,
    parentId: 133,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
	  
  {
    id: 145,
    parentId: 144,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
  
  {
    id: 146,
    parentId: 144,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
      
  {
    id: 147,
    parentId: 144,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
     
  {
    id: 148,
    parentId: 144,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
       
  {
    id: 149,
    parentId: 144,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },

	  {
    id: 150,
    parentId: 15,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },
	 {
    id: 151,
    parentId: 15,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise.

L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

      Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services :
https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },
		  {
    id: 152,
    parentId: 15,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé (ARS) pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité.

      Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé.

Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

      Pour en savoir plus sur l'ARS Occitanie et ses missions :
      https://www.occitanie.ars.sante.fr/

      Pour prendre contact avec l’ARS Occitanie et ou ses 13 délégations départementales :
      https://www.occitanie.ars.sante.fr/contact-7`,
  },
  {
    id: 153,
    parentId: 15,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  
  
  
  
  
	  {
    id: 154,
    parentId: 15,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
    {
    id: 155,
    parentId: 154,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
    {
    id: 156,
    parentId: 154,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
    {
    id: 157,
    parentId: 154,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },     
    {
    id: 158,
    parentId: 154,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },       
    {
    id: 159,
    parentId: 154,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },          
    {
    id: 160,
    parentId: 154,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },             
    {
    id: 161,
    parentId: 154,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaitre vos contacts en région et dans les départements :
https://fsu.fr/annuaire/`,
  },              
    {
    id: 162,
    parentId: 154,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },  
              
    {
    id: 163,
    parentId: 154,
    name: `UNSA`,
    description: `Tel. : 05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },   
  
	  {
    id: 164,
    parentId: 15,
    name: `L'ANDRH`,
    description: `Créée en 1947, l’ANDRH est une association loi 1901 au service des professionnel·le·s des ressources humaines d'entreprises et d'organisations de tous secteurs d’activité et de toutes tailles, publiques et privées, nationales et internationales.
      
L’ANDRH anticipe et accompagne l’évolution des métiers des ressources humaines et porte les intérêts de la communauté RH. Elle est force de proposition auprès des pouvoirs publics, des instances européennes et internationales et des partenaires sociaux sur tous les sujets qui concernent la pratique professionnelle de ses adhérent·e·s.
Elle accompagne et professionnalise ses adhérent·e·s.dans la pratique du métier RH et valorise et promeut la fonction RH.

      Forte de ses groupes locaux, l'ANDRH organise régulièrement des rencontres enrichissantes et conviviales entre membres pour échanger sur les bonnes pratiques et les actualités du métier et soutient ses membres face aux problématiques de leur activité.

      Pour prendre contact avec les groupes locaux d’Occitanie :
-	ANDRH Languedoc-Roussillon : https://www.andrh.fr/groupes-locaux/3/andrh-languedoc-roussillon
-	ANDRH Midi-Pyrénées : https://www.andrh.fr/groupes-locaux/43/andrh-midi-pyrenees`,
  },
  {
    id: 165,
    parentId: 15,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
   {
    id: 166,
    parentId: 16,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur unique, au niveau régional, pour toute question concernant :
      	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour l’amélioration de la qualité de l’emploi et des relations du travail) ;
      	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
      	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
      	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
      	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
      	- les actions sociales et économiques de la politique de la ville ;
      	- le contrôle et l’inspection des établissements et services sociaux ;
      	- la formation et la certification des professions sociales et de santé non médicales ;
      	- l’insertion sociale et professionnelle.

      Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

      Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },
  {
    id: 167,
    parentId: 16,
    name: `La DRDFE`,
    description: `Placée sous l’autorité du Préfet de région et rattachée au Secrétariat Général pour les Affaires Régionales, la Direction Régionale aux Droits des Femmes et à l'Egalité (DRDFE) met en œuvre la politique publique des droits des femmes et de l’égalité entre les femmes et les hommes dans la région, en cohérence avec les orientations du gouvernement et de la stratégie européenne.


      La DRDFE anime une équipe de 13 déléguées départementales qui impulsent sur leur territoire une dynamique interministérielle en faveur de l’égalité femmes-hommes en lien avec leurs partenaires institutionnels, économiques, associatifs.

      La direction régionale et les déléguées départementales coordonnent et accompagnent les acteurs locaux dans leurs démarches de promotion des droits des femmes et de l’égalité femmes/hommes autour des priorités suivantes :
      -	Construire une culture de l’égalité et combattre les stéréotypes sexistes,
      -	Favoriser l’égal accès des femmes aux responsabilités dans la vie politique, sociale, économique et associative,
      -	Promouvoir l’égalité professionnelle, la mixité dans les emplois et l’entrepreneuriat des femmes,
      -	Prévenir la lutte contre les violences faites aux femmes et les atteintes à leur dignité, renforcer la lutte contre le système prostitutionnel.

      Pour prendre contact avec la DRDFE et ses délégations départementales :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/L-action-de-l-Etat/Droits-des-femmes-egalite/Organisation-du-reseau-des-droits-des-femmes/Organisation-du-reseau-des-droits-des-femmes-et-de-l-egalite/L-organisation-regionale/`,
  },
  {
    id: 168,
    parentId: 16,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  
  
	  {
    id: 169,
    parentId: 16,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
  
  
	  {
    id: 170,
    parentId: 16,
    name: `Pôle Emploi`,
    description: `Service public de l’emploi en France, Pôle Emploi œuvre au quotidien pour faciliter le retour à l’emploi des demandeurs et offrir aux entreprises des réponses adaptées à leurs besoins de recrutement. 
Il accueille, informe et oriente toutes les personnes – qu’elles soient ou non déjà en poste – dans la recherche d’un emploi, d’une formation, d’un conseil professionnel, d’une aide à la mobilité ou à l’insertion sociale et professionnelle.

Ses conseillers accompagnent les employeurs et les conseillent en partageant des diagnostics nourris par une connaissance approfondie des bassins d’emploi locaux. Ils accompagnent également les employeurs ayant des difficultés à recruter ou à définir leurs besoins.

Pour prendre contact avec les conseillers entreprise de votre territoire :
 https://www.pole-emploi.fr/region/occitanie/employeur/services--conseils/conseillers-entreprises.html

Pour trouver votre agence Pôle Emploi :
https://www.pole-emploi.fr/annuaire/votre-pole-emploi.html`,
  },
	  {
    id: 171,
    parentId: 16,
    name: `FACE Occitanie`,
    description: `Reconnue d’utilité publique, la Fondation Agir Contre l’Exclusion (FACE) réunit acteurs publics, privés et associatifs dans la lutte contre l’exclusion, les discriminations (genre, âge, sexe, origine, handicap, lieu d’habitation…) et la pauvreté.

      Elle déploie des actions concrètes et pérennes qui visent à répondre à la diversité des besoins rencontrés par ses bénéficiaires pour leur garantir l’égalité des chances, l’accès aux droits, aux biens et aux services essentiels, rompre l’isolement et la précarité, casser la spirale des inégalités scolaires et rapprocher les demandeurs d’emploi du collectif que forme l’entreprise.

      Plus grand réseau d’entreprises dédié à la RSE (Responsabilité Sociétale de l’Entreprise) en France, la Face et ses structures locales accompagnent les entreprises dans la conduite du changement et dans la définition et la mise en œuvre concrète de leur politique RSE (sensibilisations, ateliers, interventions en entreprise, échanges de pratiques…).

      Pour en savoir plus et prendre contact avec la structure FACE la plus proche de chez vous :
      https://www.fondationface.org/reseau-face/nous-retrouver-2/`,
  },
	  {
    id: 172,
    parentId: 16,
    name: `L'AGEFIPH Occitanie`,
    description: `L'Association de Gestion du Fond pour l'Insertion Professionnelle des Personnes Handicapées (Agefiph) est chargée de soutenir le développement de l'emploi des personnes handicapées. Pour cela, elle propose des services et aides financières pour les personnes et pour les entreprises privées, quelle que soit leur taille, qu’elles soient soumises ou non à l’obligation d’emploi de personnes handicapées.

      Pour en savoir plus et contacter l'Agefiph Occitanie :
      https://www.agefiph.fr/occitanie`,
  },
	  {
    id: 173,
    parentId: 16,
    name: `Les Cap emploi`,
    description: `Les Cap Emploi sont des organismes de placement spécialisés (OPS) exerçant une mission de service public. Ils sont en charge de la préparation, de l’accompagnement, du suivi durable et du maintien dans l’emploi des personnes handicapées.

      Les conseillers du réseau Cap emploi sont présents dans chaque département. Ils apportent aux employeurs du secteur privé ainsi qu’aux employeurs du secteur public (administrations d’Etat, collectivités territoriales, fonction publique hospitalière) des aides et des conseils pour le recrutement, l’intégration et le maintien dans l’emploi de collaborateurs handicapés.

      Pour prendre contact avec l’OPS Cap emploi de votre département :
      https://lannuaire.service-public.fr/navigation/occitanie/cap_emploi`,
  },
	  {
    id: 174,
    parentId: 16,
    name: `L'ANDRH`,
    description: `Créée en 1947, l’ANDRH est une association loi 1901 au service des professionnel·le·s des ressources humaines d'entreprises et d'organisations de tous secteurs d’activité et de toutes tailles, publiques et privées, nationales et internationales.
      
L’ANDRH anticipe et accompagne l’évolution des métiers des ressources humaines et porte les intérêts de la communauté RH. Elle est force de proposition auprès des pouvoirs publics, des instances européennes et internationales et des partenaires sociaux sur tous les sujets qui concernent la pratique professionnelle de ses adhérent·e·s.
Elle accompagne et professionnalise ses adhérent·e·s.dans la pratique du métier RH et valorise et promeut la fonction RH.

      Forte de ses groupes locaux, l'ANDRH organise régulièrement des rencontres enrichissantes et conviviales entre membres pour échanger sur les bonnes pratiques et les actualités du métier et soutient ses membres face aux problématiques de leur activité.

      Pour prendre contact avec les groupes locaux d’Occitanie :
-	ANDRH Languedoc-Roussillon : https://www.andrh.fr/groupes-locaux/3/andrh-languedoc-roussillon
-	ANDRH Midi-Pyrénées : https://www.andrh.fr/groupes-locaux/43/andrh-midi-pyrenees`,
  },
  {
    id: 175,
    parentId: 16,
    name: `Le Réseau Tiers-Lieux Occitanie`,
    description: `Animé par l’agence régionale de développement économique AD’OCC, le Reseau Tiers-Lieux Occitanie regroupe l’ensemble des Tiers-Lieux labellisés par la Région Occitanie Pyrénées-Méditerranée (espaces de travail partagé (coworking), Fablabs (espaces de fabrication numérique) et des espaces de médiation numérique.

      Il a pour principaux objectifs de :
      - Valoriser et améliorer la visibilité des Tiers-Lieux labellisés
      - Inciter et développer les usages numériques liés aux activités des Tiers-Lieux et ainsi contribuer à leur pérennité
      - Accompagner l’acquisition de nouvelles compétences des acteurs des Tiers-Lieux via un programme de formation dédié
      - Contribuer à relever les défis auxquels doit faire face le territoire régional liés au développement durable, aux difficultés de mobilité, à l’attractivité économique de nombreux territoires, à l’émergence d’une nouvelle économie collaborative et du manque de lieux favorisant son développement, à l’amélioration des conditions de travail à travers la mise en place de nouvelles organisations du travail.

      Pour identifier les tiers-lieux labélisés près de chez vous :
      https://www.tierslieuxoccitanie.com/tiers-lieux/?map

      Pour en savoir plus sur le Reseau Tiers-Lieux Occitanie :
      https://www.tierslieuxoccitanie.com/

      Pour prendre contact avec AD’OCC :
      https://www.tierslieuxoccitanie.com/nous-contacter/`,
  },
  {
    id: 176,
    parentId: 16,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
  
  
  
  {
    id: 177,
    parentId: 169,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
  
  {
    id: 178,
    parentId: 177,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },
  {
    id: 179,
    parentId: 177,
    name: `FRSEA`,
    description: `frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },

  {
    id: 180,
    parentId: 177,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },

  {
    id: 181,
    parentId: 177,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },

    
  {
    id: 182,
    parentId: 169,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
  
  {
    id: 183,
    parentId: 182,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
  
  {
    id: 184,
    parentId: 182,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },  
  {
    id: 185,
    parentId: 182,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },    
  {
    id: 186,
    parentId: 182,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },        
  {
    id: 187,
    parentId: 182,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },      
        
  {
    id: 188,
    parentId: 17,
    name: `La DRDFE`,
    description: `Placée sous l’autorité du Préfet de région et rattachée au Secrétariat Général pour les Affaires Régionales, la Direction Régionale aux Droits des Femmes et à l'Egalité (DRDFE) met en œuvre la politique publique des droits des femmes et de l’égalité entre les femmes et les hommes dans la région, en cohérence avec les orientations du gouvernement et de la stratégie européenne.


      La DRDFE anime une équipe de 13 déléguées départementales qui impulsent sur leur territoire une dynamique interministérielle en faveur de l’égalité femmes-hommes en lien avec leurs partenaires institutionnels, économiques, associatifs.

      La direction régionale et les déléguées départementales coordonnent et accompagnent les acteurs locaux dans leurs démarches de promotion des droits des femmes et de l’égalité femmes/hommes autour des priorités suivantes :
      -	Construire une culture de l’égalité et combattre les stéréotypes sexistes,
      -	Favoriser l’égal accès des femmes aux responsabilités dans la vie politique, sociale, économique et associative,
      -	Promouvoir l’égalité professionnelle, la mixité dans les emplois et l’entrepreneuriat des femmes,
      -	Prévenir la lutte contre les violences faites aux femmes et les atteintes à leur dignité, renforcer la lutte contre le système prostitutionnel.

      Pour prendre contact avec la DRDFE et ses délégations départementales :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/L-action-de-l-Etat/Droits-des-femmes-egalite/Organisation-du-reseau-des-droits-des-femmes/Organisation-du-reseau-des-droits-des-femmes-et-de-l-egalite/L-organisation-regionale/`,
  },
	
	 {
    id: 189,
    parentId: 17,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },
	  {
    id: 190,
    parentId: 17,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé (ARS) pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité.

Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé.

Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

Pour en savoir plus :
https://www.occitanie.ars.sante.fr/
Pour prendre contact avec l’ARS Occitanie ou ses 13 délégations départementales : https://www.occitanie.ars.sante.fr/contact-7`,
  },	
	 {
    id: 191,
    parentId: 17,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise.

L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services : https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },
	{
    id: 192,
    parentId: 17,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  
  
  
  
	  {
    id: 193,
    parentId: 17,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
  
  {
    id: 194,
    parentId: 193,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
  {
    id: 195,
    parentId: 193,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
  {
    id: 196,
    parentId: 193,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
  {
    id: 197,
    parentId: 193,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },     
  {
    id: 198,
    parentId: 193,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },           
    
  {
    id: 199,
    parentId: 193,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },    
  {
    id: 200,
    parentId: 193,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaitre vos contacts en région et dans les départements :
https://fsu.fr/annuaire/`,
  },           
  
  {
    id: 201,
    parentId: 193,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },   
  {
    id: 202,
    parentId: 193,
    name: `UNSA`,
    description: `Tel. : 05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },           
  
	  {
    id: 203,
    parentId: 17,
    name: `Le FIPHFP`,
    description: `Acteur essentiel de la politique handicap dans la Fonction publique, le Fond pour l'Insertion des Personnes Handicapées dans la Fonction Publique (FIPHFP) impulse une dynamique et incite les employeurs publics à agir en favorisant le recrutement, l'accompagnement et le maintien dans l'emploi au sein des trois fonctions publiques.

      http://www.fiphfp.fr/Le-FIPHFP/En-region/Le-FIPHFP-dans-votre-region/Occitanie`,
  },
	  {
    id: 204,
    parentId: 17,
    name: `Les Cap emploi`,
    description: `Les Cap Emploi sont des organismes de placement spécialisés (OPS) exerçant une mission de service public. Ils sont en charge de la préparation, de l’accompagnement, du suivi durable et du maintien dans l’emploi des personnes handicapées.

      Les conseillers du réseau Cap emploi sont présents dans chaque département. Ils apportent aux employeurs du secteur privé ainsi qu’aux employeurs du secteur public (administrations d’Etat, collectivités territoriales, fonction publique hospitalière) des aides et des conseils pour le recrutement, l’intégration et le maintien dans l’emploi de collaborateurs handicapés.

      Pour prendre contact avec l’OPS Cap emploi de votre département :
      https://lannuaire.service-public.fr/navigation/occitanie/cap_emploi`,
  },
	  {
    id: 205,
    parentId: 17,
    name: `L'ANDRH`,
    description: `Créée en 1947, l’ANDRH est une association loi 1901 au service des professionnel·le·s des ressources humaines d'entreprises et d'organisations de tous secteurs d’activité et de toutes tailles, publiques et privées, nationales et internationales.
      
L’ANDRH anticipe et accompagne l’évolution des métiers des ressources humaines et porte les intérêts de la communauté RH. Elle est force de proposition auprès des pouvoirs publics, des instances européennes et internationales et des partenaires sociaux sur tous les sujets qui concernent la pratique professionnelle de ses adhérent·e·s.
Elle accompagne et professionnalise ses adhérent·e·s.dans la pratique du métier RH et valorise et promeut la fonction RH.

      Forte de ses groupes locaux, l'ANDRH organise régulièrement des rencontres enrichissantes et conviviales entre membres pour échanger sur les bonnes pratiques et les actualités du métier et soutient ses membres face aux problématiques de leur activité.

      Pour prendre contact avec les groupes locaux d’Occitanie :
-	ANDRH Languedoc-Roussillon : https://www.andrh.fr/groupes-locaux/3/andrh-languedoc-roussillon
-	ANDRH Midi-Pyrénées : https://www.andrh.fr/groupes-locaux/43/andrh-midi-pyrenees`,
  },
	  {
    id: 206,
    parentId: 17,
    name: `Le Réseau Tiers-Lieux Occitanie`,
    description: `Animé par l’agence régionale de développement économique AD’OCC, le Reseau Tiers-Lieux Occitanie regroupe l’ensemble des Tiers-Lieux labellisés par la Région Occitanie Pyrénées-Méditerranée (espaces de travail partagé (coworking), Fablabs (espaces de fabrication numérique) et des espaces de médiation numérique.

      Il a pour principaux objectifs de :
      - Valoriser et améliorer la visibilité des Tiers-Lieux labellisés
      - Inciter et développer les usages numériques liés aux activités des Tiers-Lieux et ainsi contribuer à leur pérennité
      - Accompagner l’acquisition de nouvelles compétences des acteurs des Tiers-Lieux via un programme de formation dédié
      - Contribuer à relever les défis auxquels doit faire face le territoire régional liés au développement durable, aux difficultés de mobilité, à l’attractivité économique de nombreux territoires, à l’émergence d’une nouvelle économie collaborative et du manque de lieux favorisant son développement, à l’amélioration des conditions de travail à travers la mise en place de nouvelles organisations du travail.

      Pour identifier les tiers-lieux labélisés près de chez vous :
      https://www.tierslieuxoccitanie.com/tiers-lieux/?map

      Pour en savoir plus sur le Reseau Tiers-Lieux Occitanie :
      https://www.tierslieuxoccitanie.com/

      Pour prendre contact avec AD’OCC :
      https://www.tierslieuxoccitanie.com/nous-contacter/`,
  },
  {
    id: 207,
    parentId: 17,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },
  {
    id: 208,
    parentId: 18,
    name: `La DREETS Occitanie`,
    description: `La Direction régionale de l’économie, de l’emploi, du travail et des solidarités (DREETS) Occitanie est l’interlocuteur unique, au niveau régional, pour toute question concernant :
      	- la politique du travail et l’inspection du travail (assurer l’effectivité du droit et agir pour l’amélioration de la qualité de l’emploi et des relations du travail) ;
      	- le contrôle du bon fonctionnement des marchés et des relations commerciales et la protection des consommateurs ;
      	- le développement des filières et l’accompagnement des entreprises, les mutations économiques, la compétitivité et la sauvegarde des entreprises ;
      	- la politique de l’emploi (accès et retour dans l’emploi, développement de l’emploi et des compétences, formation professionnelle) ;
      	- les politiques de cohésion sociale (protection des personnes vulnérables, lutte contre les exclusions, hébergement) ;
      	- les actions sociales et économiques de la politique de la ville ;
      	- le contrôle et l’inspection des établissements et services sociaux ;
      	- la formation et la certification des professions sociales et de santé non médicales ;
      	- l’insertion sociale et professionnelle.

      Au niveau départemental, la DREETS pilote, anime et coordonne les politiques publiques qui lui sont confiées et qui sont mises en œuvre par les Directions départementales de l’emploi, du travail et des solidarités (DDETS), les directions départementales de la protection des populations (DDPP) et les Directions départementales de l’emploi, du travail et des solidarités et de la protection des populations (DDETS-PP).

      Pour en savoir plus sur la DREETS Occitanie : https://occitanie.dreets.gouv.fr/`,
  },	
  {
    id: 209,
    parentId: 18,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
  
    
	  {
    id: 210,
    parentId: 18,
    name: `Les partenaires sociaux`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },
  
 {
    id: 211,
    parentId: 18,
    name: `L'ANDRH`,
    description: `Créée en 1947, L’Association Nationale des DRH (ANDRH) est une association loi 1901 au service des professionnel·le·s des ressources humaines d'entreprises et d'organisations de tous secteurs d’activité et de toutes tailles, publiques et privées, nationales et internationales.
      L’ANDRH anticipe et accompagne l’évolution des métiers des ressources humaines et porte les intérêts de la communauté RH. Elle est force de proposition auprès des pouvoirs publics, des instances européennes et internationales et des partenaires sociaux sur tous les sujets qui concernent la pratique professionnelle de ses adhérent·e·s.

      Elle accompagne et professionnalise ses adhérent·e·s.dans la pratique du métier RH et valorise et promeut la fonction RH.
      Forte de ses groupes locaux, l'ANDRH organise régulièrement des rencontres enrichissantes et conviviales entre membres pour échanger sur les bonnes pratiques et les actualités du métier et soutient ses membres face aux problématiques de leur activité.

      Pour prendre contact avec les groupes locaux d’Occitanie :
      - ANDRH Languedoc-Roussillon : https://www.andrh.fr/groupes-locaux/3/andrh-languedoc-roussillon
      - ANDRH Midi-Pyrénées : https://www.andrh.fr/groupes-locaux/43/andrh-midi-pyrenees`,
  },
  {
    id: 212,
    parentId: 18,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },

  {
    id: 213,
    parentId: 210,
    name: `Les organisations syndicales d'employeurs`,
    description: `Les organisations patronales défendent les intérêts des employeurs et les représentent auprès des pouvoirs publics et des institutions. Elles participent aux négociations interprofessionnelles et aux négociations de branches et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
  
  {
    id: 214,
    parentId: 213,
    name: `CPME`,
    description: `Tel. : 05 67 16 24 77 (Toulouse)
      Tel. : 04 67 92 56 81 (Montpellier)
      contact@cpmeoccitanie.fr
      https://www.cpmeoccitanie.fr/`,
  },
  {
    id: 215,
    parentId: 213,
    name: `FRSEA`,
    description: `frsea.occitanie@reseaufnsea.fr
      https://www.fnsea.fr/`,
  },
  {
    id: 216,
    parentId: 213,
    name: `MEDEF`,
    description: `Tel. : 05 62 26 80 60
      contact@medefoccitanie.com
      http://www.medef-occitanie.com/`,
  },

  {
    id: 217,
    parentId: 213,
    name: `U2P`,
    description: `Pour prendre contact avec les U2P de région et de département :
https://u2p-france.fr/les-u2p-de-region-et-de-departement`,
  },    
  
  {
    id: 218,
    parentId: 210,
    name: `Les organisations syndicales de salariés`,
    description: `Les organisations syndicales de salariés représentent les travailleurs auprès des pouvoirs publics et des institutions. Elles défendent leurs intérêts au niveau des entreprises, des branches professionnelles et des instances de négociations nationales et peuvent permettre à leurs adhérents de bénéficier de services et de conseils personnalisés pour leurs démarches et actions QVT.`,
  },
  {
    id: 219,
    parentId: 218,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
  {
    id: 220,
    parentId: 218,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },

  {
    id: 221,
    parentId: 218,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
  {
    id: 222,
    parentId: 218,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
  {
    id: 223,
    parentId: 218,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
      
  {
    id: 224,
    parentId: 19,
    name: `La PFRH Occitanie`,
    description: `La PFRH, plate-forme régionale d’appui interministériel à la gestion des ressources humaines, est animée par une équipe pluridisciplinaire dédiée à l’accompagnement des ressources humaines. Elle est placée sous l’autorité du préfet de région (auprès du SGAR) et œuvre en faveur des différents services de l’Etat en région et de leurs agents (3 versants de la fonction publique). Elle anime des réseaux régionaux sur les thématiques RH.

Son offre de service s'articule autour de 3 grandes missions :
      - Accompagner les transformations des organisations : accompagnement à la réalisation des projets de transformation (réorganisations, évolution des missions, fonctionnement des instances), projet d’équipe ou de service, appui managérial, analyse de process de travail, développement de nouvelles modalités de travail
      - Accompagner les agents individuellement : appui dans la définition de besoins professionnels, proposition de parcours de formation, accompagnement des démarches d’évolution professionnelle ou de mobilité
      - Irriguer les territoires des bonnes pratiques : veille réglementaire RH, animation de réseaux régionaux, montrer l’exemple et former/sensibiliser, tester et proposer les meilleurs outils

      Pour en savoir plus :
      https://www.prefectures-regions.gouv.fr/occitanie/Region-et-institutions/Organisation-administrative-de-la-region/Ressources-humaines-et-action-sociale/La-plate-forme-regionale-d-appui-interministeriel-a-la-gestion-des-ressources-humaines-PFRH/Presentation/PFRH-Occitanie

      Contacts :
      plate-forme-rh@occitanie.gouv.fr
      05 34 45 33 45`,
  },
	  {
    id: 225,
    parentId: 19,
    name: `Les centres de gestion`,
    description: `Les centres de gestion (CDG) sont des établissements publics locaux à caractère administratif gérés par les employeurs territoriaux (maires, présidents d'établissements publics...). Ils ont pour vocation de participer à la gestion des personnels territoriaux et au développement des ressources humaines des collectivités affiliées auprès desquelles ils apportent leur assistance et leur expertise.

L'affiliation à un centre de gestion est obligatoire pour les communes et établissements publics qui emploient moins de 350 fonctionnaires, titulaires ou stagiaires à temps complet. Elle est facultative pour les autres collectivités.

      Pour trouver les coordonnées du centre de gestion de votre département et prendre connaissance de son offre de services : https://lannuaire.service-public.fr/navigation/occitanie/cdg`,
  },
	{
    id: 226,
    parentId: 19,
    name: `L'ARS Occitanie`,
    description: `L’Agence Régionale de Santé (ARS) pilote en région les politiques de santé. Elle agit en partenariat avec les acteurs de la santé de la région Occitanie pour que chacun ait accès à des soins de qualité.

      Elle peut financer des actions de prévention, notamment via les contrats locaux d'amélioration des conditions de travail (CLACT), gère au quotidien les risques sanitaires liés à l’environnement, prévient et apporte des réponses aux crises sanitaires et accompagne les citoyens dans leur parcours de vie, de soins, de santé.

Dans chaque département, la délégation de l’ARS est le relais de terrain de la politique régionale, au plus près des acteurs locaux de santé.

      Pour en savoir plus :
https://www.occitanie.ars.sante.fr/

      Pour prendre contact avec l’ARS Occitanie ou ses 13 délégations départementales :
      https://www.occitanie.ars.sante.fr/contact-7`,
  },
  {
    id: 227,
    parentId: 19,
    name: `L'Aract Occitanie`,
    description: `L’Association régionale pour l’amélioration des conditions de travail (Aract) Occitanie, membre du réseau Anact-Aract, est une structure associative paritaire au service des entreprises, des salariés et des partenaires sociaux régionaux.

      Elle a pour vocation d’améliorer les conditions de travail des salariés, l’efficacité des entreprises et des organisations, de promouvoir des démarches d’innovation sociale, en agissant notamment sur l’organisation du travail et sur les relations professionnelles.

      Pour cela, l’Aract conçoit et diffuse des méthodes et outils issus d’expérimentations menées sur le terrain et conduites avec l’ensemble des parties prenantes de l’organisation dans un objectif partagé : concilier durablement qualité de vie au travail et performance.

      Pour en savoir plus sur l'Aract Occitanie et ses missions : https://occitanie.aract.fr/

      Pour prendre contact avec l'Aract Occitanie : https://occitanie.aract.fr/contact`,
  },
	  {
    id: 228,
    parentId: 19,
    name: `Les organisations syndicales`,
    description: `Les organisations syndicales et leurs interlocuteurs en région peuvent vous représenter, défendre vos intérêts, vous conseiller et répondre à vos questions en matière de QVT`,
  },

	
	{
    id: 229,
    parentId: 228,
    name: `CFDT`,
    description: `Tel. : 05 61 43 67 87
      uri@occitanie.cfdt.fr
      https://occitanie.cfdt.fr`,
  },
	
	{
    id: 230,
    parentId: 228,
    name: `CFE-CGC`,
    description: `Tel. : 05 62 27 92 07
      uroccitanie@cfecgc.fr
      http://www.cfecgc.org/`,
  },
	
	{
    id: 231,
    parentId: 228,
    name: `CFTC`,
    description: `Tel. : 05 34 64 42 32
      ur@cftc-occitanie.fr
      https://www.cftc.fr/nous-connaitre/annuaire-des-structures?search=occitanie`,
  },
	
	{
    id: 232,
    parentId: 228,
    name: `CGT`,
    description: `Tel. : 05 61 23 35 52 (Toulouse)
      Tel. : 04 67 15 91 74 (Montpellier)
      crcgt.occitanie@orange.fr
      http://crcgtoccitanie.reference-syndicale.fr/`,
  },
	
	{
    id: 233,
    parentId: 228,
    name: `FA-FP`,
    description: `https://www.fa-fp.org/70-contacter-federation-autonome.html`,
  },
	
	{
    id: 234,
    parentId: 228,
    name: `FO`,
    description: `Tel. : 05 62 72 37 87
      https://www.force-ouvriere.fr/spip.php?page=ud
      https://www.force-ouvriere.fr/`,
  },
	
	{
    id: 235,
    parentId: 228,
    name: `FSU`,
    description: `https://fsu.fr/
Pour connaitre vos contacts en région et dans les départements :
https://fsu.fr/annuaire/`,
  },
	
  {
    id: 236,
    parentId: 228,
    name: `Solidaires Fonction Publique`,
    description: `https://solidaires.org/-Solidaires-dans-la-Fonction-publique`,
  },
	
	
  {
    id: 237,
    parentId: 228,
    name: `UNSA`,
    description: `05 62 47 20 72
      ur-occitanie@unsa.org
      https://occitanie.unsa.org/`,
  },
	
	{
    id: 238,
    parentId: 19,
    name: `Les cabinets de conseil`,
    description: `Des consultants et cabinets de conseil peuvent vous appuyer et vous accompagner dans vos projets QVT.

      Créée en 2021, la plateforme Réflex QVT vous permet d'identifier et de prendre contact avec des consultants présents sur votre territoire et signataires de la charte d’engagement du réseau Anact-Aract sur la QVT.

Pour vous rendre sur la plateforme Reflex QVT : https://reflexqvt.anact.fr/fr/`,
  },



];
