import FormsPage from '../pageObjects/FormsPage'; 

describe('Forms', () => {
  it('should enter an email and display success message', () => {
    const email = 'mahmoud@gmail.com'; 

    FormsPage
      .visit()
      .setEmail(email)
      .typeEmail()
      .clickButton()
      .verifySuccessMessage(); 

  });
});
