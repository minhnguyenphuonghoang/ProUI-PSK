@regression
Feature: Signup feature

  Scenario Outline: Sign up a user with all valid information

    When  I open the registration link temp

    Examples:
      | env | user_name | password |
      | baseUrl | username  | password |
