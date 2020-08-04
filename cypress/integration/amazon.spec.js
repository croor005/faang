describe('Searching FAANG', () => {

    const YAML = require('yamljs')

    it('Amazon', () => {

        cy
            .readFile('/Users/croor005/Webstorm/faang/.github/workflows/End_To_End_tests.yml')
            .then((str) => {
                // parse the string into object literal
                const data = YAML.parse(str)

                cy.log(data.HELLO_TEST)
            })
    })
})
