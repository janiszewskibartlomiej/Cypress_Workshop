describe('Sign in with different methods', function () {
    beforeEach('navigate to home page', function () {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('.se-pre-con:hidden').as('loader');
        cy.contains("Food&Drink");
        //cy.get('@loader');
    })
    it('login happy path', function () {
        cy.get('[type=submit]')
            .should('have.value', 'Zarejestruj')
            .click();
        cy.get('@loader');
        cy.url().should('include', '/register');
        cy.get(':nth-child(1) > .col-sm-3 > .invalid-feedback')
            .should('be.visible', 'To pole powinno mieć od 5 do 50 znaków');
        cy.get(':nth-child(2) > .col-sm-3 > .invalid-feedback')
            .should('be.visible', 'To pole jest wymagane');
        cy.get(':nth-child(3) > .col-sm-3 > .invalid-feedback')
            .should('be.visible', 'To pole jest wymagane');
    })
})