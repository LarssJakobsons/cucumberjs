Feature: Check the fridge
    Hungry 
    
    Scenario: There's nothing in the fridge
        Given I have an empty fridge
        When I ask whether there is something in the fridge
        Then I should be told "Nothing"

    Scenario: There's something in the fridge
        Given I have a fridge with a banana in it
        When I ask whether there is something in the fridge
        Then I should be told "Banana"