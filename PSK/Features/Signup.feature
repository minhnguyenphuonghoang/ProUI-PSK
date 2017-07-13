@regression
Feature: Signup feature

  Scenario Outline: Sign up a user with all valid information

    Given I navigate to signup page <env>
    When  I sign up with valid <email_address>, <first_name>, <last_name>, <reason>
    Then  I should see the sign up successful message
    When  I navigate to login page <env>
    And   I log in with Admin role
    Then  I should see the landing page
    When  I navigate to Admin - Users Management page
    Then  I can accept the account registration request
    When  I sign out
    When  I open the registration link
    Then  I can create password
    Then  I should see the landing page

    Examples:
      | env | user_name | password |
      | baseUrl | username  | password |




