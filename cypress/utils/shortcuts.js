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

export function addWrapperWithFields({ name, tier, fields }) {
  cy.get('#wrapper').type(name);
  if (+tier !== 0) cy.get('#tier').type(tier);
  for (let i = 0; i < fields.length; i++) {
    cy.get('button').contains('+ Add Field').click();
    cy.get(`#label-${i}`).type(fields[i]['label']);
    cy.get(`#value-${i}`).type(fields[i]['value']);
  }
  cy.get('button').contains('Finalize Wrapper').click();
  cy.contains(name);
  cy.contains(tier);
}

export function addWrapper({ name, tier }) {
  cy.get('#wrapper').type(name);
  cy.get('#tier').type(tier);
  cy.get('button').contains('Finalize Wrapper').click();
  cy.contains(name);
  cy.contains(tier);
}
