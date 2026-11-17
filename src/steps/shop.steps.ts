import { Given, When, Then } from "@cucumber/cucumber";
import { TestWorld } from "../support/world";
import { users } from "../data/users";
import { CheckoutPage } from "../pages/CheckoutPage";
Given("I open SauceDemo", async function (this: TestWorld) {
  await this.login.open();
});
When("I log in as a standard user", async function (this: TestWorld) {
  await this.login.login(users.standard.username, users.standard.password);
});
When("I log in as a locked out user", async function (this: TestWorld) {
  await this.login.login(users.locked.username, users.locked.password);
});
Then("I should see the inventory page", async function (this: TestWorld) {
  await this.inventory.expectLoaded();
});
Then("I should see a locked out error", async function (this: TestWorld) {
  await this.login.expectError("locked out");
});
When(
  "I add {string} to the cart",
  async function (this: TestWorld, name: string) {
    await this.inventory.addProduct(name);
  },
);
Then(
  "the cart badge should show {int}",
  async function (this: TestWorld, count: number) {
    await this.inventory.expectCartCount(count);
  },
);
When("I open the cart", async function (this: TestWorld) {
  await this.inventory.openCart();
});
Then(
  "the cart should contain {string}",
  async function (this: TestWorld, product: string) {
    await this.page.locator('[data-test="shopping-cart-link"]').click();

    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.expectCartProduct(product);
  },
);
When(
  "I complete checkout with {string}, {string}, and {string}",
  async function (this: TestWorld, first: string, last: string, zip: string) {
    await this.checkout.checkout(first, last, zip);
  },
);
Then("I should see the order confirmation", async function (this: TestWorld) {
  await this.checkout.expectComplete();
});
