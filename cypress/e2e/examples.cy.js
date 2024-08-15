// cypress/integration/examples.spec.js

import ExamplesPage from '../pageObjects/ExamplesPage';

describe('Examples Tests', () => {
  beforeEach(() => {
    ExamplesPage.visit();
  });

  it('multi-page testing', () => {
    ExamplesPage
      .navigateToFundamentals()
      .verifyPagePath('/fundamentals')
      .navigateToOverview()
      .verifyPagePath('/overview')
      .navigateToExamples()
      .verifyPagePath('/examples');
  });

  it('intercept', () => {
    cy.visit('http://localhost:3000/examples')
    ExamplesPage
      .interceptExamplesPost();
    
    cy.get('[test-data="post"]').click();
  });

  it('grudges', () => {
    cy.visit('http://localhost:3000/examples')
    ExamplesPage
      .verifyGrudgeCount(0)
      .addGrudge('my first grudge')
      .verifyGrudgeCount(1)
      .addGrudge('my second grudge')
      .verifyGrudgeCount(2)
      .verifyGrudgeContent(0, 'my first grudge')
      .removeGrudge(0)
      .verifyGrudgeCount(1)
      .clearGrudges()
      .verifyGrudgeCount(0);
  });
});
