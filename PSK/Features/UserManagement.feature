@regression
Feature: User management

  @demo @smockTest
  Scenario Outline: Accept a registration request

    Given I navigate to signup page
    When  I sign up with valid email address: <email>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    When  I select a tenant: <tenant>
    And   I can accept the account registration request
    Then  User with email: <email> no longer in Pending Request tab

    Examples:
      | email | first_name | last_name | tenant | reason | user_name | password |
      | psk_autotestaabbcc@mailinator.com | Automation | Test | Automation_test | This is a reason | predix_admin | IM_SO_SECRET |

