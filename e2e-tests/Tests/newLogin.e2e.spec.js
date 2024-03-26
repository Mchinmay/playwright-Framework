const {test, expect} = require('@playwright/test');
 const {customtest} = require('../Test-Data/utils/test-base');

 const {POManager} = require('../pageobjects/POManager');

 const dataset =  JSON.parse(JSON.stringify(require("../Test-Data/utils/placeorderTestData.json")));

customtest(`Client App login`, async ({page,testDataForOrder})=>
 {
   const poManager = new POManager(page);

     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
})