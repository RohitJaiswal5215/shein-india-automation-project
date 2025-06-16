import SearchPage from '../../pages/SearchPage';

describe('Search Product Test', () => {
  const searchPage = new SearchPage();

  it('should search for a product', () => {
    cy.visit('/');
    searchPage.searchProduct('dress');
    searchPage.validateResults();
  });
});
