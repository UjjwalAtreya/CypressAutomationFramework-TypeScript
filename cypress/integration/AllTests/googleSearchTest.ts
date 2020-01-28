import { google } from "../PageObjects/googleSearch"
describe("This is sample test suit",function(){
   
    before(function(){
        cy.fixture('testData').then(function(data){
            this.dataObj=data
        })
    })

it('should write in search box',function(){
    cy.visit(this.dataObj.baseUrl)
google.typeInSearchBox("Selenuium")

})

})