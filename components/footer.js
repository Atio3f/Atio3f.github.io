class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
    this.setupContactForm();
  }

  render() {
    this.shadow.innerHTML = `
    <link rel="stylesheet"  href="../styles/style.css" media="screen" />
      <hr>
      <div id="Footer-Global">
        <div id="Footer-Mail">
          <p>mathias.fernandes<wbr>@etu.univ-grenoble-alpes.fr</p>
        </div>
        <div id="Footer-Content">
          <p>Mes réseaux : </p>
            <div class="reseaux">
              <a href="https://github.com/Atio3f" target="_blank" rel="noopener noreferrer">
                <img src="img/github-mark-white.png" alt="Lien github">
              </a>
            <a href="https://www.linkedin.com/in/mathias-fernandes" target="_blank" rel="noopener noreferrer">
              <img src="img/iconLinkedin.png" alt="Lien Linkedin">
            </a>
            </div>
          
        </div>
      </div>
      
      <div id="ContactPart">
        <h2>Me contacter</h2>
        
        <form id="contact-form">
          <div class="form-group">
            <input type="text" name="name" id="name" required placeholder="Votre nom">
          </div>

          <div class="form-group">
            <input type="email" name="email" id="email" required placeholder="Votre email">
          </div>

          <div class="form-group">
            <textarea name="message" id="message" required placeholder="Votre Message"></textarea>
          </div>

          <p id="feedback-msg"></p>
          <div class="form-group">
            <button type="submit" id="btn-submit">
              <span id="btn-text">Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    `;
  }

  /* 
    Manage contact form in js because I'm too lazy to leave github hosting
    Use Emailjs
  */
  setupContactForm() {
    if (typeof emailjs !== 'undefined') {
       emailjs.init("FFe2Wb3C9KYIHuP8S");
    } else {
       console.error("EmailJS n'est pas chargé dans le index.html !");
       return;
    }

    // 2. Gestion de l'envoi
    const btn = this.shadowRoot.getElementById('btn-submit');
    const feedback = this.shadowRoot.getElementById('feedback-msg');

    this.shadowRoot.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Empêche la page de se recharger
      btn.disabled = true; // Avoid double clic
      feedback.innerText = '';
      feedback.className = '';

      const serviceID = 'service_5bjeqvm';
      const templateID = 'template_rer4i6a';
      
      //Scroll to feedback section
      feedback.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
      }); 

      // Envoi du formulaire
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.disabled = false;
          feedback.innerText = "Le message a bien pu être envoyé, vous devriez recevoir une confirmation d'ici peu.";

          this.shadowRoot.getElementById('contact-form').reset();
        }, (err) => {
          
          btn.disabled = false;
          
          if (err.status === 412) {
              feedback.innerText = "Limite mensuelle atteinte. Vous pouvez m'écrire un mail en cas de besoin.";
          } else {
              feedback.innerText = "Une erreur est survenue. Veuillez réessayer.";
          }
        });
    });
  }
}


customElements.define('custom-footer', Footer);
