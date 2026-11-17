Feature: Login validation
  @smoke
  Scenario: Standard user can log in
    Given I open SauceDemo
    When I log in as a standard user
    Then I should see the inventory page

  @regression
  Scenario: Locked out user cannot log in
    Given I open SauceDemo
    When I log in as a locked out user
    Then I should see a locked out error
