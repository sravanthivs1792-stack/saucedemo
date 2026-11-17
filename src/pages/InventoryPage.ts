import { Page, expect } from '@playwright/test';
export class InventoryPage {
  constructor(private readonly page: Page) {}
  async expectLoaded() { await expect(this.page.locator('[data-test="inventory-container"]')).toBeVisible(); }
  async addProduct(name: string) {
    const item = this.page.locator('[data-test="inventory-item"]').filter({hasText:name});
    await item.getByRole('button',{name:'Add to cart'}).click();
  }
  async openCart() { await this.page.locator('[data-test="shopping-cart-link"]').click(); }
  async expectCartCount(count: number) { await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(String(count)); }
}
