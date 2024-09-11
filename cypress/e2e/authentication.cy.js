describe('User Authentication Tests', () => {
  beforeEach(() => {
    cy.fixture('userData').as('userData');
  });

  it('should log in with valid credentials', function() {
    const { email, password } = this.userData.validUser;

    // Visit the login page
    cy.visit('https://www.automationexercise.com/login');

    // Ensure we are on the login page
    cy.url().should('include', '/login');

    // Fill out and submit the login form
    cy.get('[data-qa="login-email"]').type(email); // Update selector
    cy.get('[data-qa="login-password"]').type(password); // Update selector
    cy.get('[data-qa="login-button"]').click(); // Update selector

    // Verify successful login
    cy.get('b').should('contain', 'Oana-Maria Barsan');
  });

  it('should show an error with invalid credentials', function() {
    const { email, password } = this.userData.invalidUser;

    // Visit the login page
    cy.visit('https://www.automationexercise.com/login');

    // Ensure we are on the login page
    cy.url().should('include', '/login');

    // Fill out and submit the login form
    cy.get('[data-qa="login-email"]').type(email); // Update selector
    cy.get('[data-qa="login-password"]').type(password); // Update selector
    cy.get('[data-qa="login-button"]').click(); // Update selector

    // Verify error message
    cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!');
  });
});
