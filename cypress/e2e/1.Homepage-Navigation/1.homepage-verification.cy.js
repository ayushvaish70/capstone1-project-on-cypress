/// <reference types="cypress" />

describe('Automation Exercise Homepage Verification', () => {

    before(() => {
      // Visit the Automation Exercise homepage
      cy.visit('https://www.automationexercise.com/');
    });
  
    it('should load the homepage correctly', () => {
      // Verify that the homepage title includes "Automation Exercise"
      cy.title().should('include', 'Automation Exercise');
  
      // Check that the main header is visible
      cy.get('header').should('be.visible');
      
      // Verify that the logo is visible
      cy.get('a > img').should('be.visible');
  
      // Ensure the navigation bar is visible
      cy.get('.shop-menu > .nav').should('be.visible');
  
      // Check for the presence of specific sections or banners
      cy.get('section[id="slider"]').should('be.visible'); // Ensure the slider section is visible
      cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible'); // Ensure the popular products section is visible
    });
  
    it('should display product categories correctly', () => {
      // Verify that product categories are displayed
      cy.get('.left-sidebar > :nth-child(1)').should('be.visible'); // Ensure the category products section is visible
  
      // Check for specific category links
      cy.get(':nth-child(1) > .panel-heading > .panel-title > a').should('be.visible') // Adjust 'Category' based on actual text
      });
    });
  
  
  