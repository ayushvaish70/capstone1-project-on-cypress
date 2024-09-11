// cypress/integration/mock_api_response.spec.js

describe('Mock API Responses', () => {
    it('should mock a successful API response', () => {
      // Intercept GET request to '/api/products' and respond with mock data
      cy.intercept('GET', '/api/products', {
        statusCode: 200,
        body: [
          { id: 1, name: 'Blue Top', price: 500 },
          { id: 2, name: 'Men Tshirt', price: 400 },
        ],
      }).as('getProducts');
  
      // Visit the homepage
      cy.visit('https://www.automationexercise.com/');
  
      // Navigate to the Products page
      cy.get('.features_items > .title').click();
  

      // Verify that the mocked products are displayed
    //   cy.get('.product').should('exit');
      cy.get('.features_items').eq(0).contains('Blue Top');
      cy.get('.features_items').eq(0).contains('Men Tshirt');
    });
  });
  