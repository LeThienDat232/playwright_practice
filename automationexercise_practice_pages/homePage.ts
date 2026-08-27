import {Page, Locator} from '@playwright/test'

export class HomePage{

    readonly page: Page;
    readonly signup_loginButton: Locator;
    readonly deleteAccountButton: Locator;
    readonly continueButtonAfterDeletedAnAccount: Locator;
    readonly logoutButton: Locator;


    constructor(page: Page){

        this.page = page;
        this.signup_loginButton = page.getByRole('link', {name: ' Signup / Login'});
        this.deleteAccountButton = page.getByRole('link', {name: ' Delete Account'});
        this.continueButtonAfterDeletedAnAccount = page.getByRole('link',{name: 'Continue'});
        this.logoutButton = page.getByRole('link',{name: ' Logout'});

    }

    async goto(){
        await this.page.goto('/');
    }

    loggedInAsUser(userName: string){
        return this.page
                .getByText(` Logged in as ${userName} `,{
                exact: true,
            });
    }

    newUserSignUp(){
        return this.page
                .getByText(`New User Signup!`,{
                exact: true,
            });
    }

    accountDeleted(){
        return this.page
                .getByRole('heading')
                .getByText(`Account Deleted!`,{
                exact: true,
            });
    }
}