import {test,expect} from '@playwright/test'
import {LoginPage, SignUpPage} from '../../automationexercise_practice_pages/loginPage'
import {HomePage} from '../../automationexercise_practice_pages/homePage'

test('register test' , async({page}) => {

    const loginPage = new LoginPage(page);
    const signUpPage = new SignUpPage(page);
    const homePage = new HomePage(page);
        
        await homePage.goto();
        await expect(page).toHaveURL('/');
        await homePage.signup_loginButton.click();
        expect(await homePage.newUserSignUp()).toBeVisible;
    
        const testEmail: string = loginPage.generateRandomEmail();
        const testName: string = loginPage.generateRandomName();
    
        await loginPage.register(testName,testEmail)
    
        await expect(signUpPage.enterAccountInformation).toBeVisible;
    
        await signUpPage.titleLableMr.check();
        await signUpPage.nameInput.fill('Test testing');
        await signUpPage.passwordInput.fill('Test@123');
        await signUpPage.dayOfBirth_day.selectOption('1');
        await signUpPage.dayOfBirth_month.selectOption('May');
        await signUpPage.dayOfBirth_year.selectOption('1999');
        await signUpPage.checkBox_signupForNewsletter.check();
        await signUpPage.checkBox_reciveSpecialOffers.check();
        await signUpPage.firstNameInput.fill('testing');
        await signUpPage.lastNameInput.fill('Test');
        await signUpPage.companyInput.fill('Company A');
        await signUpPage.addressOneInput.fill('Address 1 test');
        await signUpPage.addressTwoInput.fill('Address 2 test');
        await signUpPage.countrySelect.selectOption('Canada');
        await signUpPage.stateInput.fill('State A');
        await signUpPage.cityInput.fill('City B');
        await signUpPage.zipcodeInput.fill('190000');
        await signUpPage.mobileNumberInput.fill('01113123123');
        await signUpPage.createAccountButton.click();
    
        await(expect(signUpPage.accountCreated()).toBeVisible);
    
        expect(await homePage.loggedInAsUser(testName)).toBeVisible;

        await signUpPage.continueButtonAfterCreatedAnAccount.click();

        await homePage.deleteAccountButton.click();
    
        await homePage.continueButtonAfterDeletedAnAccount.click();

        await(expect(homePage.accountDeleted()).toBeVisible);
    
})