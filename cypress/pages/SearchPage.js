class SearchPage {
  searchProduct(productName) {
    cy.get('.react-autosuggest__input');
  }

  validateResults() {
    cy.get('[href="https://sheinindia.in/s/tshirts-125606"]').should('exist'); 
  }
}

export default SearchPage;
