Cypress.Commands.add('login', (user = Cypress.env('user_name'), password = Cypress.env('user_password'), { cacheSession = true } = {}, ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get('[data-testid="username-field"]').type(user)
      cy.get('[data-testid="password-field"]').type(password, { log: false })
      cy.get('button[data-testid="sign-in-button"]').click()
    }
    const validate = () =>{
        cy.visit('/')
        cy.location('pathname', {timeout: 1000})
            .should('not.eql', '/users/sign_in')
    }
    const options = {
      cacheAcrossSpecs: true,
      validate, 
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })
  Cypress.Commands.add('loginBySession', function(){
    cy.session( user, () =>{
    cy.visit('/users/sign_in')
    cy.get('[data-testid="username-field"]').type(user)
    cy.get('[data-testid="password-field"]').type(Cypress.env('user_password'), { log: false })
    cy.get('button[data-testid="sign-in-button"]').click()
    })
  })

Cypress.Commands.add('logout', function(){
    cy.visit('/')
    cy.get('button.btn[aria-controls="super-sidebar"]').first().click({force: true})
    cy.get('[data-testid="user-menu-toggle"]').click()
    cy.get('a[data-testid="sign-out-link"]').click()
    cy.get('[data-testid="username-field"]').should('be.visible')
})

Cypress.Commands.add('create_project_gui', project =>{
    cy.visit('/projects/new')
    cy.contains('Create blank project').click()
    cy.get('#project_name').type(project.name)
    cy.get('#dropdown-toggle-btn-35').click()
    cy.get('input[aria-label="Search"]').first().type('root{enter}')
    cy.get('span.gl-new-dropdown-item-content').click()
   
    cy.get('button[data-testid="project-create-button"]').first().click()

    


})