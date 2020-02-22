describe('Sign in with different methods', function () {
    beforeEach('navigate to home page', function () {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('.se-pre-con:hidden').as('loader');
        cy.contains("Food&Drink");
        //cy.get('@loader');
    })
    it('login happy path', function () {
        let timeNow = Date.now();
        cy.fixture("defaultUser").then(data => {
            cy.register(data);
        })
    })
})
//aby generowac unikalne emaile trzeba uzyc metody stringowej apennd