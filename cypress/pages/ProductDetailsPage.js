

class ProductDetailsPage {
  verifyProductInfo() {
    cy.get('.product-title').should('exist');
    cy.get('.price').should('exist');
    cy.get('.size-select').should('exist');
  }

  selectSizeAndAddToCart() {
    cy.get('.size-select').first().click();
    cy.get('button:contains("Add to Bag")').click();
  }
}

export default ProductDetailsPage;
