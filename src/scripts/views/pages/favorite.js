import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const favorite = {
  async render() {
    return `
    <div class="content">
    <h1 class="favorite-heading">Restaurant Favorite Mu</h1>
    <div id="resto-favorite" class="card-list">

    </div>
  </div>
      `;
  },

  async afterRender() {
    const itemresto = await FavoriteRestaurantDB.getAllRestaurants();
    const restoContainer = document.querySelector('#resto-favorite');

    if (itemresto.length === 0) {
      restoContainer.innerHTML = `
       <h3 class="not-favorite"> Anda Tidak Mempunyai Restaurant Favorite, Harap Tambahkan Dahulu </h3>
      `;
    }
    const totalResto = itemresto.length;
    itemresto.forEach((restaurant, index) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurant, index, totalResto);
    });
  },
};

export default favorite;
