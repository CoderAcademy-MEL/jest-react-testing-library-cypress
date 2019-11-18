describe("toggles button correctly", () => {
  it("can make calculations", () => {
    cy.visit("/")
    .findByText('Change number')
    .click()
    cy.get('h1')
    .should('have.text', "10")
  })
})