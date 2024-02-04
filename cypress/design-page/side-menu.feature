Feature: Design page menu

    Background: Visit design page
        When I visit the design page
        Then I see plant options listed
        
    Scenario: There is a 'Filters -' button in the side menu that reveals filters when clicked
        Then I see "Filters +"
        And I see 'reset filters'
        When I click 'Filters +'
        Then I see 'Filters -'
        And I see a 'category' dropdown
        And I see a 'nitrogen fixer' checkbox
        And I see a 'insect attractor' checkbox
        And I see a 'nutrient accumulator' checkbox
        When I click 'Filters -'
        Then I do not see a 'category' dropdown

    Scenario: I can see a list of plants
        Then I see 'Alyssum' in the plant options
        And I see 'Garlic cress' in the plant options
        And I see 'Plum' in the plant options

    Scenario: The plant options include information about a plant
        Then I see 'Apple' in the plant options
        And I see 'Max Spread: 1.5m' in the plant option info
        And I see 'Max Height: 1.8m' in the plant option info
        And I see 'Root Stock: M27' in the plant option info
        And I see 'insect attractor' in the plant option info
        And I see 'small tree' in the plant option info
        And I see an image in the plant option info with 'apple' as the alt text

    Scenario: The category dropdown filters lists all categories
        When I click 'Filters +'
        Then I see a 'category' dropdown
        And I see "small trees" in the "category" dropdown options
        And I see "shrubs" in the "category" dropdown options
        And I see "perennial vegetables" in the "category" dropdown options
        And I see "ornamental perennials" in the "category" dropdown options
        And I see "common herbs" in the "category" dropdown options
        And I see "bulbs" in the "category" dropdown options
        And I see "ground cover" in the "category" dropdown options
        And I see "root crops" in the "category" dropdown options
        And I see "green manures" in the "category" dropdown options
        And I see "climbers" in the "category" dropdown options

    Scenario: I can add a plant to the canvas via the menu
        When I click "alyssum"
        Then I see a card with text "alyssum" in the canvas

    Scenario: Filtering by category
        When I click 'Filters +'
        And I select 'bulbs' from the 'category' dropdown
        Then I see 'Crocus' in the plant options
        And I do not see 'Alyssum' in the plant options
        And all listed plant options have the 'bulb' tag

    Scenario: Filtering by function
        When I click 'Filters +'
        And I click the 'nitrogen fixer' checkbox
        Then I see 'Autumn Olive' in the plant options
        And I do not see 'Alyssum' in the plant options
        And all listed plant options have the 'nitrogen fixer' tag

    Scenario: Filtering by category & function
        When I click 'Filters +'
        And I select 'shrubs' from the 'category' dropdown
        And I click the 'insect attractor' checkbox
        Then I see 'Blackcurrant' in the plant options
        And I do not see 'Alyssum' in the plant options
        And all listed plant options have the 'insect attractor' tag
        And all listed plant options have the 'shrub' tag

    Scenario: Resetting filters
        Then I see 'Alyssum' in the plant options
        When I click 'Filters +'
        And I click the 'nitrogen fixer' checkbox
        And I click 'Filters -'
        Then I see 'Autumn Olive' in the plant options
        And I do not see 'Alyssum' in the plant options
        When I click 'reset filters'
        Then I see 'Autumn Olive' in the plant options
        And I see 'Alyssum' in the plant options

    Scenario: Reversing an applied filter
        Then I see 'Alyssum' in the plant options
        When I click 'Filters +'
        And I click the 'nitrogen fixer' checkbox
        And I click 'Filters -'
        Then I see 'Autumn Olive' in the plant options
        And I do not see 'Alyssum' in the plant options
        When I click 'Filters +'
        And I click the 'nitrogen fixer' checkbox
        And I click 'Filters -'
        And I see 'Alyssum' in the plant options
        Then I see 'Autumn Olive' in the plant options




