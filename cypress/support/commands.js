Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#firstName').type('Lucas')
  cy.get('#lastName').type('oliveira')
  cy.get('#email').type('lucasoliveirabd30@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()

})