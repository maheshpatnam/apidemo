Feature: Login service

  #case1
  Scenario: Test Login service with Valid inputs
    Given Valid user_name  and password
    When we run login service with valid inputs
    Then login service should return 200 status code

  #case2
  Scenario: Test Login service with Invalid inputs
    Given InValid user_name  and password
    When we run login service with Invalid inputs
    Then login service should return 401 status

  #case3
  Scenario: Test Login service with missing inputs
    Given empty user_name  and password
    When we run login service with empty inputs
    Then login service should return 401 status