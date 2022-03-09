describe('Main Form', () => {
  it('Renders the Modal', () => {
    cy.visit('/');
    cy.findByText(/Imię/i).click().type('Testowe Imię');
    cy.findByText(/Adres e-mail/i)
      .click()
      .type('ff@od.pl');
    cy.findByText(/następny krok/i).click();
    cy.get('[data-testid=conditionOne]').click();
    cy.findByText(/zagraj/i).click();
    cy.findByText(/modal/i).should('exist');
  });
});
