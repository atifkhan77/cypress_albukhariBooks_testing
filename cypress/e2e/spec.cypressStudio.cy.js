describe('Testing Albukhari books', () => {
  beforeEach(() => {
    const baseUrl = Cypress.env('BASE_URL')
    if(!baseUrl){
      throw new Error('BASE_URL enviornmental variable is not defined')
    }
    cy.visit(baseUrl,{ failOnStatusCode: false })
    
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    console.error('Uncaught exception:', err);
    return false;
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('manualTest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.menu-item-15535 > a').click();
    cy.get('.text').click();
    cy.get('.vc_custom_1558093558303 > .vc_fluid > .vc_column-inner > .wpb_wrapper > .tbay-addon > .tbay-addon-content > .carousel-wrapper > .owl-carousel > .slick-list > .slick-track > [data-slick-index="1"] > .products-grid > .product-block > .product-content > .block-inner > .image > .product-image > .attachment-woocommerce_thumbnail').click();
    cy.get('.single_add_to_cart_button').click();
    cy.get('.single_add_to_cart_button').click();
    cy.get('.right-icon > .text > .img-link').click();
    /* ==== End Cypress Studio ==== */
  });
});
  