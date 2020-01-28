
 class GoogleSearch{
    public typeInSearchBox = function(searchText: string): Cypress.Chainable {
         return cy.get("[name='q']").type(searchText)
     }
 }
 export const  google =new GoogleSearch