@regression
Feature: Login feature

  Scenario Outline: Log in as Admin

    @smockTest @demo
    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the landing page

    Examples:
      | user_name | password |
      | predix_admin | IM_SO_SECRET |


  Scenario Outline: Log in with incorrect username/password
    @smockTest
    Given I navigate to login page
    When  I authenticate with valid username: <user_name> and password: <password>
    Then  I can see the error message

    Examples:
      | user_name | password |
      | predix_admin | 123456 |
      | predix_notfound | IM_SO_SECRET |
      | predix_notfound | 123456 |



