

Cypress.Commands.add('userLogin', (emailAddress, password) => {
    // Reusable command to log in
    cy.visit("/");
    cy.get(".sign-in").click();
    cy.get(".login-email").type(emailAddress);
    cy.get(".login-password").type(password);
    cy.get(".rounded-lg").contains("Log in").click();
    cy.wait(3000);
})

Cypress.Commands.add("editUserProfileData", () => {
    // Reusable command to edit data in the user profile
    cy.get('#user_signed_area').contains("Edit").click();
    cy.get("[name=mobile]").clear().type("0455 555 555")
    cy.get("[name=dob]").clear().type("23/04/2023")
    cy.get("[name=sex]").click();
    cy.contains("Male").click({ force: true })
    cy.get("[name=atsi]").click();
    cy.contains("Yes, Aboriginal").click({ force: true })
    cy.get("[placeholder=Unit]").clear().type("11")
    cy.get("[name=full_address]").clear().type("Melbourne");
    cy.wait(1000);
    cy.contains("Melbourne Airport (MEL)").click({ force: true });
    cy.get('input[placeholder="____ _____ _"]').clear().type('5435 34535 3');
    cy.get('input[placeholder="_"]').type('1');
    cy.get("[name=conc_card]").clear().type("111-111-111A");
    cy.get('input[placeholder="AAXXNNNN[A]"]').type("QSS12345");
    cy.get(".field").find('div[role="listbox"]').eq(3).click();
    cy.contains("White").click();
    cy.get("[name=em_con_name]").clear().type("Nagesh");
    cy.get("[name=em_con_mobile]").clear().type("0455 555 556");
    cy.get('.edit').click();
    cy.get(".checkbox").contains("None").click();
    cy.get(".checkbox").contains("Blood clots").click();
    cy.get(".actions").contains("Confirm").click({ force: true });
    cy.get("[type=submit]").click();
    // Validation message  
    cy.get('.label').should("contain", "Field is missing or incorrect");
    cy.get('input[placeholder="____ _____ _"]').clear().type('3395 65357 1');
    cy.get("[type=submit]").click()
    cy.wait(2000);
})

Cypress.Commands.add("validateUserProfileData", () => {
    // Reusable command to validate data in the user profile
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
})

Cypress.Commands.add('clearUserProfileData', () => {
    // Reusable command to clear data in the user profile
    cy.get('#user_signed_area').contains("Edit").click();
    cy.get("[name=dob]").clear();
    cy.get("[name=mobile]").clear();
    cy.get("[name=sex]").click();
    cy.contains("Female").click({ force: true })
    cy.get("[name=atsi]").click();
    cy.contains("Prefer not to say").click({ force: true })
    cy.get('input[placeholder="Unit"]').clear();
    cy.get('input[name="full_address"]').clear();
    cy.get('input[placeholder="Suburb"]').clear();
    cy.get('input[placeholder="Postcode"]').clear();
    cy.get('input[placeholder="____ _____ _"]').clear();
    cy.get('input[placeholder="_"]').clear();
    cy.get("[name=conc_card]").clear();
    cy.get('input[placeholder="AAXXNNNN[A]"]').clear();
    cy.get(".field").find('div[role="listbox"]').eq(3).click();
    cy.contains("-- Clear --").click();
    cy.get("[name=em_con_name]").clear();
    cy.get("[name=em_con_mobile]").clear();
    cy.get('.edit').click();
    cy.get(".checkbox").contains("None").click();
    cy.get(".actions").contains("Confirm").click({ force: true });
    cy.get("[type=submit]").click();
    cy.wait(2000);
})

Cypress.Commands.add('userLogOut', () => {
    // Reusable command to log out 
    cy.get(".react-gravatar").eq(0).click();
    cy.contains("Logout").click({ force: true });
    cy.url().should("eq", Cypress.config("baseUrl"));

})