Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Thuanny')
    cy.get('#lastName').type('Dias')
    cy.get('#email').type('thuanny@exemplo.com')
    cy.get('#open-text-area').type('Fazendo apenas um teste.')
    cy.contains('button', 'Enviar').click()
})
