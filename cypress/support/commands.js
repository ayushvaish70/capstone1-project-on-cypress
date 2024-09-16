import HeaderPage from "../pages/HeaderPage";
import AuthPage from "../pages/AuthPage";

Cypress.Commands.add('login',(loginEmail, loginPassword) =>{
  HeaderPage.getSignupLink().click();
  AuthPage.getLoginTitle().should("exist");
  AuthPage.getLoginEmail().type(loginEmail, { delay: 0 });
  AuthPage.getLoginPassword().type(loginPassword, { delay: 0 });
  AuthPage.getLoginBtn().click();
});
// // Command to log in
// Cypress.Commands.add('login', (email, password) => {
//   cy.visit('/login'); // Navigate to login page
//   cy.get('input[name="email"]').type(email); // Type email
//   cy.get('input[name="password"]').type(password); // Type password
//   cy.get('button[type="submit"]').click(); // Submit login form
// });

// // Command to add an item to the cart
// Cypress.Commands.add('addToCart', (productIndex) => {
//   cy.visit('/products'); // Navigate to products page
//   cy.get(`.product:nth-child(${productIndex}) .add-to-cart`).click(); // Click add to cart for specified product
// });

// // Command to check out
// Cypress.Commands.add('checkout', () => {
//   cy.get('a[href="/cart"]').click(); // Go to cart page
//   cy.get('button.proceed-to-checkout').click(); // Proceed to checkout
// });

// // Command to delete an account
// Cypress.Commands.add('deleteAccount', () => {
//   cy.get('a[href="/account/delete"]').click(); // Navigate to delete account page
//   cy.get('button.confirm-delete').click(); // Confirm account deletion
// });
