describe('Searching FAANG', () => {

    const YAML = require('yamljs')

    it('Amazon', () => {

        cy
            .readFile('.github/workflows/special.yaml')
            .then((str) => {
                // parse the string into object literal
                const data = YAML.parse(str)

                cy.log(data)
            })
    })
})
