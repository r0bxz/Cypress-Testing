class FormsPage {
    email = ''; 
  
    visit() {
      cy.visit('http://localhost:3000/forms');
      return this; 
    }
  
    getTextField() {
      return cy.get('[test-data="textfield"]');
    }
  
    getButton() {
      return cy.get('[test-data="inputbutton"]');
    }
  
    setEmail(email) {
      this.email = email;
      return this; 
    }
  
    typeEmail() {
      this.getTextField().type(this.email);
      return this; 
    }
  
    clickButton() {
      this.getButton().click();
      return this; 
    }
  
    verifySuccessMessage() {
      cy.contains(`Successfully subbed: ${this.email}!`).should('be.visible');
      return this; 
    }
  }
  
  export default new FormsPage();
  