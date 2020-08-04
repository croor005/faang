describe('Searching FAANG', () => {

    const YAML = require('yamljs')

    it('Amazon', () => {

        cy
            .readFile('.github/workflows/End_To_End_tests.yaml')
            .then((str) => {
                // parse the string into object literal
                const data = YAML.parse(str)

                cy.log(data)
            })
    })
})
