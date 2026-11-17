import { Page, expect } from '@playwright/test';
export class LoginPage {
  constructor(private readonly page: Page) {}
  async open() { await this.page.goto('https://www.saucedemo.com/', {waitUntil:'domcontentloaded'}); }
  async login(username: string, password: string) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }
  async expectError(message: string) { await expect(this.page.locator('[data-test="error"]')).toContainText(message); }
}
