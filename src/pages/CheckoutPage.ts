import { Page, expect } from "@playwright/test";
export class CheckoutPage {
  constructor(private readonly page: Page) {}
  async expectCartProduct(product: string): Promise<void> {
    await expect(this.page).toHaveURL(/cart\.html/);

    const cartProduct = this.page
      .locator(".cart_item")
      .locator('[data-test="inventory-item-name"]')
      .filter({ hasText: product });

    await expect(cartProduct).toHaveCount(1);
    await expect(cartProduct).toBeVisible();
  }
  async checkout(first: string, last: string, zip: string) {
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
    await expect(this.page.locator('[data-test="title"]')).toHaveText(
      "Checkout: Overview",
    );
    await this.page.locator('[data-test="finish"]').click();
  }
  async expectComplete() {
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText(
      "Thank you for your order!",
    );
  }
}
