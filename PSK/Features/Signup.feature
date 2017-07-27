@regression
Feature: Signup feature

  @smokeTest
  Scenario Outline: Sign up a user with all valid information

    Given I navigate to signup page
    When  I sign up with valid email address: <email_address>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    When  I navigate to login page
    And   I log in with Admin role
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    Then  I can accept the account registration request of email: <email_address>
    When  I sign out
    When  I open the registration link
    Then  I can create password
    Then  I can see the landing page

    Examples:
      | email_address | first_name | last_name | tenant | reason |
      | psk_test123@mailinator.com | Automation | Test | Automation_test | This is a reason |




  Scenario Outline: Sign up a user with a/some empty required field

    Given I navigate to signup page
    When  I sign up with valid email address: <email_address>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    When  I navigate to login page
    And   I log in with Admin role
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    Then  I can accept the account registration request of email: <email_address>
    When  I sign out
    When  I open the registration link
    Then  I can create password
    Then  I can see the landing page

    Examples:
      | email_address | first_name | last_name | tenant | reason |
      | psk_test123@mailinator.com | Automation | Test | Automation_test | This is a reason |
      | psk_test123@mailinator.com |            | Test | Automation_test | This is a reason |
      | psk_test123@mailinator.com | Automation |      | Automation_test | This is a reason |
      | psk_test123@mailinator.com | Automation | Test |                 | This is a reason |
      | psk_test123@mailinator.com | Automation | Test | Automation_test |                  |
      |                            |            |      |                 |                  |


