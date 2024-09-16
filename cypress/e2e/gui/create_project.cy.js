import { faker } from '@faker-js/faker'
const options = { env: { snapshotOnly: true }}

describe('Create a new project', options, function(){

    it('Create a new project', function(){

        const project = {
            name: `project-${faker.datatype.uuid()}`
        }
        cy.login()
        cy.create_project_gui(project)
        })
        
    })

