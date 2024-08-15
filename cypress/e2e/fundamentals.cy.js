import FundamentalsPage from '../pageObjects/FundamentalsPage';

describe('fundamentals', () => {
  it('Header Content', () => {
    FundamentalsPage.visit();

    FundamentalsPage.getHeader().should('contain.text', 'Testing Fundamentals');
    
    FundamentalsPage.getFirstElement().click();
    
    FundamentalsPage.verifyParagraphVisible();
    
    FundamentalsPage.getButton().click();
    
    FundamentalsPage.verifyParagraphNotVisible();
  });
});
