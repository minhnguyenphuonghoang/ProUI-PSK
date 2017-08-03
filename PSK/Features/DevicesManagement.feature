@regression
Feature: User management

  @demo @smockTest
  Scenario Outline: Accept a device registration request
    Given I navigate to login page
    When  I authenticate with valid username: <username> and password: <password>
    Then  I can see the landing page

    When  I navigate to Device Registration
    When  I register a

    Examples:
      | username | password | admin_username | admin_password |
      | predix_user | IM_SO_SECRET | predix_admin | IM_SO_SECRET |





