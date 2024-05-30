/// <reference types = "Cypress" />
describe("REST API Test with cypress",()=>{
    before('visiting',()=>{
        cy.visit('https://pokeapi.co/?ref=apilist.fun')
    })
    it("API test-header validator",()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type').should('include','application/json; charset=utf-8')
    });
    it("API test-header validator",()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('status')
        .should('equal',200)
    });
    it("API test-validate name value",()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('body')
        .should('include',{name:'pikachu'})
    });
    it("API test-404 status validation",function(){
        cy.request({
            method:'GET',
            url:'https://pokeapi.co/api/v2/pokemon/2000/',
            failOnStatusCode: false,
        }).as('pokemon')
        cy.get('@pokemon').its('status')
        .should('equal',404)
    });

})
