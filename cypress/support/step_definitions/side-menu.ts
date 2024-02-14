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

Then("I see {string} in the plant options", (text: string) => {
    cy.get('.plant-options').contains(text, {matchCase: false})
    .closest('.plant-option').as('currentPlantOption')
});

Then("I do not see {string} in the plant options", (text: string) => {
    cy.get('.plant-options').contains(text, {matchCase: false})
    .should('not.exist')
});

Then("I see {string} in the plant option info", (text: string) => {
    cy.get('@currentPlantOption').then(plantOption => {
        cy.wrap(plantOption).contains(text, {matchCase: false})
    })
})

Then("I see an image in the plant option info with {string} as the alt text", (altText) => {
    cy.get('@currentPlantOption').then(plantOption => {
        cy.wrap(plantOption).within(() => {
            cy.get('img').should('have.attr', 'alt', altText)
        })
    })
})

Then("I see plant options listed", () => {
    cy.get('Loading plants').should('not.exist');
    cy.get('.plant-option').should('exist');
})

Then("all listed plant options have the {string} tag", (tagName: string) => {
    cy.get('.plant-options').each(el => {
        cy.wrap(el).get('.plant-info__tags').contains(tagName)
    })
})

Then("there are {int} items in the plant options listed", (itemCount: number) => {
    cy.get('.plant-options').children().should('have.length', itemCount)
})

Then("there is 1 item in the plant options listed", () => {
    cy.get('.plant-options').children().should('have.length', 1)
})

Then("I enter {string} in the search input", (inputValue: string) => {
    cy.get(`input[placeholder=search]`).type(inputValue)
});

