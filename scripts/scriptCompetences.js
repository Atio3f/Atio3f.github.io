//Permet de changer la barre remplie de la barre de progression
function calculProgress(barre, pourcentageCompletion) {
    barre.style.width = (pourcentageCompletion)+ '%';
}


//Aide de ChatGPT
// Exécuter la fonction sur toutes les barres après le chargement de la page
window.onload = function() {
    // On sélectionne toutes les div avec la classe `barreProgressRemplie`
    const barres = document.querySelectorAll('.barreProgressRemplie');
    
    // On utilise la fonction calculProgress pour chaque barre
    barres.forEach((barre) => {
            
        
        calculProgress(barre, barre.getAttribute('pourcentage'));
    });
};