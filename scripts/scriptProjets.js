let projets = {
    "TITANIC_BDD" : {
      "short_desc": "A faire",
      "html": `
        <h2 id="TitreProjet">Analyse du naufrage du Titanic - déc 2023</h2>
              
            <div id="langagesUtilises">
              <div class="langage">
                <img src="img/PostgreSQLogo.png" alt="PostgreSQL Logo">
                <div class="overlay-text">PostgreSQL</div>
              </div>
              <div class="langage">
                <img src="img/DataAnalysisLogo.png" alt="Data Analyse Logo">
                <div class="overlay-text">Analyse données</div>
              </div>
            </div>
            <p>Ce projet, en binôme, portait sur l'analyse des facteurs de survie pour les rescapés du Titanic.
            Pour cela, nous devions extraire les données sur le Titanic en les insérant dans une BDD correspondante à nos besoins.</p>
            <img src="img/projets/Titanic/TitanicSEA.png" alt="Schéma entité association pour la récupération des données">
            <p>Notre compte-rendu : </p>
        `},
    "CIRCUS_PLANNER" : {
      "short_desc": "A faire",
      "html": `
        <h2 id="TitreProjet">Application lourde pour la gestion des cirques - mars 2024</h2>
        <div id="langagesUtilises">
            <div class="langage">
              <img src="img/JavaLogo.png" alt="Java Logo">
              <div class="overlay-text">Java</div>
            </div>
            <div class="langage">
              <img src="img/JavaFXLogo.png" alt="JavaFX Logo">
              <div class="overlay-text">JavaFX</div>
            </div>
            <div class="langage">
              <img src="img/CSSLogo.png" alt="CSS Logo">
              <div class="overlay-text">CSS</div>
            </div>
        </div>
        <a class="firstLink" href="https://github.com/Thomas-381/CircusPlanner">Lien vers le code source sur Github</a>
        <p>Ce projet, en groupe de 5, portait sur la création d'une application pour aider les gérants de cirques à organiser leurs futurs évènements.
        Nous avons utilisé JavaFX et CSS pour réaliser l'interface et Java pour faire le modèle de données.</p>
        <img class="imgPasNette" src="img/projets/CIRCUSPLANNER/CIRCUSPLANNERdiagrammeClasse.svg" alt="Image 1 du rendu final">
        <br>
        `},
    "MONA" : {
      "short_desc": "A faire",
      "html": `
        <h2 id="TitreProjet"> Application web d'évènements : Mona -  nov 2024 - janv 2025</h2>
        <div id="langagesUtilises">
              <div class="langage">
                <img src="img/CSSLogo.png" alt="CSS Logo">
                <div class="overlay-text">CSS</div>
              </div>
              <div class="langage">
                <img src="img/JavascriptLogo.png" alt="Javascript Logo">
                <div class="overlay-text">Javascript</div>
              </div>
              <div class="langage">
                <img src="img/ReactLogo.png" alt="React Logo">
                <div class="overlay-text">React</div>
              </div>
              <div class="langage">
                <img src="img/PHPLogo.png" alt="PHP Logo">
                <div class="overlay-text">PHP</div>
              </div>
              <div class="langage">
                <img src="img/PostgreSQLogo.png" alt="PostgreSQL Logo">
                <div class="overlay-text">PostgreSQL</div>
              </div>
              <div class="langage">
                <img src="img/GitlabLogo.png" alt="Gitlab Logo">
                <div class="overlay-text">Responsable Gitlab</div>
              </div>
        </div>
        <a class="firstLink" href="https://github.com/Atio3f/Mona">Lien Github vers le code source</a>
        <p> 
          Réalisation d'une application web, à 7, mettant en valeur le patrimoine français en mettant en relation des propriétaires de monuments avec des prestataires d'évènements
          afin d'organiser des activités exclusives redonnant vie à ces bâtiments historiques. Les visiteurs pourront prendre leurs places depuis notre billeterie.
          J'ai été chargé de réaliser la partie front en React avec un autre camarade. Je me suis occupé de toute la gestion des évènements pour les prestataires.
          J'ai également réalisé la liaison avec notre API REST pour la récupération des informations des évènements ainsi que certaines informations des monuments.
          J'avais également eu la charge en tant que responsable Gitlab de devoir m'occuper de tous les problèmes liés à Gitlab lorsqu'on réalisait des plusieurs commits en simultané
          et de les résoudre. Pour cela, j'ai mis en place un bot discord prévenant lorsqu'un commit est effectué et écrit une liste d'instructions pour l'utilisation de Gitlab.
          
        </p>
        <div class="groupeImages">
          <figure>
            <img class="imageG" src="img/projets/Mona/MonaPageAccueil.png" alt="Page d'accueil">
            <figcaption>Landing page du site</figcaption>
          </figure>
          <figure>
            <img class="imageG" src="img/projets/Mona/MonaPageGestionEvent.png" alt="Page de gestion des événements">
            <figcaption>Page de gestion des événements pour les prestataires</figcaption>
          </figure>
          <figure>
            <img class="imageG" src="img/projets/Mona/MonaPagePanier.png" alt="Page du panier">
            <figcaption>Page du panier</figcaption>
          </figure>
          <!--<figure>
            <img class="imageG" src="img/projets/Mona/MonaPageConnexion.png" alt="Page de connexion">
            <figcaption>Page de connexion</figcaption>
          </figure> -!>
          
        </div>
        <p>Compte-rendu gestion de projet avant de le coder : <iframe src="img/projets/Mona/PHASE2_Gestion_de_projet-Manodev-Groupe14.pdf"></iframe>
        `},
    "TRI_DEPECHES" : {
      "short_desc": "A remplir",
      "html": `
        <h2 id="TitreProjet">Trieur de dépêches en Java - novembre 2024</h2>
        <div id="langagesUtilises">
            <div class="langage">
              <img src="img/JavaLogo.png" alt="Java Logo">
              <div class="overlay-text">Java</div>
            </div>
        </div>
        <a class="firstLink" href="https://github.com/Atio3f/">Lien Github vers le code source du projet</a>
        <p>
        Réalisation d'un trieur de dépêches en fonction de leur catégorie(sport/politique/économie/environnement/culture) en analysant la fréquence d'apparition des mots qu'ils contiennent dans les articles de ces catégories par rapport à leur présence dans les autres catégories. Le tout avec 85% de succès.<br>
        Ce projet m'a permis d'en apprendre davantage dans l'automatisation de réponse à des problèmes complexes et de développer mes compétences en Java, la lecture/écriture d'un fichier et dans la gestion des délais pour un projet informatique en groupe.
        </p>
        `},
    "FOC" : {
      "short_desc": "Développement d'un jeu vidéo 2D de stratégie tour par tour",
      "html": `
        <h2 id="TitreProjet"> Jeu 2d de stratégie tour par tour sur Godot - 2024-...</h2>
          <div id="langagesUtilises">
            <div class="langage">
              <img src="img/GodotLogo.png" alt="Godot Logo">
              <div class="overlay-text">Godot/Gdscript</div>
            </div>
          </div>
          <a class="firstLink" href="https://github.com/Atio3f/FightOfCities2D">Lien Github vers le projet</a> <a href="https://atio3f.itch.io/fight-of-cities-2d"> Lien pour tester le projet </a>
          <p> Création d'un jeu vidéo avec 3 amis à partir d'un jeu de plateau créé au collège. Etant le seul programmeur, mon rôle est de réaliser le prototype sur Godot et en GDScript(qui est le langage utilisé sur Godot). Pour le moment, on peut faire apparaître des unités, les faire bouger, attaquer et utiliser leurs capacités passives et actives.</p>
          <p>Update septembre 2025 : Le jeu a eu de grosses améliorations notamment sur la structure du code et l'ajout de campagnes jouables avec des récompenses entre chaque niveau. Tout est trouvable dans ce <a href="https://atio3f.itch.io/fight-of-cities-2d/devlog/1045457/major-alpha-version-a-lot-of-logic-sprites-resizing">devlog</a>.</p>
          <br>
          <div class="groupeImages"><img class="imageG" src="img/projets/FoC/FoCAttaque.png"><img class="imageG" src="img/projets/FoC/FoCApercuUnite.png"><img class="imageG" src="img/projets/FoC/FoCDiagrammeDeClasse.png"></div>
          
       
        `},
    "NUTRISCORE" : {
      "short_desc": "Traitement statistique avancé sur datasets OpenData. Nettoyage de données (ETL) et visualisation analytique",
      "html": `
        <h2 id="TitreProjet">Etude du nutriscore pour les produits à base de volailles françaises  - avr 2024</h2>
        <div id="langagesUtilises">
                <div class="langage">
                  <img src="img/PostgreSQLogo.png" alt="PostgreSQL Logo">
                  <div class="overlay-text">PostgreSQL</div>
                </div>
                <div class="langage">
                  <img src="img/RLogo.png" alt="R Logo">
                  <div class="overlay-text">R</div>
                </div>
                <div class="langage">
                <img src="img/DataAnalysisLogo.png" alt="Data Analyse Logo">
                <div class="overlay-text">Analyse données</div>
                </div>
                
                
          </div>
          <p>Notre objectif était d'étudier comment est évalué le nutriscore des produits à base de volailles françaises à partir des données open source d'OpenFoodFacts sur une BDD PostgreSQl. 
           Pour cela, il nous a fallu tout d'abord faire du tri dans les données obtenues à partir d'OpenFoodFacts pour retirer
           toutes les données qui ne contenaient pas de volailles ou dont l'origine n'est pas française(tout en incluant les îles françaises) avec. Ensuite, nous avons exporté en csv les données restantes pour éliminer 
           les données aberrantes en les examinant sur Rstudio avec des graphiques. 
           Pour finir, nous avons utilisé R pour réaliser notre analyse des valeurs ayant une corrélation probable avec le score nutriscore par chaque produit.</p>
           <br>
           <p>Nos requêtes SQL : </p> 
           <p>Notre compte-rendu final en anglais : </p> <iframe src="img/projets/Nutriscore/team_e08-gibellog-fermathi.pdf"></iframe>

           
        `},
    "SITE_FICTIF_CGI" : {
      "short_desc": "Pas fait",
      "html":`
        <h2 id="TitreProjet">Site web fictif pour une ESN(CGI) - déc 2023</h2>
        <div id="langagesUtilises">
              <div class="langage">
                <img src="img/HTMLogo.png" alt="HTML Logo">
                <div class="overlay-text">HTML</div>
              </div>
              <div class="langage">
                <img src="img/CSSLogo.png" alt="CSS Logo">
                <div class="overlay-text">CSS</div>
              </div>
              <div class="langage">
                <img src="img/JavascriptLogo.png" alt="Javascript Logo">
                <div class="overlay-text">Javascript</div>
              </div>
                
                
          </div>
        <p> Le but de ce projet à 3 était de réaliser un site web fictif à destination de collégiens en recherche de stage pour leur présenter CGI en simplifiant ainsi leurs activités en tant qu'ESN</p>
        <div class="groupeImages"><img class="imageG" src="img/projets/CGI/CGIPageAccueil.png"><img class="imageG" src="img/projets/CGI/CGIPageService.png"><img class="imageG" src="img/projets/CGI/CGIPageValeurs.png"></div>
        <a class="firstLink" href="https://github.com/IUT-INFO-UGA/IUT-INFO-UGA.github.io">Lien vers le code source sur Github</a>
        `},
      "SAE1.03" : {
        "short_desc": "Pas fait",
        "html": `
        <h2 id="TitreProjet">Installation d'une machine virtuelle. Projet réalisé en sept 2023</h2>
        <div id="langagesUtilises">
              <div class="langage">
                <img src="img/ShellLogo.png" alt="Shell LINUX Logo">
                <div class="overlay-text">Shell LINUX</div>
              </div>
                
         
          </div>
          <p> Le but de ce projet était, en 4 jours, d'installer tout seul une machine virtuelle LINUX et de la configurer puis de réaliser une carte mentale des étapes à suivre.</p>
          <!-- <p>Carte mentale réalisée : <p> ->
        `},
    "UBILINK_TESTS" : {
      "short_desc": "Conception d'une infrastructure de tests E2E critique pour un moteur 3D web. Innovation technique via Playwright.",
      "html": `
      <h2 id="TitreProjet">Plateforme de tests d'interface automatisée et site pour enregistrer des tests. Stage d'avril à juin 2025.</h2>
      <div id="langagesUtilises">
            <div class="langage">
              <img src="img/CSSLogo.png" alt="CSS Logo">
              <div class="overlay-text">CSS</div>
            </div>
            <div class="langage">
              <img src="img/BootstrapLogo.svg" alt="Bootstrap Logo">
              <div class="overlay-text">Bootstrap</div>
            </div>
            <div class="langage">
              <img src="img/JavascriptLogo.png" alt="Javascript Logo">
              <div class="overlay-text">Javascript</div>
            </div>
            <div class="langage">
              <img src="img/PlaywrightLogo.svg" alt="Playwright Logo">
              <div class="overlay-text">Playwright</div>
            </div>
            <div class="langage">
              <img src="img/PHPLogo.png" alt="PHP Logo">
              <div class="overlay-text">PHP</div>
            </div>
        </div>
        <p> Ce projet s'est déroulé durant mon stage chez Ubilink du 14 avril au 20 juin 2025. La mission était la réalisation d'une plateforme de test automatisée sur leur application web afin de régler les problèmes récurrents de régression de fonctionnalités sur la partie 3D de l'application.<br>
          N'ayant aucune base existante sur les tests, j'ai dû réaliser un benchmark des différentes librairies de tests disponibles et effectuer des tests pour m'assurer de pouvoir manipuler les éléments de la scène 3D avec, car il n'y a presque aucune source de test d'interface sur des applications 3D faites avec Three js et que les éléments 3D sont tous contenus dans un canvas et donc inacessibles depuis le DOM HTML.<br>
          J'ai finalement choisi Playwright pour réaliser le prototype afin de voir les limites de ce qui était testable de manière fiable, sans faux positif ou négatif.<br>
          Après cela, j'ai démarré la réalisation d'un site web avec un tableau avec tous les tests et leurs résultats d'exécution ainsi qu'un . Ce site m'a permis d'apprendre Bootstrap et l'utilisation d'iframe, qui servait à afficher l'application et récupérer les informations sur l'enregistrement pour les envoyer en base de données avant d'être exécutés avec Playwright.<br>
          J'ai ensuite peaufiné mon code Playwright pour permettre de réaliser des 
          Durant mon stage, j'ai rencontré plusieurs problèmes notamment avec l'iframe pour l'enregistrement des actions car mon site n'était pas situé sur le même domaine que l'application. Pour remédier à ça, nous avons utilisé un système de messages avec PostMessage, l'application m'envoie ainsi des messages sur les touches pressés par l'utilisateur, les délais entre les actions, certains checks comme le moment où on rentre sur la scène 3D mais aussi les captures d'écran de la scène 3D sous chaîne de caractères afin d'effectuer des comparaisons durant les exécutions. 
          Pour conclure, ce stage m'a permis de découvrir un environnement de travail professionnel, acquérir des bases de concept de programmation 3D et la structure de la 3D en web, d'apprendre Playwright pour les tests utilisateurs et Bootstrap pour la forme de mes sites et aussi d'avoir un aperçu sur le travail demandé aux développeurs testeurs.
          </p>
          <iframe src="https://www.youtube.com/embed/KXIpAiuivSw">Présentation de la partie exécution des tests</iframe>
      `},//Mise en place d'une plateforme de tests d'interface utilisateur automatisée pour une application web 3D et réalisation d'une application web pour permettre d'enregistrer des tests d'interface utilisateur. Stage du 14 avril au 20 juin 2025
    "232_APP" : {
      "short_desc": "",
      "html": `
      
      <h2 id="TitreProjet">GestFourmi : SaaS de Pilotage de Projets Universitaires - sept 2025 - mars 2026</h2>
      <div id="langagesUtilises">
            <div class="langage">
              <img src="img/CSSLogo.png" alt="CSS Logo">
              <div class="overlay-text">CSS</div>
            </div>
            <div class="langage">
              <img src="img/TypescriptLogo.png" alt="Typescript Logo">
              <div class="overlay-text">Typescript</div>
            </div>
            <div class="langage">
              <img src="img/AngularLogo.png" alt="Angular Logo">
              <div class="overlay-text">Angular</div>
            </div>
            <div class="langage">
              <img src="img/PlaywrightLogo.svg" alt="Playwright Logo">
              <div class="overlay-text">Playwright</div>
            </div>
            <div class="langage">
              <img src="img/PrimeNGLogo.webp" alt="PrimeNG Logo">
              <div class="overlay-text">PrimeNG</div>
            </div>
        </div>
        <p>Conception et développement d'une application web métier destinée aux enseignants et élèves du département info de l'IUT2. Cette solution vise à centraliser l'intégralité du cycle de vie
          des projets étudiants, de la constitution des équipes à l'évaluation finale par les jurys et par ses pairs. Les élèves peuvent ainsi rentrer leurs documents et liens tout en indiquant leur salle pour demander de l'aide à un enseignant à partir d'un système de tickets et de messagerie.</p>
        <p>Mon rôle dans ce projet est de servir de référent technique pour la réalisation du frontend Angular avec PrimeNG et Bulma. Je m'occupe également de la réalisation de tests interfaces et d'appels d'API avec Playwright.
        Avec ces tests, je m'occupe de créer une pipeline gitlab capable de . De plus, j'ai pu participer au choix de la stratégie git (features), de la rédaction des besoins fonctionnels et de la répartition des tâches avec notre chef d'équipe (Jira).</p>
        <div class="groupeImages"><img class="imageG" src="img/projets/232App/pageRessources-Liens.png"></div>
          `},
    "MONCARNETDESTAGE" : {
      "short_desc": "Amélioration de l'application mobile Mon Carnet de Stage.",
      "html": `
      
      <h2 id="TitreProjet">SaaS de Pilotage de Projets Universitaires - févr 2025</h2>
      <div id="langagesUtilises">
            <div class="langage">
              <img src="img/JavaLogo.png" alt="Java Logo">
              <div class="overlay-text">Java</div>
            </div>
            <div class="langage">
              <img src="img/AndroidStudioLogo.png" alt="Android Studio Logo">
              <div class="overlay-text">Android Studio</div>
            </div>
        </div>
        <p> L'objectif est l'amélioration d'une application . Pour atteindre nos objectifs, nous avons défini les axes d'améliorations par rapport aux critères de Bastien Scapin :  l'exactitude (capacité fonctionnelle), la facilité d'analyse (maintenabilité), et la facilité d'exploitation (facilité d'usage).
        Concrètement la capacité fonctionnelle correspond à la correction des résultats erronés renvoyés par le backend. Tandis que la facilité d'usage revient à améliorer le guidage et l'ergonomie de l'application et à se tenir à une unique charte graphique et d'usage pour toutes les pages de l'application.
        Pour l'application mobile, l'ajout de documentation et commentaires permet de renforcer le cycle de vie de l'application et les tests servent à la maintenabilité future.
        </p>
        <p>Mon rôle dans ce projet en tant que chef de projet est la gestion du travail de chaque membre d'équipe et la répartition des tâches pour effectuer efficacement le travail.
          L'équipe était très compétente techniquement, me permettant de me concentrer sur l'amélioration de l'interface de l'application mobile et l'ajout de tests d'interfaces et unitaires en vérifiant régulièrement l'avancée de la partie application web et conteneurisation de la BDD.</p>
          `},
    "OVERGROWNKINGDOM" : {
      "short_desc": "Développement d'un jeu pour une jam",
      "html": `
      <h2 id="TitreProjet">Développement d'un jeu 2D pour une jam (B1tjam) - août 2025</h2>
    
      <div id="langagesUtilises">
            <div class="langage">
              <img src="img/GodotLogo.png" alt="Godot Logo">
              <div class="overlay-text">Godot</div>
            </div>
            <div class="langage">
              <img src="img/GitLogo.png" alt="Git Logo">
              <div class="overlay-text">Git</div>
            </div>
        </div>
      <a class="firstLink" href="https://github.com/Atio3f/OvergrownKingdom">Lien Github vers le projet</a> <a href="https://atio3f.itch.io/b1tjam2025"> Lien pour tester le projet en ligne ou télécharger la version mobile</a>
      <p> L'objectif de la B1tjam est de réaliser un jeu vidéo en 7 jours avec une limite de 2 couleurs à l'écran et le thème 'bloom' qu'on peut traduire par floraison. Nous sommes partis sur un jeu 2D avec un processus de jeu exploration -> checkpoint -> boss -> pouvoir semblable à un metroidvania avec des plusieurs passages dans la même zone avec différentes capacités. 
      Overgrown Kingdom est l'histoire d'un bourgeon dans une forêt rongée par les ronces qui tente de fleurir malgré l'obscurité.
      </p>
      <p>Mon rôle dans ce projet est principalement le développement du système de progression, de checkpoints et l'animation de certains monstres. Je m'assure aussi de la gestion du git.
      J'ai conçu certains des sprites (champignon) ou des variantes du décor en plus de mes tâches de développeur. Par la suite, j'ai élaboré le système de sauvegarde et ajouté des joysticks et boutons pour la création d'une version mobile (téléchargeable sur itch.io).
      </p>
      <div class="groupeImages"><img class="imageG" src="img/projets/OvergrownKingdom/startPoint.png"><img class="imageG" src="img/projets/OvergrownKingdom/firstCheckpoint.png"><img class="imageG" src="img/projets/OvergrownKingdom/centralHub.png"></div>
        
        `},
    "API_FOOTBALL": {
      "short_desc": "Conception 'Design-First' d'une API standardisée pour le suivi des transferts du football européen via OpenAPI 3.0.",
      "html": `
          <h2 id="TitreProjet">API Rest : Mercato Européen</h2>
          <div id="langagesUtilises">
              <div class="langage"><img src="img/SwaggerLogo.png"><div class="overlay-text">OpenAPI 3.0</div></div>
              <div class="langage"><img src="img/ExpressLogo.svg"><div class="overlay-text">Express.js</div></div>
              <div class="langage"><img src="img/JavascriptLogo.png"><div class="overlay-text">JavaScript</div></div>
          </div>
          
          <p>L'objectif du projet était de pouvoir observer les transferts des joueurs durant les mercatos via une API REST robuste et entièrement documentée.
          L'API permet actuellement de voir les joueurs et détails de transferts pour chaque club.
          Pour réaliser ce projet, j'ai d'abord réalisé la spécification OpenAPI à la main sur Swagger avant de générer la structure du serveur sur Swagger et compléter la doc, le corps et les retours HTTP pour chaque route.</p>
          
          
          <p><strong>Méthodologie & Réalisations :</strong><br>
          - <strong>Approche API-First (Design-First) :</strong> Rédaction exhaustive de la spécification <strong>OpenAPI (Swagger)</strong> en amont du code. Définition stricte des contrats d'interface, des schémas de données (DTOs) et des codes de retour HTTP.<br>
          - <strong>Intégration Serveur :</strong> Développement du serveur backend avec le framework <strong>Express.js</strong>. Mise en place de la liaison technique entre la spécification YAML/JSON et les routes de l'API.<br>
          - <strong>Documentation Interactive :</strong> Déploiement de Swagger UI pour permettre la visualisation et le test des endpoints en temps réel par les développeurs tiers.</p>
      `
    },  
}


let projetsTags = {
    "TITANIC_BDD" : ["PostgreSQL", "DataAnalysis"],
    "CIRCUS_PLANNER" : ["Java", "JavaFX", "GestionProjet", "ApplicationBureautique"],
    "MONA" : ["HTML", "CSS", "Javascript", "React", "PHP", "PostgreSQL", "Gitlab", "GestionProjet", "ApplicationWeb"],
    "TRI_DEPECHES" : ["Java", "CreationPattern"],
    "FOC" : ["GDScript", "Jeu"],
    "OVERGROWNKINGDOM" : ["GDScript", "Jeu"],
    "NUTRISCORE" : ["PostgreSQL", "R", "NettoyageDonnées", "DataAnalysis"],
    "SITE_FICTIF_CGI" : ["HTML", "CSS", "Javascript", "Frontend"],
    "MONCARNETDESTAGE" : ["Android Studio", "Java", "Chef de projet", "Tests", "GestionProjet"],
    "UBILINK_TESTS" : ["HTML", "CSS", "Javascript", "PHP", "Frontend", "Tests", "Playwright", "Resemblejs", "ApplicationWeb", "API", "Git", "Benchmark", "Bootstrap"],
    "232": ["CSS", "Javascript", "Angular", "PrimeNG", "Frontend", "Tests", "Playwright", "API"]
}


function updateText(project) {
  updateOutput(project)
  // Place user on project desc, useful on mobile
  const elementCible = document.getElementById('outputProjet'); 
  
  if (elementCible) {
      elementCible.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
      });
  }
}


function updateOutput(project) {
  console.log(project)
  const projectContent = projets[project];
  const short_desc = document.getElementById('short_desc');// Contient l'html du projet à afficher
  const contentElement = document.getElementById('html_content');// Contient l'html du projet à afficher
  short_desc.innerHTML = "";   //On vide la description précedente
  contentElement.innerHTML = "";   //On vide le contenu qui était affiché
  const contenuProjet = document.createElement("div");
  //short_desc.innerHTML = projectContent["short_desc"] ?? ""; // Pas encore fait assez pour être utilisé
  contentElement.innerHTML = projectContent["html"] ?? "<p> Le projet n'a pas encore été ajouté au site !. </p>";
  /*fetch('img/projets/Nutriscore/team_e08-gibellog-fermathi.sql')
          .then(response => response.text())
          .then(data => {
              document.getElementById('sql-content').textContent = data;
          })
          .catch(error => console.error('Erreur de chargement du fichier SQL:', error));*/
}







//Servira lorsque le php arrêtera ses caprices
function baseValue(){
  //document.getElementById('Projets-list').value = "FoC" ;
  //console.log(document.getElementById('Projets-list').value);
  var param = new URLSearchParams(window.location.search);
  console.log(param.get("projet"));
  const projectUrl = param.get("projet") != null ? param.get("projet").toString() : "CIRCUS_PLANNER";
  updateOutput(projectUrl)
}





document.addEventListener("DOMContentLoaded", function() {
    baseValue();
});

window.onload = function() {
  baseValue();
};


//Permet l'affichage dynamique des projets réalisés en fonction du langage sélectionné
document.addEventListener("DOMContentLoaded", function() {
 
  const projetsSelect = [
    { nom: "CIRCUS_PLANNER", text: "Création d'une application en Java" },
    { nom: "UBILINK_TESTS", text: "Mise en place d'une plateforme de tests automatisée"},
    { nom: "TRI_DEPECHES", text: "Trieur de dépêches Java" },
    { nom: "MONA", text: "Application web React promotion du patrimoine fr" },
    { nom: "SITE_FICTIF_CGI", text: "Création d'un site web" },
    { nom: "TITANIC_BDD", text: "Création d'une Base de Données" },
    { nom: "NUTRISCORE", text: "Exploitation d'une Base de Données" },
    { nom: "FOC", text: "Développement d'un jeu vidéo de stratégie en 2D sur Godot" },
    { nom: "SAE1.03", text: "Installation d'une machine virtuelle" }
  ];

  /*
  IF WE NEED ONE DAY TO MAKE AN API WITH THE PROJECTS
    // Select
    const selectElement = document.getElementById("project-cards");

    // Fonction pour ajouter dynamiquement les options - A REFAIRE EN CAS D'API
    function populateSelect(langage="") {
      projetsSelect.forEach((select, index) => {
          if(langage=="" | (projetsTags[select.nom] && projetsTags[select.nom].includes(langage))){
            let option = document.createElement("option");
            option.value = select.nom;
            option.textContent = select.text;
            if (index === 0) {
              option.selected = true;
            }
            selectElement.appendChild(option);
          }
      });
    }
    // Appel de la fonction pour peupler la liste déroulante
    populateSelect();
  */
});
