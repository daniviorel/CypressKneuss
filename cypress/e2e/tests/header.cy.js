let config = Cypress.config()
describe('Header', function () {

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

  it('karriere', function () {
    cy.get('.link-topbar').contains('Hier')
      .should('be.visible') 
      .click({ force: true });
  it("webpage redirect", () => {
    const page = {
        "from": "https://test.kneuss.com/",
        "to": "https://www.kneuss.com/karriere/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
});