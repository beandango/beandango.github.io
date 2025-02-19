class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
          <div class="box">
          <h1>Latest News!</h1>
            <div class="inner">
              <h2>Debut announcement soon! But first... </h2>
              <p>"One Trick Pony" out now on all major streaming platforms!
              </p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/33UaiPcuNi8?si=Vd-NRXOk9554dDVz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <br> 
              <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6rBy8i2Tjiwjo3W51tk8hN?utm_source=generator&theme=0" width="50%" height="200" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
            
            </div>
          </div>
        `;
    }
  }
  
  customElements.define('news-component', News);
  