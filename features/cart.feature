Feature: Shopping cart
  @smoke
  Scenario Outline: Add an item to the cart
    Given I open SauceDemo
    When I log in as a standard user
    And I add "<product>" to the cart
    Then the cart badge should show 1
    When I open the cart
    Then the cart should contain "<product>"

    Examples:
      | product                 |
      | Sauce Labs Backpack     |
      | Sauce Labs Bike Light   |
