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
  });

  it('hosts links to a new collection home screen with correct id', function () {
    const id = this.craftingCollection.id;
    addCollection(this.craftingCollection);
    cy.get('table').contains(this.craftingCollection.name).click();
    cy.url().should('include', `/collections/${id}`);
  });

  it('can navigate back to collections page using logo', function () {
    const id = this.craftingCollection.id;
    cy.contains('Fusion Path Planner').click();
    cy.url().should('include', '/collections').and('not.include', id);
  });
});

function addCollection({ name, tier, isPrefix, node }) {
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
