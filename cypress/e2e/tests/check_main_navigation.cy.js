
let config = Cypress.config()
describe('Create new user.', function () {

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

  it('check main navigation', function () {
    cy.get('.ui-menu-item span').contains('Produkte')
        .should('be.visible') 
        .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte.html');
    });

    cy.get('.ui-menu-item span').contains('Schweizer Qualität')
        .should('be.visible')
        .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/schweizer-qualitat');
    });

    cy.get('.ui-menu-item a[href="https://test.kneuss.com/gueggelifleisch-ab-hof"] span')
        .contains('Güggelifleisch ab Hof')
        .should('be.visible')
        .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/gueggelifleisch-ab-hof');
    });

    cy.get('.ui-menu-item span').contains('KNEUSS Güggeli erleben')
        .should('be.visible')
        .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/ueber-kneuss-gueggeli');
    });

    cy.get('.ui-menu-item span').contains('Nachhaltigkeit')
        .should('be.visible')
        .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/nachhaltigkeit');
    });
  });

  it('test product submenu Produkte', function () {
    cy.get('.ui-menu-item.nav-1 .submenu span').contains('Alle Produkte')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte.html');
    });

    cy.get('.ui-menu-item.nav-1 .submenu span').contains('Saison')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/saison.html');
    });

    cy.get('.ui-menu-item.nav-1 .submenu span').contains('Wurstwaren')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/wurstwaren.html');
    });

    cy.get('.ui-menu-item.nav-1 .submenu a[href="https://test.kneuss.com/produkte/bachofe-gueggeli.html"] span')
        .contains('Bachofe Güggeli')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/bachofe-gueggeli.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/deluxe.html"] span').contains('Deluxe')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/deluxe.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/clevere-kuche.html"] span').contains('Clevere Küche')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/clevere-kuche.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/pfanne.html"] span').contains('Pfanne')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/pfanne.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/minutenschnitzel.html"] span').contains('Minutenschnitzel')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/minutenschnitzel.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/spiessli-knebel.html"] span').contains('Spiessli/Knebel')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/spiessli-knebel.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/festtagsspecial.html"] span').contains('Festtagsspecial')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/festtagsspecial.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/grill.html"] span').contains('Grill')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/grill.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/guggelifleisch-ab-hof.html"] span').contains('Güggelifleisch ab Hof')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/guggelifleisch-ab-hof.html');
    });

    cy.get('.ui-menu-item.nav-1 a[href="https://test.kneuss.com/produkte/barf.html"] span').contains('BARF Hunde- und Katzenfutter')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/produkte/barf.html');
    });
  });

  it('test product submenu Schweizer Qualitat', function () {
    cy.get('.ui-menu-item.nav-2 a[href="https://test.kneuss.com/haltung"] span').contains('Haltung')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/haltung');
    });

    cy.get('.ui-menu-item.nav-2 a[href="https://test.kneuss.com/verarbeitung"] span').contains('Verarbeitung')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/verarbeitung');
    });

    cy.get('.ui-menu-item.nav-2 a[href="https://test.kneuss.com/genuss"] span').contains('Genuss')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/genuss');
    });
  });

  it('testproduct submenu Gueggelifleisch-ab-hof', function () {
    cy.get('.ui-menu-item.nav-3 a[href="https://test.kneuss.com/gueggelifleisch-ab-hof"] span').contains('Güggelifleisch ab Hof')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/gueggelifleisch-ab-hof');
    });
  });

  it('testproduct submenu KNEUSS Guggeli erleben col1', function () {
    cy.get('.ui-menu-item.nav-4-1 a[href="https://test.kneuss.com/ueber-kneuss-gueggeli"] span').contains('KNEUSS Güggeli')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/ueber-kneuss-gueggeli');
    });

    cy.get('.ui-menu-item.nav-4-1-1 a[href="https://test.kneuss.com/innovation"] span').contains('Innovation')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/innovation');
    });

    cy.get('.ui-menu-item.nav-4-1-2 a[href="https://test.kneuss.com/unternehmen"] span').contains('Unternehmen')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/unternehmen');
    });

    cy.get('.ui-menu-item.nav-4-1-3 a[href="https://test.kneuss.com/karriere"] span').contains('Karriere')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/karriere');
    });

    cy.get('.ui-menu-item.nav-4-1-4 a[href="https://test.kneuss.com/medien"] span').contains('Medien')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/medien');
    });

    cy.get('.ui-menu-item.nav-4-1-5 a[href="https://test.kneuss.com/contact"] span').contains('Kontakt')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/contact');
    });
  });

  it('testproduct submenu col2', function () {
    cy.get('.ui-menu-item.nav-4-2 a[href="https://test.kneuss.com/gueggelishop"] span').contains('GüggeliShop Mägenwil')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/gueggelishop');
    });

    cy.get('.ui-menu-item.nav-4-2-1 a[href="https://test.kneuss.com/unser-angebot"] span').contains('Unser Angebot')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/unser-angebot');
    });

    cy.get('.ui-menu-item.nav-4-2-2 a[href="https://test.kneuss.com/mittagsmenues"] span').contains('Mittagsmenüs')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/mittagsmenues');
    });

    cy.get('.ui-menu-item.nav-4-2-3 a[href="https://test.kneuss.com/gueggelishop-team"] span').contains('GüggeliShop Team')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/gueggelishop-team');
    });
  });

  it('testproduct submenu col3', function () {
    cy.get('.ui-menu-item.nav-4-3 a[href="https://test.kneuss.com/rezepte"] span').contains('Rezepte')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-1 a[href="https://test.kneuss.com/rezepte?tagFilter=Bachofe"] span').contains('Bachofe')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-2 a[href="https://test.kneuss.com/rezepte?tagFilter=Beilagen"] span').contains('Beilagen')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-3 a[href="https://test.kneuss.com/rezepte?tagFilter=Bouillon / Fond"] span').contains('Bouillon / Fond')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-4 a[href="https://test.kneuss.com/rezepte?tagFilter=Grill"] span').contains('Grill')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-5 a[href="https://test.kneuss.com/rezepte?tagFilter=Pfanne"] span').contains('Pfanne')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-6 a[href="https://test.kneuss.com/rezepte?tagFilter=Saucen"] span').contains('Saucen')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });

    cy.get('.ui-menu-item.nav-4-3-7 a[href="https://test.kneuss.com/rezepte?tagFilter=Suppen"] span').contains('Suppen')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/rezepte');
    });
  });

  it('testproduct submenu col4', function () {
    cy.get('.ui-menu-item.nav-4-4 a[href="https://test.kneuss.com/tisch-reservieren"] span').contains('Tisch reservieren')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/tisch-reservieren');
    });
  });

  it('testproduct submenu Nachhaltigkeit', function () {
    cy.get('.ui-menu-item.nav-5 a[href="https://test.kneuss.com/nachhaltigkeit"] span').contains('Nachhaltigkeit')
        .click({ force: true });
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/nachhaltigkeit');
    });
  });
});
