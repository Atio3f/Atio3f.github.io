let passionsVideos = {
    "JeuxVideos" : [
        "crosscode-moewalls-com.mp4", //depuis https://moewalls.com/games/crosscode-live-wallpaper/
        "HollowKnightwallpaper-4K.mp4"//by OnePunchBob
    ]
}




function playVideo(passion){
    
    setTimeout(playAVideo('img/videos/' + passionsVideos[passion][1]), 5000);
    
    setTimeout(() => {
        playAVideo('img/videos/' + passionsVideos[passion][0]); // Appel récursif
    }, 5000);

    setTimeout(() => {
        playAVideo(''); // Appel récursif
    }, 10000);
}

document.getElementById('JeuxVideos').addEventListener('click', () => {
    playVideo('JeuxVideos');
  });


function playAVideo(lien){
    const selectElement = document.getElementById('fondVideo');
    selectElement.querySelector('source').setAttribute('src', lien);
    selectElement.load();
}