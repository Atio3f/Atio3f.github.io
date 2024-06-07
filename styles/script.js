const val = {
    "MEGASAE" : `
    DESCRIPTIF SAE :
   	 Mise en place d'un projet pour la réalisation d'une application permettant la gestion d'évènements pour les cirques.

    MON TRAVAIL:
     EN EQUIPE :
      Réalisation de diagrammes de classe pour relier les éléments qui composeront notre système,
      réalisation de personas pour implémenter, création d'un diagramme de cas d'utilisation pour évaluer les attendus
      à réaliser lors de la phase de développement.
     INDIVIDUELLEMENT : 
      Réalisation d'un processus de gestion du projet et participation à la création de l'interface de l'application sur JavaFX(pas encore fini du coup).

    COMPÉTENCES ACQUISES :
      Déroulé d'un projet avec une phase d'avant-projet pour préciser les attendus, recherche du profil de la clientèle attendue,
      capacité à concevoir des diagrammes de classe en amont du développement, développement d'une application sur Java avec JavaFX.`

    ,"SAE1.01/02" :`
    DESCRIPTIF SAE : 
      Création en binôme d'un programme java pour réaliser des dictionnaires
      afin de trouver la catégorie d'un article à partir de 500 articles différents.
    
    MON TRAVAIL :
      Création d'une fonction pour permettre la récupération des dépĉhes depuis un fichier txt
      puis des fonctions pour permettre l'analyse des mots utilisés dans chaque dépêche
      en fonction de leur catégorie pour faire des dictionnaires
      puis réalisation des fonctions pour tester nos trieurs sur d'autres dépêches pour vérifier l'efficacité.

    COMPÉTENCES : 
      Exploitation et création d'un fichier texte avec java, réalisation d'un projet java complexe en binôme.`
    
    ,"SAE1.03" : `
    DESCRIPTIF SAE :
      Mise en place d'une machine virtuelle sur Linux avec Debian12 puis création une carte mentale sur les étapes de l'installation.
    
    MON TRAVAIL :
      C'était un travail individuel j'ai donc commencé par installer Debian puis je l'ai configuré avant d'y mettre tous les logiciels
      textuels(packages) importants dont gedit.

    COMPÉTENCES :
      Capacité à installer une machine virtuelle et des logiciels dessus sur LINUX, création d'une carte mentale pour synthétiser ce processus.`
    ,"SAE1.05/06" : `
    DESCRIPTIF SAE :
   	  Création d'un site web fictif pour une entreprise à destination des élèves de 3ème en recherche de stage.

    MON TRAVAIL:
   	 EN EQUIPE : 
      Recherche d'informations sur l'entreprise en question, rédaction d'un compte rendu et échanges 
		  avec les clients sur nos choix avant de finir par une présentation orale devant un jury.
   	 INDIVIDUELLEMENT : 
      Réalisation de l'une des pages du site(SERVICES) ainsi que sa maquette en accord avec le reste du site.

    COMPÉTENCES ACQUISES :
	    Se renseigner sur une entreprise, faire un recueil des besoins, réaliser un wireframe, créer un site internet en collaboration.`
    ,"SAE1.04" :`
    DESCRIPTIF SAE :
      Création d'une base de donnée SQL sur le Titanic afin d'arriver à des conclusions sur les 
      différents facteurs de survie pour ses passagers.

    MON TRAVAIL :
      Rédaction de comptes-rendus, création d'un schéma entité association correspondant à la situation et utilisation de requêtes sql pour analyser les données.

    COMPÉTENCES ACQUISES	:
      Création d'un schéma entité-association, mise en place d'une base de données SQL à partir d'un schéma entité-association, capacité à exploiter des données.`
    ,"SAE2.04" :`
    DESCRIPTIF SAE :
      Tri d'une base de données de openfoodfacts sur SQL pour conserver les données des produits en France
      puis réalisation d'un rapport avec nos conclusions.

    MON TRAVAIL:
     EN EQUIPE :
      Trie des données pour retirer les données n'étant pas classé comme de la volaille sur Postgresql puis
      exportation des données sur R. Puis, réalisation de graphiques pour retirer les dernières données avec des valeurs aberrantes.
      Enfin, utilisation des graphiques précédents pour produire une conclusion sur les produits à base de volaille.
     INDIVIDUELLEMENT : 
      Trie des données pour retirer les données de produits localisés hors de la France sur Postgresql

    COMPÉTENCES ACQUISES :
      Trier une base de données, créer des vues et des tables temporaires sur PostgreSQL, exportation des données sur R,
	    manipulation et modélisation des données avec R.`

}

function updateText() {
    const selectElement = document.getElementById('Projets-list');
    const outputElement = document.getElementById('outputProjet');
    const selectedValue = selectElement.value;

    if(selectedValue){
        message2 = `${selectedValue} : \n <pre>${val[selectedValue]}</pre>`;
        let htmlMessage = message2.replace(/\n/, '<br>');
        outputElement.innerHTML = htmlMessage;
        if(selectedValue == "SAE1.03"){
          document.getElementById("SAE1_03").style.display = "inline-block"
        }else{
          document.getElementById("SAE1_03").style.display = "none"
        }
        if(selectedValue == "SAE1.05/06"){
          document.getElementById("SAE1_05_06").style.display = "inline-block"
          
        }else{
          document.getElementById("SAE1_05_06").style.display = "none"
        }
    }else{
        outputElement.textContent = `Sélectionnez le projet que vous voulez regarder au dessus.`
    }
    
    
    /*outputElement.textContent = "Le texte sera mis à jour ici.";*/
  }



/*Permet de mettre le texte de la SAE1.01/02 au chargement de la page*/
document.addEventListener("DOMContentLoaded", function(){
  const outputElement = document.getElementById('outputProjet');
  message2 = `${"SAE1.01/02"} : \n <pre>${val["SAE1.01/02"]}</pre>`;
  let htmlMessage = message2.replace(/\n/, '<br>');
  outputElement.innerHTML = htmlMessage;
})