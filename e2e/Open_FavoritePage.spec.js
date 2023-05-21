Feature('Open Favorite Page');

Scenario('Showing List of Liked Restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.content');
  I.seeElement('.content');
});
