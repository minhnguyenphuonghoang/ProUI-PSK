@regression
Feature: User Can Sign Up

  Scenario Outline: Sign up a user with all valid information

    Given I navigate to <env>
    When  I sign up with valid <email_address>, <first_name>, <last_name>, <reason>, <password>,
    Then  I should see the sign up successful message
    When  Admin accepts the sign up request
    Then  I can use <username> and <password> to log in
    And   I should see the landing page


    Examples:
      | env | user_name | password |
      | baseUrl | username  | password |




