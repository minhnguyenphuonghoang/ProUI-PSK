@regression
Feature: User management

  Scenario Outline: All users of a tenant will be displayed


    Given I navigate to login page <env>
    When  I authenticate with valid <user_name> and <password>
    Then  I should see the landing page
    When  I navigate to Admin - Users Management page
    When  I select a tenant <tenant>





    Examples:
      | env | user_name | password | tenant |
      | baseUrl | username  | password | Automation_test |
