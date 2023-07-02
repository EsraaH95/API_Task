
class productHelper {
    
//get product total
getProductsTotal(API_URL){
    cy.request({
     method: 'GET',
     url: API_URL
     }).then((response) => {
   }).should(({status, body}) => {
    const {total} = body
    expect(status).to.eq(200)
  })
}
}
module.exports= productHelper;
