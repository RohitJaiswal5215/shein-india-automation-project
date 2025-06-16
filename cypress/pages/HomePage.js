

class HomePage {
  visit() {
    cy.visit('/'); 
  }

  clickCategory(categoryName) {
    cy.get('nav').contains(categoryName, { matchCase: false }).click();
  }

  clickFooterLink(linkText) {
    cy.get('footer').scrollIntoView();
    cy.contains('a', linkText, { matchCase: false }).click();
  }

  validateHomePageLoaded() {
    cy.get('.home-banner, .hero-slider').should('be.visible');
  }

  validateHeaderLinksExist() {   
    const categories = ['WOMEN', 'CURVE', 'KIDS', 'BEAUTY'];

    categories.forEach((cat) => {
      cy.get('nav').contains(cat, { matchCase: false }).should('exist');
    });
  }
}

export default HomePage;
