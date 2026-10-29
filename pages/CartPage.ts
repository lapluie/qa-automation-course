import { type Page, type Locator, expect} from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly cartBage: Locator;
    readonly cartLink: Locator;
    readonly cartTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartBage = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartTitle = page.locator('.title');
    }

    async getCartCount(): Promise<number> {
        const text = await this.cartBage.innerText();
        return parseInt(text, 10);
    }

    async openCart() {
        await this.cartLink.click();
        await expect(this.cartTitle).toHaveText('Your Cart');
    }

    async expectProductInCart(productName: string) {
        const productItem = this.page.locator('.cart_item').filter( {hasText: productName} );
        await expect(productItem.locator('.inventory_item_name')).toHaveText(productName);
    }

    async getProductPrice(productName: string): Promise<string> {
        const productItem = this.page.locator('.cart_item').filter( {hasText: productName} );
        return await productItem.locator('.inventory_item_price').innerText();
    }
}