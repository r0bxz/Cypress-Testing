// cypress/pageObjects/FundamentalsPage.js

class FundamentalsPage {
    visit() {
      cy.visit('http://localhost:3000/fundamentals');
    }
  
    getHeader() {
      return cy.get('[test-data="header"]');
    }
  
    getFirstElement() {
      return cy.get('[test-data="1"]');
    }
  
    getButton() {
      return cy.get('[test-data="1"] div[role="button"]');
    }
  
    getParagraph() {
      return cy.get('[test-data="1"] div[role="paragraph"]');
    }
  
    verifyParagraphVisible() {
      return cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
    }
  
    verifyParagraphNotVisible() {
      return cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    }
  }
  
  export default new FundamentalsPage();
  