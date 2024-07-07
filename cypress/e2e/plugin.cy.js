const { afterEach } = require("mocha");
describe("plugins",()=>{
    beforeEach(()=>{
        cy.eyesOpen({
            appName: 'bukharibooks'
        })
    });
    it('plugins',()=>{
        const baseUrl = Cypress.env('BASE_URL')
        if(!baseUrl){
          throw new Error('BASE_URL enviornmental variable is not defined')
        }
        cy.visit(baseUrl,{ failOnStatusCode: false })
        cy.eyesCheckWindow()
    })
    afterEach(()=>{
        cy.eyesClose()
    })
})
