//PIXI JS Fond étoilé 
(async () =>
    {
        
        const colors = [
            255, 200, 210, // light pink
            200, 240, 255, // Blue
            255, 248, 231,// Cosmic Latte Star (White) https://www.shutterstock.com/fr/blog/le-code-couleur-de-univers?dd_referrer=https%3A%2F%2Fwww.google.com%2F
            255, 219, 205, // Sun color (Ecart doublé avec 255 ex : 237 devient 219)
            163, 207, 207,
            255, 130, 255, // Violet
            230, 100, 100 // Orange
            
        ]
        // Create a new application
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundAlpha: 0.5,  // Rendre le fond transparent
        });
    
        // Initialize the application
        await app.init({ resizeTo: window});
        // Append the application canvas to the document body
        document.body.appendChild(app.canvas);
    
        // Load the star texture
        const starTexture = await PIXI.Assets.load('https://pixijs.com/assets/star.png');
    
        const starAmount = (window.innerWidth  + window.innerHeight) / 2.8 + 15;
        let cameraZ = 0;
        const fov = 20;
        const baseSpeed = 0.025;    //Petite valeur comme 0.025 pour faire bouger les étoiles
        let speed = 0;
        //let warpSpeed = 0;
        const starStretch = 1;  //Allonge les étoiles
        const starBaseSize = 0.05;
    
        // Create the stars
        const stars = [];
    
        for (let i = 0; i < starAmount; i++)
        {
            const star = {
                sprite: new PIXI.Sprite(starTexture),
                z: 0,
                x: 0,
                y: 0,
                red: 255,
                green: 255,
                blue: 255,
                scaleFactor: 1, // Used to scale up stars on hover
                glowingEffect: 0 // Used on hover anim, 0 -> default = white, 1 -> hover = max glowing
            };
    
            star.sprite.anchor.x = 0.5;
            star.sprite.anchor.y = 0.7;
            randomizeStar(star, true);
            animateStar(star);
            app.stage.addChild(star.sprite);
            stars.push(star);
        }
    
        function randomizeStar(star, initial)
        {
            star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
    
            // Calculate star positions with radial random coordinate so no star hits the camera.
            const deg = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 1;
    
            star.x = Math.cos(deg) * distance;
            star.y = Math.sin(deg) * distance;


            // Randomize color on hover for each star
            const random = Math.floor(Math.random() * colors.length / 3); // Get random color row
            star.red = colors.at(3 * random) ?? 255;
            star.green = colors.at(3 * random + 1) ?? 255;
            star.blue = colors.at(3 * random + 2) ?? 255;
        }
    
        // Change flight speed every 5 seconds 
        /*setInterval(() =>
        {
            warpSpeed = warpSpeed > 0 ? 0 : 1;
        }, 5000);*/
        
        
        // Listen for animate update
        app.ticker.add((time) =>
        {
            // Simple easing. This should be changed to proper easing function when used for real. Sert à rien sans changement de vitesse
            //speed += (warpSpeed - speed) / 20;
            cameraZ += time.deltaTime * 10 * (speed + baseSpeed);
            for (let i = 0; i < starAmount; i++)
            {
                const star = stars[i];
    
                if (star.z < cameraZ) randomizeStar(star);
    
                // Change color depending of glowing value
                star.glowingEffect -= 0.003;
                if (star.glowingEffect < 0.01) star.glowingEffect = 0;
                const red = Math.floor(255 + (star.red - 255) * star.glowingEffect);
                const green = Math.floor(255 + (star.green - 255) * star.glowingEffect);
                const blue = Math.floor(255 + (star.blue - 255) * star.glowingEffect);
                star.sprite.tint = (red << 16) + (green << 8) + blue; // Manage star color by generating a hexa color

                // Map star 3d position to 2d with really simple projection
                const z = star.z - cameraZ;
    
                star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
                star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

                // Calculate star scale & rotation.
                const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
                const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
                const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const distanceScale = Math.max(0, (2000 - z) / 2000);
    
                star.scaleFactor += (1 - star.scaleFactor) * 0.005;
                star.sprite.scale.x = distanceScale * starBaseSize * star.scaleFactor;
                // Star is looking towards center so that y axis is towards center.
                // Scale the star depending on how fast we are moving, what the stretchfactor is
                // and depending on how far away it is from the center.
                star.sprite.scale.y
                    = distanceScale * starBaseSize
                    + (distanceScale * speed * starStretch * distanceCenter) / app.renderer.screen.width;
                star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
            }
        });
        window.addEventListener('resize', () => {
            app.renderer.resize(window.innerWidth, window.innerHeight);
        });

    })();

    // Change la couleur de l'étoile lorsque le curseur passe à côté
    function animateStar(star) {
        star.sprite.eventMode = 'static';
        star.sprite.hitArea = new PIXI.Circle(0, 0, 500);
        star.sprite.on('pointerover', () => {
            star.glowingEffect = 1;
            star.scaleFactor = 1.2;
        });
    }

//Permet de cacher tous les éléments qui ne doivent pas être affichés au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    //On prend les containers cachés avec hidden
    const containers = document.querySelectorAll('.hidden');
    
    containers.forEach(container => {
    container.classList.remove('hidden');
    });
});


function goToProject(projectName){
    window.location.href = `projets.html?projet=${encodeURIComponent(projectName)}`;
}
window.goToProject = goToProject;
