/// <reference types="cypress" />



describe ("Test Suite for Updating Profile",() => {
      
    it ("Updating user profile", () => {
        // Login in to the site 
        cy.userLogin("nik+test@instantscripts.com.au","Nimbus2000!");
        // Clicking on My profile from the drop down 
        cy.get(".react-gravatar").click();
        cy.contains("My profile").click({force:true});
        cy.url().should("eq",Cypress.config("baseUrl") + "profile");

        // Clicking on the Edit button 
        cy.get('#user_signed_area').contains("Edit").click();
        // Data for mobile number 
        cy.get("[name=mobile]").clear().type("0455 555 555")
        // Data for DOB
        cy.get("[name=dob]").clear().type("23/04/2023")
        // Data for gender
        cy.get("[name=sex]").click();
        cy.contains("Male").click({force:true})
        // Data for Abriginal
        cy.get("[name=atsi]").click();
        cy.contains("Yes, Aboriginal").click({force:true})
        // Address
        cy.get("[placeholder=Unit]").clear().type("11")
        cy.get("[name=full_address]").clear().type("Melbourne");
        cy.wait(1000);
        cy.contains("Melbourne Airport (MEL)").click({force:true});
      // Data for Card Number 
      cy.get('input[placeholder="____ _____ _"]').clear().type('5435 34535 3');
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
        // Clicking on the Edit button for Chronic Conditions 
        cy.get('.edit').click();
        // Checking Blood Cots in the window 
        cy.get(".checkbox").contains("None").click();
        cy.get(".checkbox").contains("Blood clots").click();
        // Clicking on the Confirm button 
        cy.get(".actions").contains("Confirm").click({force:true});
      // Clicking on the submit button 
      cy.get("[type=submit]").click();
       // Validation message for Card Number 
       cy.get('.label').should("contain", "Field is missing or incorrect");
       cy.get('input[placeholder="____ _____ _"]').clear().type('3395 65357 1');
       // Submit again 
       cy.get("[type=submit]").click()
      cy.wait(2000);

     // Validating data on the user profile 
     cy.get('label').contains("First name").next().should("contain", "Nik");
     cy.get('label').contains("Last name").next().should("contain", "Test");
     cy.get('label').contains("Date of Birth").next().and("contain", "2023-04-23");
     cy.get('label').contains("Mobile phone number").next().should("contain", "0455 555 555");
     cy.get('label').contains("Sex assigned at birth").next().should("contain", "Male");
     cy.get('label').contains("Aboriginal or Torres Strait Islander origin?").next().should("contain", "Yes, Aboriginal");
     cy.get('label').contains("Primary Residential Address").next().should("contain", "11, Melbourne Airport (MEL), Melbourne Airport VIC 3045");
     cy.get('label').contains("Medicare Number").next().should("contain", "3395 65357 1 1");
     cy.get('label').contains("Concession card (optional)").next().should("contain", "111111111A");
     cy.get('label').contains("Emergency Contact Name").next().should("contain", "Nagesh");
     cy.get('label').contains("Emergency Contact Mobile").next().should("contain", "0455 555 556");
     cy.get('label').contains("Chronic Conditions").next().should("contain", "Blood clots");

     cy.clearUserProfileData();

    })

    after(() => {
        // runs once all tests are done
       cy.userLogOut();

      })

})
