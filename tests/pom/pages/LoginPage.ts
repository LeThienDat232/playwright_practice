import {Page,Locator} from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly loginHeading: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginHeading = page.getByRole('heading' , {
            name: 'Login to TechMart',
            exact: true
        })
        this.emailInput = page.getByLabel('Email Address',{
            exact: true,
        });
        this.passwordInput = page.getByLabel('Password',{
            exact: true,
        });
        this.loginButton = page.getByRole('button',{
            name: 'Login',
            exact: true
        });
        this.errorMessage = page.locator('#errorMessage');
    }

    async goto(){
        await this.page.goto('/login.html')
    }

    async login(email:string , password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}
