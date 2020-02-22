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
        cy.get('#name')
            .type('Bartłomiej Janiszewski')
        cy.get('#email')
            .type('cypress' + timeNow + '@automation.com')
            .should('have.value', ('cypress' + timeNow + '@automation.com'));
        cy.get('#password')
            .type('AdamKowalski123!')
            .should('have.value', 'AdamKowalski123!');
        cy.get('#confirm')
            .type('AdamKowalski123!')
            .should('have.value', 'AdamKowalski123!');
        cy.get('[type=submit]')
            .should('have.value', 'Zarejestruj')
            .click();
        cy.get('@loader');
        cy.get('section.container > .alert').should('be.visible');
        cy.url().should('include', '/login');
        cy.contains('Użytkownik został zarejestrowany')
    })
})