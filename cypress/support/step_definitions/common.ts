import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import requestInterceptor from "./utils/requestInterceptor";

Then("I am on the {string} page", (path: string) => {
    cy.url().should('include', path)
});

When("I visit {string}", (url: string) => {
cy.visit(url);
});

When("I visit the design page", () => {
  const url = 'localhost:3000/design'
  const {resumeRequest} = requestInterceptor(url)
  cy.visit(url)
  cy.contains('Loading plants').then(() => {
    resumeRequest()
  })
})

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

  Then("I see an input with placeholder {string}", (label: string) => {
    cy.get(`input[placeholder=${label}]`)
  });

  Then("I enter {string} in the {string} input", (value: string, label: string) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
        cy.get('#' + id).type(value)
    })
  });

  Then("I see a {string} dropdown", (label) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('select#' + id)
    })
  })

  Then("I see {string} in the {string} dropdown options", (option: string, dropdownLabel: string) => {
    cy.contains('label', dropdownLabel)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('select#' + id + " option")
      .filter((index, el) => el.innerText === option)
    })
  })

  When("I select {string} from the {string} dropdown", (option: string, dropdownLabel: string) => {
    cy.contains('label', dropdownLabel)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('select#' + id).select(option)
    })
  })

  Then("I do not see a {string} dropdown", (label: string) => {
    if (label === 'category') {
      cy.get('#filters-category').should('not.exist')
    }
  })

  Then("I see a {string} checkbox", (label) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('input[type="checkbox"]#' + id)
    })
  })

  Then("I click the {string} checkbox", (label) => {
    cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('input[type="checkbox"]#' + id).click()
    })
  })

