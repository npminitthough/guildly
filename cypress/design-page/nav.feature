Feature: Design page nav

    Background: Visit design page
        When I visit 'localhost:3000/design'

    Scenario: Contains toolbar and a link to the homepage
        Then I see a link with text "Guildly"
        And I see a toolbar in the nav
        And there is a "circle" button in the toolbar
        And there is a "rectangle" button in the toolbar
        And there is a button with title "send backwards" in the toolbar
        And there is a button with title "bring forewards" in the toolbar
        And there is a "clear all" button in the toolbar

    Scenario: Navigating to the homepage
        When I click "Guildly"
        Then I am on the "/" page

    Scenario: The circle button displays a form
        When I click "circle"
        Then I see a form
        And I see a "label" input
        And I see a "diameter (m)" input
        And I see an "Add" button

    Scenario: The rectangle button displays a form
        When I click "rectangle"
        Then I see a form
        And I see a "label" input
        And I see a "length (m)" input
        And I see a "width (m)" input
        And I see an "Add" button

    Scenario: I can add a custom circle to the canvas
        When I click the "circle" button
        And I enter "courgette" in the "label" input
        And I enter "1" in the "diameter (m)" input
        And I click the "add" button
        Then I see a circle card with text "courgette" and diameter "100px" in the canvas

    Scenario: I can add a custom rectangle to the canvas
        When I click the "rectangle" button
        And I enter "shed" in the "label" input
        And I enter "2" in the "length (m)" input
        And I enter "1" in the "width (m)" input
        And I click the "add" button
        Then I see a rectangle card with text "shed", width "100px" and length "200px" in the canvas



