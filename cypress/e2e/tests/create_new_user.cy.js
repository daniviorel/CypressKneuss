
let config = Cypress.config()
describe('Create new user.', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}/customer/account/create/`);
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

  it('create new user happyflow', function () {
    cy.get("select[name='prefix']").select("Frau", { force: true });
    cy.get("[name='firstname']").type("radu", { force: true });
    cy.get("[name='lastname']").type("radu", { force: true });
    cy.get("[name='dob']").type("dany", { force: true });
    cy.get('.ui-state-default').contains('15')
      .should('be.visible')
      .click({ force: true });
    cy.get(".form-create-account [name='email']").type("radu@radu.com", { force: true });
    cy.get(".form-create-account [name='password']").type("radu_1234", { force: true });
    cy.get("[name='password_confirmation']").type("radu_1234", { force: true });
    cy.get(".form-create-account [type='submit']").click({ force: true });


    // assert
    cy.get(".message-success").should('have.length', 1);
    cy.get(".message-success div").contains('Danke für die Registrierung mit KNEUSS Güggeli.')
      .should('have.length', 1);
  });

  it('create new user - already exists', function () {
    cy.get("select[name='prefix']").select("Frau", { force: true });
    cy.get("[name='firstname']").type("radu", { force: true });
    cy.get("[name='lastname']").type("radu", { force: true });
    cy.get("[name='dob']").type("radu", { force: true });
    cy.get('.ui-state-default').contains('15')
      .should('be.visible')
      .click({ force: true });
    cy.get(".form-create-account [name='email']").type("radu@radu.com", { force: true });
    cy.get(".form-create-account [name='password']").type("radu_1234", { force: true });
    cy.get("[name='password_confirmation']").type("radu_1234", { force: true });
    cy.get(".form-create-account [type='submit']").click({ force: true });


    // assert
    cy.get(".message-error").should('have.length', 1);
    cy.get(".message-error div").contains('Es gibt bereits ein Konto mit dieser E-Mail-Adresse. Wenn du sicher bist, dass es sich um deine E-Mail-Adresse handelt')
      .should('have.length', 1);
  });

  it('check mandatory fields', function () {
    cy.get(".form-create-account [type='submit']").click({ force: true });

    cy.get(".field-name-firstname .mage-error")
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);
    cy.get(".field-name-lastname .mage-error")
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);
    cy.get('.mage-error[for="email_address"]')
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);
    cy.get(".password .mage-error")
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);
    cy.get(".mage-error[for='password-confirmation']")
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);
    cy.get(".password .mage-error")
      .contains("Dies ist ein Pflichfeld.")
      .should('have.length', 1);

    cy.get(".form-create-account [name='email']").type("dizfs gmail com", { force: true });
    cy.get(".form-create-account [type='submit']").click({ force: true });
    cy.get('.mage-error[for="email_address"]')
      .contains("Bitte gib eine gültige E-Mail-Adresse ein (z.B: johndoe@domain.com).")
      .should('have.length', 1);
  });
});  