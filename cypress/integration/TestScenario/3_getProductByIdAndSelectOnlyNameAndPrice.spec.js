const data=require('../../testData/data1.json'); 
const outputData=require('../../outputData/outputData3.json'); 



describe('Test to get product by Id', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 

      it('Get product by Id, select name and price only', () => {

       const API_URL = 'http://localhost:3030/'
        const productData = {
          "id": 7425383 }
          
       cy.request({
        method: 'GET',        
         url: `${API_URL}products/${productData.id}?$select[]=price&$select[]=name` 
        }).then((response) => {
            cy.log(response.body)
           }).should(({status, body}) => {
            const {id, name, price} = body
            expect(status).to.eq(200)
            expect(id).to.eq(outputData.id)
            expect(name).to.eq(outputData.name)
            expect(price).to.eq(outputData.price)
          })
    });
});