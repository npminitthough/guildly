import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see {string} in the side menu", (menuItem: string) => {
    cy.get('aside').contains(menuItem);
});

Then("I see the plant options", () => {
    cy.get('.plant-options');
})

Then("I do not see plant options", () => {
    cy.get('.plant-options').should('not.exist');
});

Then("I see {string} as a plant option", (plantName: string) => {
    cy.get('.plant-options').contains(plantName)
});

Then("I see {string} in the plant options", (text: string) => {
    cy.get('.plant-options').contains(text, {matchCase: false})
});

