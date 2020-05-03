export function addCollection({ name, tierType, isPrefix, nodeType }) {
  cy.get('#collection').type(name);
  cy.get('#tierType').type(tierType);
  if (!isPrefix) cy.get('#post').click();
  cy.get('#nodeType').type(nodeType);
  cy.get('button').contains('Add').click();
  cy.get('table')
    .should('contain', name)
    .and('contain', tierType)
    .and('contain', nodeType);
}
