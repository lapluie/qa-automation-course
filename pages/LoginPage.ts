import { type Page, type Locator, expect } from "@playwright/test";
import { CartPage } from "./CartPage";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectSuccessfulLogin(): Promise<void> {
        const cartPage = new CartPage(this.page);
        await expect(cartPage.cartTitle).toHaveText('Products');
    }

    async expectErrorVisible() {
        await expect(this.errorMessage).toBeVisible();
    }

    async getErrorMessage(): Promise<string> {
        return await this.errorMessage.innerText();
    }
}