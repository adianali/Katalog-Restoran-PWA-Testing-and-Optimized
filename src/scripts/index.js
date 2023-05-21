/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/app-bar.js';
import './component/jumbotron.js';
import './component/footer.js';

import home from './views/pages/home';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.garis'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main'),
});

document.addEventListener('DOMContentLoaded', async () => {
  const mainContent = document.querySelector('#content-resto');
  mainContent.innerHTML = await home.render();
  await home.afterRender();

  const skipLink = document.querySelector('.skip-link');
  const mainList = document.querySelector('#list');
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainList.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
