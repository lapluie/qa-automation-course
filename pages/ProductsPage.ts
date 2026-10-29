import { type Page, type Locator, expect } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(productId: string) {
        await this.page.locator(`#add-to-cart-${productId}`).click();
    }
}