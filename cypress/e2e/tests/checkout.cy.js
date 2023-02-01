let config = Cypress.config()
describe('Cart login', function() {

    beforeEach('before each test', function() {
      cy.visit(`${config.baseUrl}`);
      cy.get('button').contains('Nein danke!')
        .should('be.visible')
        .click({force: true});
      cy.get('#bio_ep_close')
        .should('be.visible')
        .click({force: true});
      cy.get('.amgdprcookie-button.-allow')
        .should('be.visible')
        .click({force: true});
      cy.wait(1000);
    });
  
    it('cart login', function() {
      cy.get(".minicart-wrapper .text").contains("Mein Warenkorb", {force: true})
        .should('be.visible')
        .click({force: true});
    });
});