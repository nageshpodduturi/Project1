/// <reference types="cypress" />



describe ("Test Suite for Updating Profile and searching medicines for Diabetes",() => {
    let emailAddress = "nik+test@instantscripts.com.au";
    let password = "Nimbus2000!";

    it ("Updating user profile", () => {
        // Loggin in to the site 
        cy.visit("/");
        cy.get(".sign-in").click();
        cy.get(".login-email").type(emailAddress);
        cy.get(".login-password").type(password);
        cy.get(".rounded-lg").contains("Log in").click({waitForAnimations:false});
        cy.wait (10000);
    
        // Clicking on My profile from the drop down 
        cy.get(".react-gravatar").click();
        cy.contains("My profile").click({force:true});
        cy.url().should("eq",Cypress.config("baseUrl") + "profile");

        // Clicking on the Edit button 
        cy.get('#user_signed_area').contains("Edit").click();
        // Data for mobile number 
        cy.get("[name=mobile]").clear().type("0455 555 555")
        // Data fr DOB
        cy.get("[name=dob]").clear().type("23/04/2023")
        // Data fr gender
        cy.contains("Female").click({force:true})
        // Data for Abriginal
        cy.get("[name=atsi]").click();
        cy.contains("Yes, Aboriginal").click({force:true})
        // Address
        cy.get("[placeholder=Unit]").clear().type("11")
        cy.get("[name=full_address]").clear().type("Melbourne");
        cy.wait(1000);
        cy.contains("Melbourne Airport (MEL)").click({force:true});
      // Data for Card Number 
      cy.get('input[placeholder="____ _____ _"]').clear().type('3395 65357 1');
     // Data for Ref Number
     cy.get('input[placeholder="_"]').type('1');
     // Data for Concession card
        cy.get("[name=conc_card]").clear().type("111-111-111A");
        // Data for DVA 
        cy.get('input[placeholder="AAXXNNNN[A]"]').type("QSS12345");
        // Card Color 
        cy.get(".field").find('div[role="listbox"]').eq(3).click();
        cy.contains("White").click();
        // Emergency name ands contact 
        cy.get("[name=em_con_name]").clear().type("Nagesh");
        cy.get("[name=em_con_mobile]").clear().type("0455 555 556");
      // Clicking on the submit button 
       cy.get("[type=submit]").click();
       // Validation message for Card Number 
      // cy.get(".grid").find('div[role="alert"]').should("have.value", "Field is missing or incorrect")
     //  cy.get('input[placeholder="____ _____ _"]').clear().type('3395 65357 1');
       // Submit again 
     //  cy.get("[type=submit]").click()
     cy.wait(10000);



    })

    after(() => {
        // runs once all tests are done
        // Clicking on the Edit button 
        cy.get('#user_signed_area').contains("Edit").click();
        // Clearing the data for the address fields 
        cy.get('input[placeholder="Unit"]').clear();
        cy.get('input[name="full_address"]').clear();
        cy.get('input[placeholder="Suburb"]').clear();
        cy.get('input[placeholder="Postcode"]').clear();
         // Submit again 
        cy.get("[type=submit]").click();
        

      })

})
