import {test,expect} from '@playwright/test'
import {LoginPage, SignUpPage} from '../../automationexercise_practice_pages/loginPage'
import {HomePage} from '../../automationexercise_practice_pages/homePage'
import { request } from 'node:http';

test('login correct test with APIs' , async({page,request}) => {
    
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    const registerData = {
        "name" = "Dat",
        "email" =  "test@gmail.com",
    }


})