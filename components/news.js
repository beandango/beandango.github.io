class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <div class="box">
          <h1>Latest News!</h1>
            <div class="inner">
              <iframe src="https://violet-yew-0ab.notion.site/ebd//1a5edb622704806eba3beeaea25dd9dd" width="100%" height="500px"  />
            </div>
          </div>
        `;
    }
  }
  
  customElements.define('news-component', News);
  