const data=require('../../testData/data1.json'); 
const ouputData=require('../../outputData/outputData1.json'); 
 


describe('Test to get product by Id', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
     })
      }); 

      it('Get product by Id', () => {

       const API_URL = 'http://localhost:3030/'
        const productData = {
          "id": 7425383 }

          //output
          const outputBody = {
            'id': 7425383,
            'name': 'Super Mario Maker - Nintendo Wii U',
            'type': 'Game',
            'price': 59.99,
            'upc': '045496903756',
            'shipping': 0,
            'description': 'Design, create and complete the custom Mario levels of your dreams',
            'manufacturer': 'Nintendo',
            'model': '12345',
            'url': 'http://www.bestbuy.com/site/super-mario-maker-nintendo-wii-u/7425383.p?id=1219269869006&skuId=7425383&cmp=RMXCC',
            'image': 'http://img.bbystatic.com/BestBuy_US/images/products/7425/7425383_sa.jpg',
            'createdAt': '2016-11-17T18:01:06.648Z',
            'updatedAt': '2016-11-17T18:01:06.648Z',
            'categories': [
              {
                'id': 'abcat0700000',
                'name': 'Video Games',
                'createdAt': '2016-11-17T17:57:04.285Z',
                'updatedAt': '2016-11-17T17:57:04.285Z'
              },
              {
                'id': 'pcmcat273800050036',
                'name': 'Wii U',
                'createdAt': '2016-11-17T17:57:05.600Z',
                'updatedAt': '2016-11-17T17:57:05.600Z'
              },
              {
                'id': 'pcmcat274600050017',
                'name': 'Wii U Games',
                'createdAt': '2016-11-17T17:57:05.600Z',
                'updatedAt': '2016-11-17T17:57:05.600Z'
              }
            ]
          };
       cy.request({
        method: 'GET',
         url: `${API_URL}products/${productData.id}` 
        }).then((response) => {
          cy.log(response.body)
         .should(({status, body}) => {

          expect(status).to.eq(200)
          expect(response.body.id).to.eq(outputBody.id)
          expect(response.body.name).to.eq(outputBody.name)
          expect(response.body.description).to.eq(outputBody.description)
        })
      })
    });
});