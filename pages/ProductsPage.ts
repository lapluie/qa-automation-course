import { type Page, type Locator, expect } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
    }

    async addProductToCart(productId: string): Promise<void> {
        await this.page.locator(`#add-to-cart-${productId}`).click();
    }

    async expectPageLoaded(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Products');
    }

    async expectBrokenImages() {
        const images = this.page.locator('.inventory_item_img img');
        const count = await images.count();
        for (let i = 0; i < count; i++) {
            await expect(images.nth(i)).toHaveAttribute('src', '');
        }
    }
}