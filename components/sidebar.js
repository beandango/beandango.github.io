class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="box">
      <h1>Directory</h1>
      <div class="inner">
        <div class="accordion" id="accordionExample">

          <a href="index.html" class="dir-link">
            <img src="img/dango_stamp.png" title="Home" alt="Home">
            <span>Home</span>
          </a>

          <a href="https://cherripa.bizren.moe" target="_blank" class="dir-link">
            <img src="img/cherry_stamp.png" title="Cherripa" alt="Cherripa">
            <span>Cherripa</span>
          </a>

          <a href="https://bizren.moe" target="_blank" class="dir-link">
            <img src="img/hub_stamp.png" title="Bizarre Renaissance" alt="Bizarre Renaissance">
            <span>Bizarre Renaissance</span>
          </a>

          <a href="https://youtube.com/@hajimedangovt" target="_blank" class="dir-link">
            <img src="img/YT_stamp.png" title="Youtube" alt="Youtube" style="border: 1px solid black;">
            <span>Youtube</span>
          </a>

          <a href="https://x.com/HajimeDangoVT" target="_blank" class="dir-link">
            <img src="img/twitter_stamp.png" title="Twitter/X" alt="Twitter/X" style="border: 1px solid black;">
            <span>Twitter</span>
          </a>

          <a href="https://discord.gg/d6ByZfC8gZ" target="_blank" class="dir-link">
            <img src="img/discord_stamp.png" title="Discord" alt="Discord" style="border: 1px solid black;">
            <span>My Discord Community</span>
          </a>

          <a href="https://vgen.co/hajimedangovt" target="_blank" class="dir-link">
            <img src="img/vgen_stamp.png" title="VGen/commissions" alt="VGen/commissions" style="border: 1px solid black;">
            <span>Commissions!</span>
          </a>

          <a href="https://hajimedango.straw.page" target="_blank" class="dir-link">
            <img src="img/sp_stamp.png" title="Straw Page" alt="Straw Page" style="border: 1px solid black;">
            <span>Send me doodles and questions here!</span>
          </a>

          <a href="https://throne.com/hajimedangovt/collections" target="_blank" class="dir-link">
            <img src="img/throne_stamp.png" title="Throne" alt="Throne" style="border: 1px solid black;">
            <span>Send me gifts here!</span>
          </a>

          <a href="mailto:HajimeDangoVT@bizren.moe" target="_blank" class="dir-link">
            <img src="img/email_stamp.png" title="Email/business inquiries" alt="Email/business inquiries" style="border: 1px solid black;">
            <span>Email</span>
          </a>

          <a href="https://violet-yew-0ab.notion.site/aaaaaaa-1a5edb62270480568408f962e6a4de51" target="_blank" class="dir-link">
            <img src="img/blog_stamp.png" title="Blog" alt="Blog" style="border: 1px solid black;">
            <span>Blog</span>
          </a>

          <a href="https://bizren.moe/#dango" target="_blank" class="dir-link">
            <img src="img/merch_stamp.png" title="Merch" alt="Merch" style="border: 1px solid black;">
            <span>Merch</span>
          </a>

          <a href="https://ko-fi.com/hajimedangovt" target="_blank" class="dir-link">
            <img src="img/dono_stamp.png" title="Donations" alt="Donations" style="border: 1px solid black;">
            <span>Donations</span>
          </a>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button 
                class="accordion-button collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseThree" 
                aria-expanded="false" 
                aria-controls="collapseThree"
              >
                Credits
              </button>
            </h2>
            <div 
              id="collapseThree" 
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <a href="https://vgen.co/kaobnir" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Overlays: Kaobnir
                  </button>
                </a>
                <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Live2D art: Cherripa
                  </button>
                </a>
                <a href="https://bsky.app/profile/hajimedango.bizren.moe" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Live2D Rig: Me :)
                  </button>
                </a>
                <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Emotes: Cherripa
                  </button>
                </a>
                <a href="https://bsky.app/profile/cherripa.bizren.moe" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Vroid model: me + cherripa
                  </button>
                </a>
                <a href="https://jingo1016.booth.pm/items/5058077" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    VRChat model base: STUDIO JINGO (Manuka)
                  </button>
                </a>
                <a href="https://vgen.co/ValeforZero" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Bluesky banner: Valeforzero
                  </button>
                </a>
                <a href="https://vgen.co/jaypeg" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Daki art: Jaypeg
                  </button>
                </a>
                <a href="https://vgen.co/NovaYStudio" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Bunny girl mousepads: NovaYStudio
                  </button>
                </a>
                <a href="https://vgen.co/NikkiGZ" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Schedule template: NikkiGZ
                  </button>
                </a>
                <a href="https://vgen.co/mavros_15rs" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Ref sheet template: mavros_15rs
                  </button>
                </a>
                <a href="https://vgen.co/rainulan30" target="_blank">
                  <button 
                    class="accordion-button no-arrow" 
                    type="button" style="background-color: #FFF;">
                    Stinger transition: rainulan30
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="box">
      <h1> Here we go again...</h1>
      <div class="inner">
        <p>
          <b>SUBJECT:</b> Hajime Dango <br>
          <b>GENDER:</b> Female<br>
          <b>AGE:</b> 25 <br>
          <b>Fanname:</b> RATS <br>
          <b>OshiMark:</b> 👁️🍏 <br>
          <b>Art tag:</b> <a href="https://bsky.app/hashtag/dangogh" target="_blank">#dangogh</a> <br>
        </p>
      </div>
    </div>

    <div class="box">
      <h1>Apparent interests</h1>
      <div class="inner">
        <ul>
          <li>Snakes</li>
          <li>Cats</li>
          <li>Making covers, music, digital art, video editing</li>
          <li>Anime (She has a MAL <a href="https://myanimelist.net/animelist/beanDango">here!</a>!)</li>
          <li>Japanese language and weeb shit</li>
          <li>Retro, Zelda, story-rich, and rhythm games!</li>
          <li>Rats</li>
        </ul>
      </div>
    </div>`;
  }
}

customElements.define('sidebar-component', Sidebar);
