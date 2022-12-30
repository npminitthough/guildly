Feature: Design page menu

    Background: Visit design page
        When I visit 'localhost:3000/design'

    Scenario: I can see plant categories in the side menu
        Then I see "small trees" in the side menu
        Then I see "shrubs" in the side menu
        Then I see "perennial vegetables" in the side menu
        Then I see "ornamental perennials" in the side menu
        Then I see "common herbs" in the side menu
        Then I see "bulbs" in the side menu
        Then I see "ground cover" in the side menu
        Then I see "root crops" in the side menu
        Then I see "green manures" in the side menu
        Then I see "climbers" in the side menu

    Scenario: I can show and hide plants in a category
        When I click "ornamental perennials"
        Then I see the plant options
        And I see "bergamot" as a plant option
        When I click "ornamental perennials"
        Then I do not see plant options


    # cucumber does not currently support css hover simulation
    @documentation-only
    Scenario: I can view additional information about a plant
        When I click "ornamental perennials"
        Then I see the plant options
        And I see "bergamot" as a plant option
        When I hover over "bergamot" in the plant options
        Then I see additional information about the plant

    Scenario: I can add a plant to the canvas via the menu
        When I click "ornamental perennials"
        Then I see the plant options
        And I see "bergamot" as a plant option
        When I click "bergamot"
        Then I see a card with text "bergamot" in the canvas