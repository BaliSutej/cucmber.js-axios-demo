Feature: Random data
  Scenario: call a api
    Given A user id 1
    When I make a api call using user id 1
    Then I get a response
