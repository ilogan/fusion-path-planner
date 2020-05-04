import { addCollection, addWrapper } from '../utils/shortcuts';

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
    // addCollection(this.creaturesCollection);
    addCollection(this.craftingCollection);
  });

  it('hosts links to a new collection home screen with correct id', function () {
    // const id = this.craftingCollection.id;
    const id = 1;
    cy.get('table').contains(this.craftingCollection.name).click();
    cy.url().should('include', `/collections/${id}`);
  });

  it('has the name of the collection in the nav bar', function () {
    const name = this.craftingCollection.name;
    cy.contains(name);
  });

  it('can enter a wrapper with fields', function () {
    // addWrapperWithFields(this.craftingCollection.wrappers[0]);
    addWrapper(this.craftingCollection.wrappers[0]);
    addWrapper(this.craftingCollection.wrappers[1]);
    addWrapper(this.craftingCollection.wrappers[2]);
    addWrapper(this.craftingCollection.wrappers[3]);
    // addWrapper(this.craftingCollection.wrappers[4]);
    // addWrapper(this.craftingCollection.wrappers[5]);
    // addWrapper(this.craftingCollection.wrappers[6]);
    // addWrapper(this.craftingCollection.wrappers[7]);
  });

  it('can save the wrappers', function () {
    cy.contains('Save').click();
    cy.contains('Fusion Path Planner').click();
    cy.get('table').contains(this.craftingCollection.name).click();
    cy.contains(this.craftingCollection.wrappers[1].name);
  });

  it('links to the tree screen', function () {
    cy.contains('Tree').click();
  });

  it('can enter an item with no children or fields', function () {
    cy.get('#wrapper').select('T0');
    cy.get('#nodeType').type('Dirt');
    cy.contains('Finalize Item').click();
    cy.get('#wrapper').select('T1');
    cy.get('#nodeType').type('Copper Ore');
    cy.contains('Finalize Item').click();
    cy.get('#wrapper').select('T1');
    cy.get('#nodeType').type('Iron Ore');
    cy.contains('Finalize Item').click();
    cy.get('#wrapper').select('T2');
    cy.get('#nodeType').type('Copper Bar');
    cy.contains('Finalize Item').click();
    cy.get('#wrapper').select('T2');
    cy.get('#nodeType').type('Iron Bar');
    cy.contains('Finalize Item').click();
    cy.get('#wrapper').select('T3');
    cy.get('#nodeType').type('Iron Helmet');
    cy.contains('Finalize Item').click();
    cy.contains('Save').click();
  });
});
