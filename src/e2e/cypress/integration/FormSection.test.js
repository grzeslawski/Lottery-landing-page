describe('FormSection', () => {
  it('Scratch game and display communicate', () => {
    function randomNumber() {
      return Math.floor(Math.random() * 350);
    }

    cy.visit('/');
    for (let i = 0; i < 50; i++) {
      const isVisible = cy
        .get('[data-testid=scratch]')
        .parent()
        .parent('.ScratchCard__Container')
        .should('exist');
      console.log(isVisible);
      if (isVisible) {
        cy.get('[data-testid=scratch]')
          .parent()
          .parent('.ScratchCard__Container')
          .trigger('mousedown', {
            x: randomNumber(),
            y: randomNumber(),
          })
          .trigger('mousemove', {
            x: randomNumber(),
            y: randomNumber(),
          });
      }
    }

    cy.findByText(/Wygrałeś/i).should('exist');
  });
});
