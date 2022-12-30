import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see a card with text {string} in the canvas", (cardText: string) => {
    cy.get(".l-canvas").get('.card').contains(cardText)
})

Then(/^I see a circle card with text "(.*)" and diameter "(.*)px" in the canvas$/, (cardText: string, diameter: number) => {
    const getEl = () => cy.get(".l-canvas").contains('.card', cardText)

    getEl().invoke('css', 'width')
        .should('be.eq', diameter + "px")

    getEl().invoke('css', 'border-radius')
        .should('be.eq', diameter / 2 + "px");

});

Then(/^I see a rectangle card with text "(.*)", width "(.*)px" and length "(.*)px" in the canvas$/, (cardText: string, width: number, length: number) => {
    const getEl = () => cy.get(".l-canvas").contains('.card', cardText)

    getEl().invoke('css', 'width')
        .should('be.eq', length + "px")

    getEl().invoke('css', 'height')
        .should('be.eq', width + "px")

});
