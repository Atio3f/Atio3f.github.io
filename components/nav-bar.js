class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
        <link rel="stylesheet"  href="../styles/style.css" media="screen" />
      <nav class="navbar">
        <ul class="nav-links">
            <li id="/"><a href="index.html">Accueil</a></li>
            <li id="/projets"><a href="projets.html">Projets</a></li>
        </ul>
      </nav>
    `;
  }

  connectedCallback() {
      this.highlightCurrentPage();
    }

  highlightCurrentPage() {
    let path = window.location.pathname;

    // Simplifie le chemin (enlève les répertoires)
    let currentPage = path.split('/').pop();

    // Si on est sur la racine "/" => considère que c’est "index.html"
    if (currentPage === '' || currentPage === '/') {
      currentPage = 'index.html';
    }
    console.log(currentPage)
    switch (currentPage) {
      case '' : 
        this.shadowRoot.getElementById('/').classList.add('pageActive');
        break;
      case 'index.html' : 
        this.shadowRoot.getElementById('/').classList.add('pageActive');
        break;
      /*case 'parcours.html' : 
        this.shadowRoot.getElementById('/parcours').classList.add('pageActive');
        break;*/
      case 'projets.html' :
        this.shadowRoot.getElementById('/projets').classList.add('pageActive');
        break;
    }
  }
}

customElements.define('nav-bar', NavBar);
