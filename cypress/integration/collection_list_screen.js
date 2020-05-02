describe('The Collection Screen', () => {
  const creatureCollection = {
    name: 'Creature Game',
    tier: 'Stars',
    isPrefix: false,
    node: 'Creature',
  };

  const craftingCollection = {
    name: 'Crafting Game',
    tier: 'Tier',
    isPrefix: true,
    node: 'Item',
  };

  it('successfully loads', () => {
    cy.visit('/collections');
  });

  it('can add a collection to the list', () => {
    addCollection(creatureCollection);
    addCollection(craftingCollection);
  });
});

function addCollection({ name, tier, isPrefix, node }) {
  cy.get('#collection').type(name);
  cy.get('#tier').type(tier);
  if (!isPrefix) cy.get('#post').click();
  cy.get('#node').type(node);
  cy.get('button').contains('Add').click();
  cy.get('table').should('contain', name);
  cy.get('table').should('contain', tier);
  cy.get('table').should('contain', node);
}
