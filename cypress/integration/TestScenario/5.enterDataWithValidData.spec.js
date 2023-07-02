const productBody = require('../../fixtures/productBody.json'); 
const data = require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData1.json'); 
const productHelper = require('../../pageobject/productHelper');

describe('Enter Data With Valid Data', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 

      it('POST request with valid data', () => {
        const productHelperData = new productHelper() 
        const API_URL = 'http://localhost:3030/'
       var totalCount = productHelperData.getProductsTotal(`${API_URL}products`) //get total
       cy.request({
        method: 'POST',
        url: `${API_URL}products`,
        body: productBody
      }).then((response) => {
       }).should(({status, body}) => {
        const {name, description, upc, type, model} = body
        expect(status).to.eq(201)
        expect(name).to.eq(productBody.name)
        expect(description).to.eq(productBody.description)
        expect(upc).to.eq(productBody.upc)
        expect(type).to.eq(productBody.type)
        expect(model).to.eq(productBody.model)
      })
      totalCount == totalCount+1 //increase total count to +1 
      const totalCountAfter = productHelperData.getProductsTotal(`${API_URL}products`) //get total 
     // assert.eq(totalCount,totalCountAfter) //here rooral count should be asserted that incremented
});
});