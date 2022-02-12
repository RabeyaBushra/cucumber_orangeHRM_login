 Feature: Login to an HRM portal

  Scenario Outline:  login to portal with invalid credentials
    Given User visits HRM portal
    When User enters invalid "<username>" and "<password>"
    Then User can not log in successfully
    Examples:
      | username | password |
       |user1     |1234      |
    |user2 | 234          |
    |user3 |3456          |