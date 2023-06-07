Feature: Check the fridge
    Hungry 
    
    Scenario: There's nothing in the fridge
        Given I have an empty fridge
        When I ask whether there is something in the fridge
        Then I should be told "Nothing"