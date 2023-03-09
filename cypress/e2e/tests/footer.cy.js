let config = Cypress.config()
describe('Footer', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('button').contains('Nein danke!')
      .should('be.visible')
      .click({ force: true });
    cy.get('#bio_ep_close')
      .should('be.visible')
      .click({ force: true });
    cy.get('.amgdprcookie-button.-allow')
      .should('be.visible')
      .click({ force: true });
    cy.wait(1000);
  });

//footer
it('karriere', function () {
  cy.visit(`${config.baseUrl}`);
  cy.get('.menu-entries a[href="https://test.kneuss.com/karriere"]')
    .should('be.visible');
  cy.visit("https://test.kneuss.com/karriere");
});

  it('kontakt', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.menu-entries a[href="https://test.kneuss.com/contact"]')
      .should('be.visible');
    cy.visit("https://test.kneuss.com/contact");
  });
  
  it('frischebox', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.menu-entries a[href="https://test.kneuss.com/frischebox"]')
      .should('be.visible');
    cy.visit("https://test.kneuss.com/frischebox");  
  });

  it('Guggelli', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.menu-entries a[href="https://test.kneuss.com/ueber-kneuss-gueggeli"]')
      .should('be.visible');
    cy.visit("https://test.kneuss.com/ueber-kneuss-gueggeli");  
  });
});