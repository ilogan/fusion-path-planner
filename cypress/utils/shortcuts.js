export function addCollection({ name, tier, isPrefix, node }) {
  cy.get('#collection').type(name);
  cy.get('#tier').type(tier);
  if (!isPrefix) cy.get('#post').click();
  cy.get('#node').type(node);
  cy.get('button').contains('Add').click();
  cy.get('table')
    .should('contain', name)
    .and('contain', tier)
    .and('contain', node);
}
