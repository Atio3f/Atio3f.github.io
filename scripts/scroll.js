//Les 2 lignes seront implémentées si on garde l'effet sur les mots
const target = document.querySelector('#split');
let selection = Splitting({ target: target, by: 'words' });

const target2 = document.querySelector('#split2');
let selection2 = Splitting({ target: target2, by: 'words' });


document.addEventListener("DOMContentLoaded", (event) => {
    if (window.outerWidth >= 800 && window.outerHeight >= 1000) {
        gsap.registerPlugin(ScrollTrigger)
        /*gsap.from('.encadreLangage', {
            scrollTrigger: {trigger : '.container', 
            
            end : "top 100px",
            scrub : 2
        },
        x: -200,
        duration : 2
        });*/
        gsap.from('.g', {
            scrollTrigger: {trigger : '.container', 
            start : "top center",
            end : "top 45%",        //800px avant
            scrub : 2
        },
        xPercent: -200,
        ease : "none",
        duration : 1,
        stagger : 0.05
        });
        gsap.from('.m', {
            scrollTrigger: {trigger : '.container',
            start : "top center",
            end : "top 20%",    //200px avant
            scrub : 2
        },
        yPercent: 150,
        opacity : 0,
        ease: "elastic.out(0.1,0.75)",
        duration : 4,
        stagger : 1
        });
        gsap.from('.d', {
            scrollTrigger: {trigger : '.container',
            start : "top center",
            end : "top 45%",
            scrub : 2,
            //markers : true
        },
        xPercent: 200,
        ease : "none",
        duration : 1,
        stagger : 0.05
        });

        
        //Affichage du titre de la partie correspondante
        gsap.from(selection[0].words, {
            color : "black",
            y : 100,
            scaleY : 0.2,
            opacity : 0,
            stagger : 0.2,
            scrollTrigger: {
                trigger : ".container",
                start : "top 90%",
                end : "bottom 900px",
                //markers : true,
                scrub : 2,
            }
        });

        //Scroll pour la box du milieu de la partie en cours d'apprentissage 
        gsap.from('.m2', {
            scrollTrigger: {trigger : '.container', 
            start : "bottom 820px",
            end : "bottom 450px",
            //markers : true,
            scrub : 3
        },
        yPercent: 200,
        opacity : 0,
        ease: "elastic.out(0.5,0.75)",
        duration : 8
        });
        //Affichage du titre de la partie correspondante
        gsap.from(selection2[0].words, {
            color : "black",
            y : 100,
            scaleY : 0.2,
            opacity : 0,
            stagger : 0.2,
            scrollTrigger: {
                trigger : ".container",
                start : "bottom 1000px",
                end : "bottom 700px",
                //markers : true,
                scrub : 2,
            }
        });
        //Scroll pour la box de gauche de la partie des langues
        gsap.from('.g3', {
            scrollTrigger: {trigger : '.LangageCadre3', 
            start : "top 700px",
            end : "top 200px",
            //markers : true,
        },
        yPercent: 80,
        opacity : 20,
        ease: "none",
        duration : 0.6
        });
        //Scroll pour la box de droite de la partie des langues
        gsap.from('.d3', {
            scrollTrigger: {trigger : '.LangageCadre3', 
            start : "top 700px",
            end : "top 200px",
        },
        yPercent: 80,
        opacity : 20,
        ease: "none",
        duration : 0.6
        });
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis();

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
        lenis.raf(time * 800); // Convert time from seconds to milliseconds
        });
        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        //gsap.ticker.lagSmoothing(0);
    }
});

