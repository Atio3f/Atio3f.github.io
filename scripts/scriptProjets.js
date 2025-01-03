let projets = {
    "TITANIC_BDD" : `
        <h2 id="TitreProjet">Analyse du naufrage du Titanic --> décembre 2023</h2>
              
            <div id="langagesUtilises">
              <h4> Langages utilisées : </h4> 
            
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
        `,
    "CIRCUS_PLANNER" : `
        <h2 id="TitreProjet">Application lourde pour la gestion des cirques --> mars 2024</h2>
        <div id="langagesUtilises">
            <h4> Langages utilisées : </h4> 
          
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
        <p>Ce projet, en groupe de 5, portait sur la création d'une application pour aider les gérants de cirques à organiser leurs futurs évènements.
        Nous avons utilisé JavaFX et CSS pour réaliser l'interface et Java pour faire le modèle de données.</p>
        <img class="imgPasNette" src="img/projets/CIRCUSPLANNER/CIRCUSPLANNERdiagrammeClasse.svg" alt="Image 1 du rendu final">
        <br>
        <a href="https://github.com/Thomas-381/CircusPlanner">Lien vers le code source sur Github</a>
        `,
    "MONA" : `
        <h2 id="TitreProjet"> Application web d'évènements --> 11/2024-01/2025</h2>
        <div id="langagesUtilises">
              <h4> Langages utilisées : </h4> 
              <div class="langage">
                <img src="img/CSSLogo.png" alt="CSS Logo">
                <div class="overlay-text">CSS</div>
              </div>
              <div class="langage">
                <img src="img/JavascriptLogo.png" alt="Javascript Logo">
                <div class="overlay-text">Javascript</div>
              </div>
              <div class="langage">
                <img src="img/TypescriptLogo.png" alt="Typescript Logo">
                <div class="overlay-text">Typescript</div>
              </div>
              <div class="langage">
                <img src="img/ReactLogo.png" alt="React Logo">
                <div class="overlay-text">React</div>
              </div>
              <div class="langage">
                <img src="img/PHPLogo.png" alt="PHP Logo">
                <div class="overlay-text">PHP</div>
              </div>
        </div>
        <p> Réalisation d'une application web, à 7, mettant en valeur le patrimoine français en mettant en relation des propriétaires de monuments avec des prestataires d'évènements
        afin d'organiser des activités exclusives redonnant vie à ces bâtiments historiques. Les visiteurs pourront prendre leurs places depuis notre billeterie.
        `,
    "TRI_DEPECHES" : `
        `,
    "FOC" : `
        <h2 id="TitreProjet"> Jeu 2d de stratégie tour par tour sur Godot --> 2024-...</h2>
          <div id="langagesUtilises">
                <h4> Langages utilisées : </h4> 
              
                <div class="langage">
                  <img src="img/GodotLogo.png" alt="Godot Logo">
                  <div class="overlay-text">Godot/Gdscript</div>
                </div>
                
                
          </div>
          <p> Création d'un jeu vidéo avec 3 amis à partir d'un jeu de plateau créé au collège. Etant le seul programmeur, mon rôle est de réaliser le prototype sur Godot et en GDScript(qui est le langage utilisé sur Godot). Pour le moment, on peut faire apparaître des unités, les faire bouger, attaquer et utiliser leurs capacités passives et actives.</p>
          <br>
          <div class="groupeImages"><img class="imageG" src="img/projets/FoC/FocAttaque.png"><img class="imageG" src="img/projets/FoC/FocApercuUnite.png"><img class="imageG" src="img/projets/FoC/FoCDiagrammeDeClasse.png"></div>
          <a href="https://github.com/Atio3f/FightOfCities2D">Lien Github vers le projet</a> <a href="https://atio3f.itch.io/fight-of-cities-2d"> Lien pour tester le projet </a>
       
        `,
    "NUTRISCORE" : `
        <h2 id="TitreProjet">Analyse du naufrage du Titanic --> avril 2024</h2>
        `,
    "SITE_FICTIF_CGI" : `
        <h2 id="TitreProjet">Site web fictif pour une ESN(CGI) --> décembre 2023</h2>
        <p> Le but de ce projet à 3 était de réaliser un site web fictif à destination de collégiens en recherche de stage pour leur présenter CGI en simplifiant ainsi leurs activités en tant qu'ESN</p>

        `

}


let projetsTags = {
    "TITANIC_BDD" : ["PostgreSQL", "DataAnalysis"],
    "CIRCUS_PLANNER" : ["Java", "JavaFX", "GestionProjet", "ApplicationBureautique"],
    "MONA" : ["HTML", "CSS", "Javascript", "React", "PHP", "PostgreSQL", "GestionProjet", "ApplicationWeb"],
    "TRI_DEPECHES" : ["Java", "CreationPattern"],
    "FOC" : ["GDScript", "Jeu"],
    "NUTRISCORE" : ["PostgreSQL", "R", "NettoyageDonnées", "DataAnalysis"],
    "SITE_FICTIF_CGI" : ["HTML", "CSS", "Javascript", "Frontend"]
}


function updateText() {
    const selectElement = document.getElementById('Projets-list');
    const outputElement = document.getElementById('outputProjet');
    outputElement.innerHTML = "";   //On vide le contenu qui était affiché
    const contenuProjet = document.createElement("div");
    contenuProjet.innerHTML = projets[selectElement.value] ?? "<p> Le projet n'a pas encore été ajouté au site !. </p>";
    outputElement.appendChild(contenuProjet);

}









//Servira lorsque le php arrêtera ses caprices
function baseValue(){
  //document.getElementById('Projets-list').value = "FoC" ;
  //console.log(document.getElementById('Projets-list').value);
  document.getElementById('Projets-list').value = "CIRCUS_PLANNER";

}





document.addEventListener("DOMContentLoaded", function() {
    baseValue();
    updateText();
});

window.onload = function() {
  baseValue();
  updateText();
};
