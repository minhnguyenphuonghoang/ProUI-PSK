@regression
Feature: Organization management

  @demo @smockTest
  Scenario Outline: Can create an organization

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page

    When  I navigate to Admin - Organization page


    Examples:
      | user_name | password | org_name |
      | predix_admin | IM_SO_SECRET | test |

  @demo @smockTest
  Scenario Outline: Can edit an organization

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page

    When  I navigate to Admin - Organization page
    When  I create a new te


    Examples:
      | user_name | password | org_name |
      | predix_admin | IM_SO_SECRET | test |
