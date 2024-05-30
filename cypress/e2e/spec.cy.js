describe('Testing Albukhari books', () => {
  beforeEach(() => {
    const baseUrl = Cypress.env('BASE_URL')
    if(!baseUrl){
      throw new Error('BASE_URL enviornmental variab;le is not defined')
    }
    cy.visit(baseUrl,{ failOnStatusCode: false })
    
  });

  const signUpData = [
    { username: 'atif123', email: 'at77kh@gmail.com', password: '12345678', confirmPassword: '12345678' },
    { username: 'abdullah123', email: 'abdullah@gmail.com', password: '1234567', confirmPassword: '1234567' },
    // Add more test data objects as needed
  ];

  const loginData = [
    { username: 'atif123', password: '12345678' },
    { username: 'abdullah', password: '1234567' }
    // Add more test data objects as needed
  ];

  const productData = [
    { productName: 'Alchemist' },
    { productName: 'It Starts with Us' }
    // Add more test data objects as needed
  ];

  // Add baseline screenshot capture before starting tests
  it('Capture baseline screenshot', () => {
    cy.screenshot('baseline-homepage');
  });

  signUpData.forEach((data) => {
    it(`Signup with username: ${data.username}`, () => {
      cy.get('.tbay-login > a > span').click();
      cy.get('.modal-body > .nav > :nth-child(2) > a').click();
      cy.get('#signonname').click().type(data.username);
      cy.get('#signonemail').click().type(data.email);
      cy.get('#signonpassword').click().type(data.password);
      cy.get('#password2').click().type(data.confirmPassword);
      cy.screenshot('before signup')
      cy.get('#custom-register > .submit_button').contains('REGISTER').should('be.visible').click();
      cy.screenshot('after signup');
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
    });
  });

  it('filtering products', () => {
    cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group').click().type('Alchemist');
    cy.get('.search-full > .tbay-search-form > .searchform > .form-group > .input-group > .button-group > .button-search').click();
    cy.get('.post-7671 > .product-block').should('be.visible').click();
    cy.get('.summary > .product_title').should('be.visible');
  });

  productData.forEach((data) => {
    it(`adding product to cart: ${data.productName}`, () => {
      cy.addProductToCart(data.productName);
    });
  });

  // Example of API testing for user sign up
  

  // Handle uncaught exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err);
    return false;
  });
});
