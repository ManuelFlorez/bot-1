require('dotenv').config()

const { botsApi, variables } = require('./src/app/app.js')

console.log(`Versión api telegram: ${botsApi}`)