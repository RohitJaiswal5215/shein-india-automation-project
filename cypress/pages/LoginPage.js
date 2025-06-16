class LoginPage {
  visit() {
    cy.visit('/');
  }


  closeLocationPopupIfVisible() {
    cy.get('body').then(($body) => {
      if ($body.find('div[class*="modal-location"]').length > 0) {
        cy.get('div[class*="modal-location"]')
          .find('button[aria-label="Close"]')
          .click({ force: true });
      }
    });
  }

  openLoginModal() {
    this.closeLocationPopupIfVisible(); 
    cy.get(':nth-child(5) > a > img').click({force : true});
  }

  fillLoginDetails(emailOrMobile) {
 cy.get('.selfcare-login-btn').type(emailOrMobile);
}
}

export default LoginPage;

