

Cypress.Commands.add('userLogin', (emailAddress, password) => { 
    cy.visit("/");
        cy.get(".sign-in").click();
        cy.get(".login-email").type(emailAddress);
        cy.get(".login-password").type(password);
        cy.get(".rounded-lg").contains("Log in").click();
        cy.wait (2000);
})

Cypress.Commands.add('clearUserProfileData', ()=>{
    // Clicking on the Edit button 
    cy.get('#user_signed_area').contains("Edit").click();
    // Clearing the data for DOB
    cy.get("[name=dob]").clear();
    // Clearng the data for mobile number 
    cy.get("[name=mobile]").clear();
    // Clearing the data forgender
    cy.get("[name=sex]").click();
    cy.contains("Female").click({force:true})
    // Clearing the data for Abriginal
    cy.get("[name=atsi]").click();
    cy.contains("Prefer not to say").click({force:true})
    // Clearing the data for the address fields 
    cy.get('input[placeholder="Unit"]').clear();
    cy.get('input[name="full_address"]').clear();
    cy.get('input[placeholder="Suburb"]').clear();
    cy.get('input[placeholder="Postcode"]').clear();
    // Clearing data for Card Number 
  cy.get('input[placeholder="____ _____ _"]').clear();
  // Clearing data for Ref Number
  cy.get('input[placeholder="_"]').clear();
  // Clearing data for Concession card
     cy.get("[name=conc_card]").clear();
     // Clearing data for DVA 
     cy.get('input[placeholder="AAXXNNNN[A]"]').clear();
      // Clearing data for Card Color 
    cy.get(".field").find('div[role="listbox"]').eq(3).click();
    cy.contains("-- Clear --").click();
    
     // Clearing data for Emergency name ands contact 
     cy.get("[name=em_con_name]").clear();
     cy.get("[name=em_con_mobile]").clear();
    // Clearing the data for the Chronic Conditions
    cy.get('.edit').click();
    cy.get(".checkbox").contains("None").click();
    // Clicking on the Confirm button 
    cy.get(".actions").contains("Confirm").click({force:true});
     // Submit again 
    cy.get("[type=submit]").click();
    cy.wait(2000);

})
Cypress.Commands.add('userLogOut',()=>{
    cy.get(".react-gravatar").eq(0).click();
    cy.contains("Logout").click({force:true});
    cy.url().should("eq", Cypress.config("baseUrl"));

})