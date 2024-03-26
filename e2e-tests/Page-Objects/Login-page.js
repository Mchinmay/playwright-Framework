class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.signInbutton = page.locator(/*Add Locator*/);
        this.userName = page.locator(/*Add Locator*/);
        this.password = page.locator(/*Add Locator*/);
    
    }
    
    async goTo()
    {
        await this.page.goto(/*Add URL*/);
    }
    
    async validLogin(username,password)
    {
        await  this.userName.fill(username);
         await this.password.fill(password);
         await this.signInbutton.click();
         await this.page.waitForLoadState('networkidle');
    }
    
    }
    module.exports = {LoginPage};