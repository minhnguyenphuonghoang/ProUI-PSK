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
    And   I can accept the account registration request of email: <email>
    Then  User with email: <email> no longer in Pending Request tab

    Examples:
      | email | first_name | last_name | tenant | reason | user_name | password |
      | psk_automation_test3@mailinator.com | Automation | Test | Automation_test | This is a reason | predix_admin | IM_SO_SECRET |


  @demo @smockTest
  Scenario Outline: Decline a registration request

    Given I navigate to signup page
    When  I sign up with valid email address: <email>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    When  I select a tenant: <tenant>
    Then  I can decline the account registration request of email: <email> by a reason: <reason>
    Then  User with email: <email> no longer in Pending Request tab


    Examples:
      | email | first_name | last_name | tenant | reason | user_name | password |
      | psk_automation_test4@mailinator.com | Automation | Test | Automation_test | This is a reason | predix_admin | IM_SO_SECRET |

  @smockTest
  Scenario Outline: Accept with no reason

    Given I navigate to signup page
    When  I sign up with valid email address: <email>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    When  I select a tenant: <tenant>
    And   I can accept the account registration request of email: <email>
    Then  User with email: <email> no longer in Pending Request tab

    Examples:
      | email | first_name | last_name | tenant | reason | user_name | password |
      | psk_automation_test5@mailinator.com | Automation | Test | Automation_test |  | predix_admin | IM_SO_SECRET |

  @smockTest
  Scenario Outline: Decline a registration request

    Given I navigate to signup page
    When  I sign up with valid email address: <email>, first name: <first_name>, last name: <last_name>, tenant: <tenant>, reason <reason>
    Then  I should see the sign up successful message

    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page
    When  I navigate to Admin - Users Management page
    When  I select a tenant: <tenant>
    Then  I can decline the account registration request of email: <email> by a reason: <reason>
    Then  User with email: <email> no longer in Pending Request tab


    Examples:
      | email | first_name | last_name | tenant | reason | user_name | password |
      | psk_automation_test6@mailinator.com | Automation | Test | Automation_test |  | predix_admin | IM_SO_SECRET |





