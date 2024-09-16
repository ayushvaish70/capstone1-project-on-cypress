/// <reference types="cypress" />

describe("Search Product and Verify Cart After Login Test Suite", () => {
  const itemPrice = 600;
  const loginEmail = "oanabarsan@yahoo.com";
  const loginPassword = "Suceava321!";

  before(() => {
    // Visit the homepage before running tests
    cy.visit('https://www.automationexercise.com');
  });

  it("Search product and verify cart after login", () => {
    // Navigate to the Products page
    cy.get('a[href="/products"]').click();
    
    // Verify the 'All Products' title
    cy.get('div.features_items h2.title.text-center')
      .scrollIntoView()
      .should('have.text', 'All Products');

    // Search for a product
    cy.get('input#search_product').type('Winter Top');
    cy.get('#submit_search > .fa').click();

    // Verify the 'Searched Products' title
    cy.get('div.features_items h2.title.text-center')
      .scrollIntoView()
      .should('have.text', 'Searched Products');

    // Verify the searched product
    cy.get('div.productinfo.text-center p')
      .contains('Winter Top')
      .should('exist');

    // Add the product to the cart and view the cart
    cy.get('.productinfo > .btn').click();
    cy.get('u').click();

    // Verify the product in the cart
    cy.get('a[href="/product_details/5"]')
      .contains('Winter Top')
      .should('exist');
    cy.get('tr[id="product-5"] td.cart_price p')
      .contains(`Rs. ${itemPrice}`)
      .should('be.visible');
    cy.get('tr[id="product-5"] button.disabled')
      .contains('1')
      .should('be.visible');
    cy.get('tr[id="product-5"] td.cart_total p')
      .contains(`Rs. ${itemPrice}`)
      .should('be.visible');

    // Login and verify the cart
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type(loginEmail);
    cy.get('[data-qa="login-password"]').type(loginPassword);
    cy.get('[data-qa="login-button"]').click();
    
    // Verify login
    cy.get('ul.nav.navbar-nav li:nth-child(10)')
      .contains('Logged in as')
      .should('be.visible');
    
    // Navigate to the cart and verify
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('a[href="/product_details/5"]')
      .contains('Winter Top')
      .should('exist');

  });
});
