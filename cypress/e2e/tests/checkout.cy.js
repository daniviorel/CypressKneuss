let config = Cypress.config()
describe('Cart login', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}/customer/account/login`);
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

  it('login user happyflow', function () {
    cy.wait(3000);
    cy.get("[name='login[username]']").type("radu@radu.com", { force: true });
    cy.get("[name='login[password]']").type("radu_1234", { force: true });
    cy.get('.actions-toolbar span').contains('Anmelden')
      .should('be.visible')
      .click({ force: true });
  });

  it('cart login', function () {
    cy.get(".minicart-wrapper .text").contains("Mein Warenkorb")
      .should('be.visible')
      .click();
  });
});