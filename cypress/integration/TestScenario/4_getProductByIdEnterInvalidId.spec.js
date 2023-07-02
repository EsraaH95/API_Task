const data = require('../../testData/invalidId.json'); 
const ouputData=require('../../outputData/outputData1.json'); 

describe('Get Product By Id Enter Invalid Id', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 

      it('GET response with product by invalid Id', () => {

       const API_URL = 'http://localhost:3030/'
   
     cy.request({ url: `${API_URL}products/${data.id}` , failOnStatusCode: false}).its('status').should('equal', 404)
    });
});