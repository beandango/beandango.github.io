class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <div class="box">
          <h1>Latest News!</h1>
            <div class="inner">
              <iframe width="100%" height="350px" src="https://e.notionhero.io/e1/p/b0f3d8c-7f3ef3017c0d2214747dba5d4feb560"></iframe>
            </div>
          </div>
        `;
    }
  }
  
  customElements.define('news-component', News);
  