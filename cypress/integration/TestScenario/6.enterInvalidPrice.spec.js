const productBody = require('../../testData/productBodyinvalidPrice.json'); 
const outputData=require('../../outputData/outputData2.json'); 
const productHelper = require('../../pageobject/productHelper');

describe('Enter Invalid Price', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 

      it('Validate Post response on invalid price', () => {
        const productHelperData = new productHelper() 
        const API_URL = 'http://localhost:3030/'
      
        cy.request({
        method: 'POST',
        url: `${API_URL}products`,  failOnStatusCode: false,
        body: productBody
      }).then((response) => {
        cy.log(response)
       }).should(({status, body}) => {
        const {name, message, errors} = body
        expect(status).to.eq(400)
        expect(name).to.eq(outputData.name)
        expect(message).to.eq(outputData.message)
      //  expect(errors).to.eq(outputData.errors) compare error message
      })
});
});