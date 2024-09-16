const options = { env: { snapshotOnly: true }}

describe('Logout', options, function() {
    it('logout', function(){
        cy.visit('/')
        cy.login()
        cy.logout()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
     })
    
})