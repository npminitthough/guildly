import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I am on the {string} page", (path: string) => {
    cy.url().should('include', path)
});

When("I visit {string}", (url: string) => {
    cy.visit(url);
  });
  
  Then("I see {string}", (text: string) => {
    cy.contains(text, { matchCase: false })
  });
  
  Then(/^I see an? "(.*)" button$/, (buttonText: string) => {
    cy.get('button').contains(buttonText, { matchCase: false });
  });

  Then("I click the {string} button", (buttonText: string) => {
    cy.get('button').contains(buttonText, { matchCase: false }).click();
  });


  Then("I see a {string} link", (linkText: string) => {
    cy.get('a').contains(linkText, { matchCase: false });
  });

  Then("I see a link with text {string}", (linkText: string) => {
    cy.get('a').contains(linkText, { matchCase: false });
  });
  
  
  When("I click {string}", (text: string) => {
    cy.contains(text).click();
  });
  
  Then("I see a form", () => {
      cy.get('form')
  });

  Then("I see a {string} input", (label: string) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
        cy.get('#' + id)
    })
  });

  Then("I enter {string} in the {string} input", (value: string, label: string) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
        cy.get('#' + id).type(value)
    })
  });