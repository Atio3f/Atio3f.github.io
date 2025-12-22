class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
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
    `;
  }
}

customElements.define('custom-footer', Footer);
