describe('Visual Testing with Percy', () => {
    it('should match the visual appearance of the homepage', () => {
      cy.visit('https://www.automationexercise.com/');
      cy.percySnapshot('homepage');
    });
  });
  