// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js

// cypress/support/commands.js

// cypress/support/commands.js

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group').click().type(productName);
    cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group > .button-group > .button-search').click();
    cy.get('body').then($body => {
      if ($body.find('.woocommerce-result-count:contains("Showing all 2 results")').length > 0) {
        cy.get('.post-7671 > .product-block').should('be.visible').click();
      } else {
        cy.log('The specific result count message was not found');
      }
    });
    cy.get('.summary > .product_title').should('be.visible');
    cy.get('.plus').click();
    cy.get('.single_add_to_cart_button').click();
  });
  
  