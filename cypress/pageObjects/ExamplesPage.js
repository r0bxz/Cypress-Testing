class ExamplesPage {
    visit() {
      cy.visit('http://localhost:3000');
    }
  
    navigateToFundamentals() {
      cy.get('[test-data="Fundamentals"]').click();
      return this;
    }
  
    navigateToOverview() {
      cy.get('[test-data="Overview"]').click();
      return this;
    }
  
    navigateToExamples() {
      cy.get('[test-data="Examples"]').click();
      return this;
    }
  
    interceptExamplesPost() {
      cy.intercept("POST", 'http://localhost:3000/examples', { fixture: 'example.json' });
      return this;
    }
  
    getGrudgeList() {
      return cy.get('[test-data="grudge-list"]');
    }
  
    addGrudge(text) {
      cy.get('[test-data="grudge"]').find('input').type(text);
      cy.get('[test-data="grudge-button"]').click();
      return this;
    }
  
    clearGrudges() {
      cy.get('[test-data="clear-button"]').click();
      return this;
    }
  
    verifyGrudgeCount(count) {
      this.getGrudgeList().find('li').should('have.length', count);
      return this;
    }
  
    verifyGrudgeContent(index, text) {
      this.getGrudgeList().find('li').eq(index).should('contain.text', text);
      return this;
    }
  
    removeGrudge(index) {
      this.getGrudgeList().find('li').eq(index).find('button').click();
      return this;
    }
    verifyPagePath(path) {
        cy.location('pathname').should('equal', path);
        return this;
      }
  }
  
  export default new ExamplesPage();
  