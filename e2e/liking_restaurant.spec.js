const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#resto-favorite');
  I.see('Anda Tidak Mempunyai Restaurant Favorite, Harap Tambahkan Dahulu', '#resto-favorite');
});

Scenario('liking one restaurants', async ({ I }) => {
  I.wait(3);
  I.see('Anda Tidak Mempunyai Restaurant Favorite, Harap Tambahkan Dahulu', '#resto-favorite');

  I.amOnPage('/');
  I.waitForElement('.container-detail a', 10);
  I.seeElement('.container-detail a');

  const firstRestaurant = locate('.container-detail a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.container-detail');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
