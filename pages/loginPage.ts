import { Page } from "@playwright/test";
export default class LoginPage {

constructor(public page: Page) { }

async enterEmail(emailaddress: string) {
await this.page.locator("input[name='email']")
.fill(emailaddress);
}

async enterLoginPassword(password: string) {
await this.page.locator("input[name='password']")
.fill(password);
}

async clickLoginBtn(){
await this.page.click("input[value='Login']");
}
}