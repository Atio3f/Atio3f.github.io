const val = {
    "MEGASAE" : `Gros Projet`
    ,"SAE1.01/02" :
    `DESCRIPTIF SAE: 
    Création en binôme d'un programme java pour réaliser des dictionnaires afin de trouver la catégorie d'un article à partir de 500articles différents.
    MON TRAVAIL :
    COMPETENCES : Exploitation et création d'un fichier texte avec java, réalisation d'un projet java complexe en binôme.`
    
    ,"SAE1.03" : `
    DESCRIPTIF SAE:
      Mise en place d'une machine virtuelle sur Linux avec Debian12 puis création une carte mentale sur les étapes de l'installation.
    MON TRAVAIL :
      C'était un travail individuel j'ai donc commencé par installer Debian puis je l'ai configuré avant d'y ajouter tous les logiciels textuels(packages) importants dont gedit`
    
    ,"SAE1.05/06" : ``
}

function updateText() {
    const selectElement = document.getElementById('Projets-list');
    const outputElement = document.getElementById('outputProjet');
    const selectedValue = selectElement.value;

    if(selectedValue){
        message2 = `${selectedValue} : \n <pre>${val[selectedValue]}</pre>`;
        let htmlMessage = message2.replace(/\n/, '<br>');
        outputElement.innerHTML = htmlMessage;
    }else{
        outputElement.textContent = `Sélectionnez le projet que vous voulez regarder au dessus.`
    }
    
    
    /*outputElement.textContent = "Le texte sera mis à jour ici.";*/
  }
