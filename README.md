# API_Play_Ground_Test_Challenge
API_Play_Ground_Test_Challenge
# productSearch
Sample API automation framework for BestBuy palyground products

**Pre requisites**
Node js -16.13.0 or any latest version
Visual Studio IDE  , to view the files

**Running test:**
 
 Install dependencies by running npm i
 
 Execute the below command
 
 npm run test
 #Cypress window will open, select the test case which need to be executed

**TestCases**

1. Get Products Summary
2. Get product by Id
3. Get product by Id, select name and price only
4. Get Product By Id Enter Invalid Id, Validate response
5. POST request with valid data and validate response
6. Validate Post response on invalid price and validate response

**Folder structure**

Cypress/integration-: This consist of the spec file for each testcase

cypress/pageobject-: Resubale function for fetching total count of products in application

cypress/testdata-: The testdata which is passed to the spec file, the data was passed in json format

cypress/outputData-: The testdata to validate output, response in json format

**Approaches and automation concept used**

1. Centralized approach for reusability (This can be further enhanced)
2. Assertions has been placed for validation
3. Centralized reusable function
4. Maintainable and re-usable code

Choosing tech stack: Cypress has been used as its mentioned in recommendation for web automation, also I’m currently working on cypress in my current organization. Also I personally like workinng on it.


 
