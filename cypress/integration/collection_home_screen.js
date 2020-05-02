import { addCollection } from '../utils/shortcuts';

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

  it('performs setup', function () {
    addCollection(this.creaturesCollection);
    addCollection(this.craftingCollection);
  });

  it('hosts links to a new collection home screen with correct id', function () {
    const id = this.craftingCollection.id;
    cy.get('table').contains(this.craftingCollection.name).click();
    cy.url().should('include', `/collections/${id}`);
  });

  it('has the name of the collection in the nav bar', function () {
    const name = this.craftingCollection.name;
    cy.contains(name);
  });
});
