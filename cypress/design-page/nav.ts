import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see a link to the homepage in the nav", (linkText: string) => {
    cy.get('nav').get('a').should('have.attr', 'href').and('include', '/');
});

Then("I see a toolbar in the nav", () => {
    cy.get('nav').get('.toolbar')
});

Then("there is a {string} button in the toolbar", (text: string) => {
    cy.get('.toolbar').contains('button', text )
})

Then("there is a button with title {string} in the toolbar", (text: string) => {
    cy.get('.toolbar').get(`button[title="${text}"]`);
})