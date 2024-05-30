/// <reference types="Cypress" />
describe("REST API Test with Cypress", () => {
    before('visiting', () => {
      cy.visit('https://pokeapi.co/?ref=apilist.fun')
    });
  
    it("API test-header validator", () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/25/', {
        headers: { 'content-type': 'application/json; charset=utf-8' },
        body: {
          name: 'pikachu',
          id: 25,
          abilities: [],
          // other relevant fields can be added here
        }
      }).as('pokemon');
      cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
      cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    });
  
    it("API test-status validator", () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/25/', {
        statusCode: 200,
        body: {
          name: 'pikachu',
          id: 25,
          abilities: [],
          // other relevant fields can be added here
        }
      }).as('pokemon');
      cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
      cy.get('@pokemon').its('status').should('equal', 200)
    });
  
    it("API test-validate name value", () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/25/', {
        statusCode: 200,
        body: {
          name: 'pikachu',
          id: 25,
          abilities: [
            { ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' } },
            { ability: { name: 'lightning-rod', url: 'https://pokeapi.co/api/v2/ability/31/' } },
          ],
          // other relevant fields can be added here
        }
      }).as('pokemon');
      cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
      cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
    });
  
    it("API test-404 status validation", function () {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/2000/', {
        statusCode: 404,
        body: {
          error: 'Not Found'
        }
      }).as('pokemon');
      cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/2000/',
        failOnStatusCode: false,
      }).as('pokemon')
      cy.get('@pokemon').its('status').should('equal', 404)
    });
  
  });
  