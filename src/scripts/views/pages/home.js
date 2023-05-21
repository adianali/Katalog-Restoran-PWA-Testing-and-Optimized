import RestauranAppsSource from '../../data/restaurantapps-source';
import { createRestoItemTemplate } from '../template/template-creator';
import '../../component/review-web';
import '../../component/intro-artikel';

const home = {
  async render() {
    return `
    
  <restauranku-jumbotron></restauranku-jumbotron>
    <intro-artikel></intro-artikel>
  
  <section class="content" id="content">
          <h1 class="judul">Explore Restaurant</h1>
          <div class="card-list" id="list"></div>
  </section>

  <review-web></review-web>
      `;
  },

  async afterRender() {
    const restaurants = await RestauranAppsSource.home();
    const restaurantsitem = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantsitem.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default home;
