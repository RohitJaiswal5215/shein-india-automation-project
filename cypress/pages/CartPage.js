

class CartPage {
  addToCart() {
    cy.visit('https://www.sheinindia.in');

    cy.get('.cart-blk > a > img').click({force :true});
  }

  openCart() {
    cy.get('.cart-shopping').click();
  }

 validateCart() {  
  cy.get('body').then(($body) => {
    if ($body.find('div[class*="modal-location"]').length > 0) {
      cy.get('div[class*="modal-location"] button[aria-label="Close"]').click({ force: true });
    }
  });

 
  cy.get('.cart-blk > a').click({ force: true });  

  cy.contains('Your Shopping Bag is Empty!!').should('be.visible');
}

 
}

export default CartPage;
