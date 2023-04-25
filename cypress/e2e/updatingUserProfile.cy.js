/// <reference types="cypress" />



describe("Test Suite for Updating Profile", () => {

  it("Updating user profile", () => {
    // Log in to the site 
    cy.userLogin("nik+test@instantscripts.com.au", "Nimbus2000!");

    // Validating the user profile name and clicking on My profile from the drop-down 
    cy.get(".react-gravatar").click();
    cy.get("div.header").should("contain", "Nik Test");
    cy.contains("My profile").click({ force: true });
    cy.url().should("eq", Cypress.config("baseUrl") + "profile");

    // Entering the data into the user profile 
    cy.editUserProfileData();

    // Validating the data on the user profile 
    cy.validateUserProfileData();
    
    // Resetting the data on the user profile 
    cy.clearUserProfileData();

  })

  after(() => {
    // runs once all tests are done
    cy.userLogOut();

  })

})
