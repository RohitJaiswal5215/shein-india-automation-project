

class CheckoutPage {
  proceedToCheckout() {
    cy.get('.icon-cart').click(); 
    cy.get('button:contains("Checkout")').click(); 
  }

  fillShippingDetails() {
    cy.get('input[name="address"]').type('123 MG Road');
    cy.get('input[name="city"]').type('Indore');
    cy.get('select[name="state"]').select('Madhya Pradesh');
    cy.get('input[name="zip"]').type('452001');
  }

  confirmOrder() {
    cy.get('button:contains("Place Order")').click();
  }
}

export default CheckoutPage;
