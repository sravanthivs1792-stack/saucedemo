import { World, setWorldConstructor } from '@cucumber/cucumber';
import type { BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
export class TestWorld extends World {
  context!: BrowserContext;
  page!: Page;
  get login() { return new LoginPage(this.page); }
  get inventory() { return new InventoryPage(this.page); }
  get checkout() { return new CheckoutPage(this.page); }
}
setWorldConstructor(TestWorld);
