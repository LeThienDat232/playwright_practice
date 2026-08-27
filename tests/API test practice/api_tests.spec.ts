import{test, expect} from '@playwright/test';
import { request } from 'node:http';

test('Post call example with Token and Booking ID' , async({request}) => {

    const authData = {
    "username" : "admin",
    "password" : "password123"
    };
    
    const response = await request.post('https://restful-booker.herokuapp.com/auth',{
        headers:{"Content-Type": "application/json"},
        data: authData
    });

    console.log(response.status());
    
    const responseData = await response.json();

    expect(responseData.Token).not.toBeNull();
});

test('Post call example with booking id', async({request}) => {

    const bookingData = {
        "firstname" : "Dat",
        "lastname" : "Dat",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
};
    

    const response = await request.post('https://restful-booker.herokuapp.com/booking',{
        headers:{"Content-Type": "application/json"},
        data: bookingData
    });

    console.log(response.status());
    
    const responseData = await response.json();

    console.log(responseData);

    expect(responseData.bookingid).not.toBeNull();

    expect(responseData.booking.firstname).toBe('Dat');


});