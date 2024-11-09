<?php
if (isset($_GET['projet'])) {
  // Récupère la valeur de l'input 'temp_in'
  $projet = $_GET['projet'];
  
}else {
  $projet = "";
  
}

?>

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Portfolio Projets</title>
    <link rel="stylesheet" href="styles/style.css" media="screen" />
    <script src="styles/script.js"></script>
  </head>

  <body>
    
    <main class="Projets">
      <div id="Projets-NomAccueil">
     
          <p class="Menu"><a href="PortFolioAccueil.html">Mathias FERNANDES</a></p>
        
      </div>
      
      <section id="Projets-Titre">
        <h1>PROJETS</h1>
      </section>
      

      <div id="Projets-listProjets">
        <form method="GET">
        <label for="Projets-list">Projets:</label> 
        <select name="Projets" id="Projets-list"  onchange="updateText()"> 
            <option value="SAE1.01/02" <?php if ($projet == "SAE1.01/02") echo 'selected'; ?>>Trieur de dépêches Java</option>   
            <option value="MEGASAE" <?php if ($projet == "MEGASAE") echo 'selected'; ?>>Création d'une application en Java</option>
            <option value="SAE1.03" <?php if ($projet == "SAE1.03") echo 'selected'; ?>>Installation d'une machine virtuelle</option> 
            <option value="SAE1.05/06" <?php if ($projet == "SAE1.05/06") echo 'selected'; ?>>Création d'un site web</option>
            <option value="SAE1.04" <?php if ($projet == "SAE1.04") echo 'selected'; ?>>Création d'une Base de Données</option> 
            <option value="SAE2.04" <?php if ($projet == "SAE2.04") echo 'selected'; ?>>Exploitation d'une Base de Données</option>
        </select>
        </form>
        <div class="output" id="outputProjet">Description Projet sélectionné</div>
        <div id="Projets-bonus">
          <h2>Projet/Lien:</h2>
          <a href="" id="SAE1_03">LIEN CARTE MENTALE</a>
          <a href="https://iut-info-uga.github.io/" id="SAE1_05_06">LIEN SITE</a>
        </div>
      </div>
      
    </main>
    <footer>
      <hr>
      <div id="Footer-Global">
        <div id="Footer-Mail">
          <p>mathias.fernandes@etu.univ-grenoble-alpes.fr</p>
        </div>
        <div id="Footer-Content">
          <p>Mes réseaux : </p>
          <a href="https://www.linkedin.com/in/mathias-fernandes" target="_blank" rel="noopener noreferrer">
            <div id="RESEAUX">
              <img src="styles/iconLinkedin.png" alt="Lien Linkedin">
            </div></a>
          
          <a href="https://github.com/Atio3f" target="_blank" rel="noopener noreferrer">
            <div id="RESEAUX">
              
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Lien github">
            </div></a>
        </div>
      </div>
    </footer>
  </body>
</html>
