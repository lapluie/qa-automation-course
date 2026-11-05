import { type Page, type Locator, expect } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.title');
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
        await this.expectPageLoaded();
    }

    async addProductToCart(productId: string): Promise<void> {
        await this.page.locator(`#add-to-cart-${productId}`).click();
    }

    async expectPageLoaded(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Products');
    }

    async expectBrokenImages(): Promise<void> {
        const images = this.page.locator('.inventory_item_img img');
        const count = await images.count();
  
        // Sanity: изображения вообще есть
        expect(count).toBeGreaterThan(0);

        // Получаем src всех изображений
        const srcList: string[] = [];
        for (let i = 0; i < count; i++) {
            const src = await images.nth(i).getAttribute('src');
            srcList.push(src || '');
        }

        // У problem_user все src одинаковые (заглушка с собакой)
        const uniqueSources = new Set(srcList);
  
        // Проверяем, что ВСЕ src одинаковые = проблема!
        expect(uniqueSources.size).toBe(1);
  
        // Дополнительно: проверяем, что это именно заглушка (имя файла сломанной картинки)
        const brokenImageSrc = srcList[0];
        expect(brokenImageSrc).toContain('sl-404');  // saucedemo использует "sl-404" для сломанных картинок
    }

    async expectDistinctImages(): Promise<void> {
        const images = this.page.locator('.inventory_item_img img');
        const count = await images.count();
  
        const srcList: string[] = [];
        for (let i = 0; i < count; i++) {
            const src = await images.nth(i).getAttribute('src');
            srcList.push(src || '');
        }

        const uniqueSources = new Set(srcList);
        // У обычного пользователя каждая картинка уникальна
        expect(uniqueSources.size).toBe(count);
    }
}