Feature: is positive number

  Scenario: 5 is a positive number 
    Given number 5
    When i ask if 5 + or - 
    Then I should receive 'positive'


  Scenario: -2 is a negative number 
    Given number -2
    When i ask if -2 + or - 
    Then I should receive 'negative'