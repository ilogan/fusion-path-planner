describe('The Collection Screen', () => {
  beforeEach(function () {
    cy.fixture('collections').then((f) => {
      this.creaturesCollection = f.collections[0];
      this.craftingCollection = f.collections[1];
    });
  });

  it('successfully loads', function () {
    cy.visit('/collections');
  });

  it('can add a collection to the list', function () {
    addCollection(this.creaturesCollection);
    addCollection(this.craftingCollection);
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
