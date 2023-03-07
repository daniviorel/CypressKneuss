let config = Cypress.config()
describe('User login', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}/customer/account/login/`);
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

  //login user happyflow

  it('create login user - already exists', function () {
    cy.get("[name='login[username]']").type("daniel.viorel@arcmedia.ch", { force: true });
    cy.get("[name='login[password]']").type("Danyvio_1977", { force: true });
    cy.get('button').contains('Anmelden')
      .should('be.visible')
      .click({ force: true });
    cy.wait(3000);
    cy.get(".minicart-wrapper .text").contains("Mein Warenkorb")
      .should('be.visible')
      .click();
  });
});