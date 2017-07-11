@regression
Feature: User Can Login

  Scenario Outline: US6400:Login as admin and view Asset Management

    Given I navigate to <env>
    When  I authenticate with valid <user_name> and <password>
    Then  I should see the landing page


    Examples:
      | env | user_name | password |
      | baseUrl | username  | password |
