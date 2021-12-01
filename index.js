require('dotenv').config()

const { saludo, variables } = require('./src/app/app.js')

saludo('Manuel')

console.log(variables.host);
console.log(variables.username);
console.log(variables.password);