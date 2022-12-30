Feature: Canvas

    Background: Visit design page
        When I visit 'localhost:3000/design'

    # haven't figured out how to get drag and drop simulation to work.
    @documentation-only
    Scenario: I can move a card to any point in the canvas
        When I click "ornamental perennials"
        Then I see the plant options
        And I see "bergamot" as a plant option
        When I click "bergamot"
        Then I see a card with text "bergamot" in the canvas
        When I move the "bergamot" card to 500,550