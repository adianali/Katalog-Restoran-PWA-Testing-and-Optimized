class jumRestaurantKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="jumbotron">
        <h1  tabindex="0">Welcome to RestaurantKu!</h1>
        <p  tabindex="0">Here you can find information about my services and products.</p>
      </div>`;
  }
}
customElements.define('restauranku-jumbotron', jumRestaurantKu);
