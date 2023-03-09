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

  it('login user - already exists', function () {
    cy.get("[name='login[username]']").type("test2@hotmail.com", { force: true });
    cy.get("[name='login[password]']").type("Test_1234", { force: true });
    cy.get('button').contains('Anmelden')
      .should('be.visible')
      .click({ force: true });
    cy.wait(3000);
  
    cy.get('.ui-menu-item span').contains('Produkte')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte.html');
    });
    cy.get('.ui-menu-item.nav-1 .submenu span').contains('Wurstwaren')
      .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/wurstwaren.html');
    });
  
    cy.get('button').contains('Ab in den Warenkorb')
      .click({ force: true });
    cy.wait(4000);
    cy.get(".minicart-wrapper .text").contains("Mein Warenkorb")
      .should('be.visible')
      .click({ force: true });
    cy.wait(3000);
    cy.get('button').contains('Zur Kasse')
      .click({ force: true });
    
    for(let n = 0; n < 5; n ++){
      cy.get('.field--number__up')
        .click({ force: true })
    };
    cy.get('button').contains('Warenkorb aktualisieren')
      .click({ force: true });
    cy.wait(4000);
    cy.get('button').contains('Zur Kasse')
      .click({ force: true });
  });
});