describe('Testing Albukhari books', () => {
  before(() => {
  });

  beforeEach(() => {
    const baseUrl = Cypress.env('BASE_URL')
    if (!baseUrl) {
      throw new Error('BASE_URL environmental variable is not defined')
    }
    cy.visit(baseUrl, { failOnStatusCode: false })
  });

  const signUpData = require('../picture/data.json').signUpData;
  const loginData = require('../picture/data.json').loginData;
  const productData = require('../picture/data.json').productData;

    it('Capture baseline screenshot', () => {
      cy.screenshot('baseline-homepage');
      cy.matchImageSnapshot('baseline-homepage');
    });
  
    signUpData.forEach((data) => {
      it(`Signup with username: ${data.username}`, () => {
        cy.get('.tbay-login > a > span').click();
        cy.get('.modal-body > .nav > :nth-child(2) > a').click();
        cy.get('#signonname').click().type(data.username);
        cy.get('#signonemail').click().type(data.email);
        cy.get('#signonpassword').click().type(data.password);
        cy.get('#password2').click().type(data.confirmPassword);
        cy.screenshot(`before-signup-${data.username}`);
        cy.matchImageSnapshot(`before-signup-${data.username}`);
        cy.get('#custom-register > .submit_button').contains('REGISTER').should('be.visible').click();
        cy.screenshot(`after-signup-${data.username}`);
        cy.matchImageSnapshot(`after-signup-${data.username}`);
        cy.wait(3000);
      });
    });
  
    loginData.forEach((data) => {
      it(`Login with username: ${data.username}`, () => {
        cy.get('.tbay-login > a > span').click();
        cy.get('#cus-username').click().type(data.username);
        cy.get('#cus-password').click().type(data.password);
        cy.get('.rememberme-wrapper > label').click();
        cy.get('#custom-login').find('.submit_button').click();
        cy.screenshot(`login-${data.username}`);
        cy.matchImageSnapshot(`login-${data.username}`);
      });
    });
  
    it('filtering products', () => {
      cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group').click().type('Alchemist');
      cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group > .button-group > .button-search').click();
      cy.get('.post-7671 > .product-block').should('be.visible').click();
      cy.get('.summary > .product_title').should('be.visible');
      cy.screenshot('filtered-products');
      cy.matchImageSnapshot('filtered-products');
    });
  
    productData.forEach((data) => {
      it(`adding product to cart: ${data.productName}`, () => {
        cy.addProductToCart(data.productName);
        cy.screenshot(`add-to-cart-${data.productName}`);
        cy.matchImageSnapshot(`add-to-cart-${data.productName}`);
      });
    });
  
    // Example of API testing for user sign up
    // Add API tests here if necessary
  
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception:', err);
      return false;
    });
  });
  