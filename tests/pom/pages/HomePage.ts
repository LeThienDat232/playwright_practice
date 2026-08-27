import {Page, Locator} from '@playwright/test'

export class HomePage {

    readonly page: Page;
    readonly welcomeHeading: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;


    constructor(page: Page){

        this.page = page
        this.welcomeHeading = page.getByRole('heading', {
            name: 'Welcome to TechMart',
            exact: true
        })
        this.searchInput = page.getByRole('textbox' , {
            name: 'Search products',
            exact: true
        })
        this.searchButton = page.getByRole('button', {
            name: 'Search',
            exact: true
        })


    }

    async goto(){
        await this.page.goto('/');
    }

    async searchFor(productName: string){
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    productCard(productName: string){
        return this.page.locator('.product-card').filter({
            has: this.page.getByRole('heading', {
                name: productName,
                exact: true,
            }),
        });
    }

    userGreeting(userName: string){
        return this.page
            .locator('#authArea')
            .getByText(`Hi, ${userName} `,{
                exact: true,
            });
    }
}