describe('Sign in with different methods', function () {
  beforeEach('navigate to home page', function () {
    cy.visit('/');
    cy.get('.se-pre-con:hidden')
      .should('not.be.visible').as('loader');
    cy.contains('Food&Drink');
    cy.contains('Zamawianie jedzenia').should('be.visible');
  })
  it('login happy path', function () {
    cy.log('**Ready to automate!**');
    cy.get('[href="/login"]').click();
    cy.get('@loader').should('not.be.visible');
    cy.contains('Login');
    cy.url().should('include', '/login');
    cy.get('#email')
      .type('cypress123@automation.com')
      .should('have.value', 'cypress123@automation.com');
    cy.get('#password')
      .type('AdamKowalski123!')
      .should('have.value', 'AdamKowalski123!');
    cy.get('[type=submit]')
      .should('have.value', 'Zaloguj')
      .click();
    cy.get('.se-pre-con').should('not.be.visible');
    cy.get('section.container > .alert').should('be.visible');
    cy.url().should('include', '/dashboard');
    cy.get('[href="/edit_form"]').should('be.visible');
  })

})
