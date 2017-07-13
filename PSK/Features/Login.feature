@regression
Feature: Login feature

  Scenario Outline: Login as Admin

    Given I navigate to login page <env>
    When  I authenticate with valid <user_name> and <password>
    Then  I should see the landing page

    Examples:
      | env | user_name | password |
      | baseUrl | username  | password |
