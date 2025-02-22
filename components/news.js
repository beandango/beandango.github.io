class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <div class="box">
          <h1>Latest News!</h1>
            <div class="inner">
              <h2>Debut On March 8, 2025!!!</h2>
              <p>
                Cherry and I will be debuting our new group BIZARRE RENAISSANCE on March 8th! <br><br>
                <b>Featuring: </b> <br><br>
                1 new original song <br>
                2 new covers <br>
                3 new interactive websites with fun secrets and lore <b>(You can reach all of them by clicking the cute stamps at the top of the sidebar!)</b>  <br><br>
                More info to come in the coming days!
              </p>
            
            </div>
          </div>
        `;
    }
  }
  
  customElements.define('news-component', News);
  