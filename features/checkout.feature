Feature: Checkout
  @regression
  Scenario: Standard user completes a purchase
    Given I open SauceDemo
    When I log in as a standard user
    And I add "Sauce Labs Backpack" to the cart
    And I open the cart
    And I complete checkout with "Alex", "Tester", and "3011AA"
    Then I should see the order confirmation
