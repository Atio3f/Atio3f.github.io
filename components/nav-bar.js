class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
        <link rel="stylesheet"  href="../styles/style.css" media="screen" />
      <nav class="navbar">

        <div class="menu-toggle" onclick="toggleMenu()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul class="nav-links">
            <li class="pageActive"><a href="index.html">Accueil</a></li>
            <li><a href="PortFolioParcours.html">Parcours</a></li>
            <li><a href="PortFolioProjets.html">Projets</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
