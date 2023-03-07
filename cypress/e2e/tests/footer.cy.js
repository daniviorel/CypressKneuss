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
  it('kontakt', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.menu-entries a[href="https://test.kneuss.com/contact"] span').contains('Kontakt')
      .should('be.visible')
      .click({ force: true });  
  it("webpage redirect", () => {
    const page = {
        "from": "https://test.kneuss.com/",
        "to": "https://test.kneuss.com/contact"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
      .should("be.equals", page.to)
    });
  });
  
  it('Frischebox', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('a[href="https://test.kneuss.com/frischebox"] span').contains('Frischebox')
      .click({ force: true });
  it("webpage redirect", () => {
    const page = {
        "from": "https://test.kneuss.com/",
        "to": "https://test.kneuss.com/frischebox"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
      .should("be.equals", page.to)
    });
  });
});