class footerRestaurantKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p  tabindex="0">Copyright &copy; 2023 - RestaurantKu.</p>
         `;
  }
}
customElements.define('restaurantku-footer', footerRestaurantKu);
