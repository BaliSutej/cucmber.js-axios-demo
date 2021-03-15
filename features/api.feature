Feature: Random data
  Scenario: call a get api
    Given A post id 1
    When I make a api call using postid 
    Then I get a response  

  Scenario: call a post api
    Given A user with data 1 , "title" and "body"
    When I make a api post 
    Then I get a response with status code 201

  Scenario Outline: updating resources
    Given A <postid>, "<title>" , "<body>" for 1
    When api update call is made
    Then I get a response with <statuscode>

    Examples:
        | postid | title | body | statuscode |
        |   1    | pibu  | bear | 200        |
        |   -1   | bupi  | bear | 200        |


  Scenario: call a delete api
    Given A postid 1
    When api delete call is made
    Then I get a response with code 200

