const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('getAllProjects', function(){
    cy.request({
        method: 'GET',
        url: '/api/v4/projects',
        headers: {
            Authotization: accessToken
        },
    })
    
})

Cypress.Commands.add('createProject', project =>{
    cy.request({
        method: 'POST', 
        url: '/api/v4/projects',
        body: {
            name: project.name, 
            initialize_with_readme: true
        },
        headers: { Authorization: accessToken },
    })
})

Cypress.Commands.add('api_deleteProjects', () => {
    cy.getAllProjects().then(res => {
      // Usando cy.wrap para garantir que as promessas sejam encadeadas corretamente
      cy.wrap(res.body).each(project => {
        cy.request({
          method: 'DELETE',
          url: `/api/v4/projects/${project.id}`,
          headers: { Authorization: accessToken },
        });
      });
    });
  });