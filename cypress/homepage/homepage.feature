Feature: Homeapage

    Scenario: Landing on the homepage
        When I visit 'localhost:3000'
        Then I see 'Guildly'
        And I see 'Plant guilds for small spaces'
        And I see a 'Start designing' link

    Scenario: Visting the design page
        When I visit 'localhost:3000'
        And I click 'Start designing'
        Then I am on the '/design' page
