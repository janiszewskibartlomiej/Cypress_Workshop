Cypress.Commands.add("test", () => {
  cy.log('Function works well')
});
Cypress.Commands.add("login", user => {
  return cy.request({
    method: "POST",
    url: "/login",
    form: true,
    body: user
  }).then((response) => {
    expect(response.body).to.contain('Zostałeś zalogowany')
  })
})

Cypress.Commands.add("register", data => {
  return cy.request({
    method: "POST",
    url: "/register",
    form: true,
    body: data
  })
})

