import LoginPage from '../../pages/LoginPage';

const loginPage = new LoginPage();

describe('Login Test - Manual OTP', () => {
  // beforeEach(() => {
  //   cy.get('._8UwPH').click();
  // });
  it('Logs in with mobile/email (manual OTP)', () => {
    loginPage.visit();
    loginPage.openLoginModal();
    loginPage.fillLoginDetails('your-mobile-or-email-here');
    //  Now switch to browser window and manually enter OTP
  });
});
