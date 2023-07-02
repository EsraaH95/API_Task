const { defineConfig } = require("cypress")
module.exports = defineConfig( {
    TestScenario: {
        setupNodeEvents(on, config) {},
    },
    env: {
    API_BASE_URL: 'http://localhost:3030/',
   }
})


