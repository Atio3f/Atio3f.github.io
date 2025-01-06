let passionsVideos = {
    "JeuxVideos" : ["crosscode-moewalls-com.mp4"]
}




function playVideo(passion){
    const selectElement = document.getElementById('fondVideo');
    selectElement.querySelector('source').setAttribute('src', 'img/videos/' + passionsVideos[passion][0]);
    selectElement.load();
}

document.getElementById('JeuxVideos').addEventListener('click', () => {
    playVideo('JeuxVideos');
  });