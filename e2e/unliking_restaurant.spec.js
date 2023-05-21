const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.seeElement('#resto-favorite');
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

  I.click('.container-detail a');
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.see('Anda Tidak Mempunyai Restaurant Favorite, Harap Tambahkan Dahulu', '#resto-favorite');
});
