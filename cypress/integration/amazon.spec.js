describe('Searching FAANG', () => {

    it('Amazon', () => {

        cy.visit("http://www.amazon.com")
        // cy.get('#twotabsearchtextbox').type('Star Trek T-shirts').type('{enter}')
        // cy.get('.a-size-mini > a > span').then(($lis) => {

            for (let i = 0; i < $lis.length; i++) {
               // expect($lis.eq(i).text()).to.match(/Star\sTrek|Enterprise|Federation|Picard/)
            }
            cy.log( "Secrets: " + process.env.HELLO_TEST)
       // })
    })
})
