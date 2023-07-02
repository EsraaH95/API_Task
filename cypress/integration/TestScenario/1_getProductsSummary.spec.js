const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData1.json'); 

describe('Test to get Products summary and response', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 
      it('Sends a GET request to the API and checks the response', () => {
       const API_URL = 'http://localhost:3030/'
       cy.request({
        method: 'GET',
        url: `${API_URL}products` 
        }).then((response) => {
        cy.log(response.body)
       }).should(({status, body}) => {
        const {total, limit, skip, data} = body
        expect(status).to.eq(200)
       //expect(total).to.eq(outputData.total)  //51957 //This count depends upon data in db, increase based on post request. This can be fetched from database
        expect(limit).to.eq(outputData.limit)
        expect(skip).to.eq(outputData.skip) 
      })
    });
});