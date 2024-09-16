import { faker } from '@faker-js/faker'

describe('Create a new project', () =>{
    beforeEach(() => cy.api_deleteProjects())
    it('Create a new project', function(){
        const project = {
            name: `project-${faker.datatype.uuid()}`
        }
        cy.createProject(project)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
            })

    })
})

