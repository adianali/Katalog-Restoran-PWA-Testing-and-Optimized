class reviewWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="testimonials">
      <div>
        <h1>Testimonials</h1>
  
        <div class="row">
          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Adian Ali Pratama<p>
              </div>
              
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur ullam est illo officia accusantium nemo nisi maxime exercitationem asperiores nam perspiciatis ea iste id, reiciendis itaque consectetur molestias ab.
              </p>
            </div>
          </div>
          
          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Dastin</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Irfan</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Bismadra</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Zaidan</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Fikri</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Armadhan</p> 
                </div>
              
                <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>
  
          <div class="col">
            <div class="testi" tabindex="0">
              <div class="name">
                <p>Syahdan Maulana</p>
              </div>
              
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
  
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur ullam est illo officia accusantium nemo nisi maxime exercitationem asperiores nam perspiciatis ea iste id, reiciendis itaque consectetur molestias ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('review-web', reviewWeb);
