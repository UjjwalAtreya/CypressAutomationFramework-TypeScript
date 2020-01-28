
 class GoogleSearch{
    public typeInSearchBox = function(searchText: string): Cypress.Chainable {
         return cy.get("[name='q']").type(searchText+"{enter}")

        
     }

     public verifyIfTextExists(selector:string,text:string){
        return cy.get(selector).should("contain.text",text)

        
       }
 }
 export const  google =new GoogleSearch