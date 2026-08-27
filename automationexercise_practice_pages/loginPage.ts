import {Page, Locator} from '@playwright/test'
import { randomUUID } from 'node:crypto';


export class LoginPage{

    readonly page: Page;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly registerNameInput: Locator;
    readonly registerEmailInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page){

        this.page = page;
        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button' , {name: 'Login'});
        this.registerNameInput = page.getByPlaceholder('Name');
        this.registerEmailInput = page.locator('[data-qa="signup-email"]');
        this.registerButton = page.getByRole('button' , {name: 'Signup'});

    }

    async goToLoginPage(){
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(email: string, password: string){
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async register(name: string, email: string){
        await this.registerNameInput.fill(name);
        await this.registerEmailInput.fill(email);
        await this.registerButton.click();
    }

    
    generateRandomEmail = () => 
    `test.${randomUUID().slice(0,6)}@example.com`;

    generateRandomName = () => 
    `test.${randomUUID().slice(0,3)}`;

    loginCheckVisibility(){
        return this.page
        .getByRole('heading')
        .getByText(`Login to your account`,{
                exact: true,
            });
    }

    errorMessageInvalidCredential(){
        return this.page
        .getByText(`Your email or password is incorrect!`,{
                exact: true,
            });
    }


}

export class SignUpPage{

    readonly page: Page;
    readonly titleLableMr: Locator;
    readonly titleLableMrs: Locator;
    readonly nameInput: Locator;
    readonly passwordInput: Locator;
    readonly dayOfBirth_day: Locator;
    readonly dayOfBirth_month: Locator;
    readonly dayOfBirth_year: Locator;
    readonly checkBox_signupForNewsletter: Locator;
    readonly checkBox_reciveSpecialOffers: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressOneInput: Locator;
    readonly addressTwoInput: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly enterAccountInformation: Locator;
    readonly continueButtonAfterCreatedAnAccount: Locator;

    constructor(page: Page){

        this.page = page;
        this.titleLableMr = page.locator('#id_gender1');
        this.titleLableMrs = page.locator('#id_gender2');
        this.nameInput = page.locator('#name');
        this.passwordInput = page.locator('#password');
        this.dayOfBirth_day = page.locator('select#days');
        this.dayOfBirth_month = page.locator('select#months');
        this.dayOfBirth_year = page.locator('select#years');
        this.checkBox_signupForNewsletter = page.getByLabel('Sign up for our newsletter!');
        this.checkBox_reciveSpecialOffers = page.getByLabel('Receive special offers from our partners!');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressOneInput = page.locator('#address1');
        this.addressTwoInput = page.locator('#address2');
        this.countrySelect = page.locator('select#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.getByRole('button',{name: 'Create Account'});
        this.enterAccountInformation = page.getByRole('heading', {
            name: 'Enter Account Information',
            exact: true
        })
        this.continueButtonAfterCreatedAnAccount = page.getByRole('link',{name: 'Continue'});
    }

    accountCreated(){
        return this.page
                .getByText(`Account Created!`,{
                exact: true,
            });
    }

    errorMessageEmailAlreadyEnxisted(){
        return this.page
        .getByText(`Email Address already exist!`,{
                exact: true,
            });
    }
}



