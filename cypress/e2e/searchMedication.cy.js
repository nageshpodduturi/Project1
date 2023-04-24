/// <reference types="cypress" />



describe("Test suite for searching medication", ()=>{
    let diabetesTabets = ["Metformin 1000","Metformin 1000 XR","Metformin 500","Metformin 500 XR","Metformin 850"]
    it("Search for diabetes and vaidate the results", () => {
          // Login in to the site 
          cy.userLogin("nik+test@instantscripts.com.au","Nimbus2000!");

          // Clicking on the What we do 
          cy.get("#headlessui-popover-button-39").click();

          // Clicking on the Scripts
          cy.get(".mb-2").contains("Scripts").click();
          cy.url().should("eq", Cypress.config("baseUrl") + "cat" )
          
          // Search for Diabetes 
          cy.wait(1000);
          cy.get('input[placeholder="Search by medicine name…"]').clear().type('Diabetes');
          cy.wait(1000);
          cy.get(".cards-list").eq(0).find(".card.group.c").contains("Diabetes").click();
           cy.url().should("eq", Cypress.config("baseUrl") + "c/pharm/-LTmNvHxxWf4NuDd8rMn");
          
          // Validating the medicines 
          cy.get(".pr-6").eq(0).should("contain", diabetesTabets[0])
          cy.get(".pr-6").eq(1).should("contain", diabetesTabets[1])
          cy.get(".pr-6").eq(2).should("contain", diabetesTabets[2])
          cy.get(".pr-6").eq(3).should("contain", diabetesTabets[3])
          cy.get(".pr-6").eq(4).should("contain", diabetesTabets[4])       
        
    })

    after(() => {
        // runs once all tests are done
       cy.userLogOut();

      })
})