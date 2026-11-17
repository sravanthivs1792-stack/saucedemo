import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, type Browser } from '@playwright/test';
import { TestWorld } from './world';
let browser: Browser;
setDefaultTimeout(60_000);
BeforeAll(async () => { browser = await chromium.launch({ headless: process.env.HEADED !== 'true' }); });
Before(async function(this: TestWorld) { this.context = await browser.newContext(); this.page = await this.context.newPage(); });
After(async function(this: TestWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({fullPage:true});
    await this.attach(screenshot,'image/png');
  }
  await this.context.close();
});
AfterAll(async () => { await browser?.close(); });
