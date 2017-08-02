@regression
Feature: User management

  @demo @smockTest
  Scenario Outline: Accept a registration request
    Given I have a variable <email>
    When  I print the variable <email>

    Examples:
      | email |
      | psk_automation_test6@mailinator.com |





