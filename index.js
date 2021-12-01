require('dotenv').config()

const { botsApi, token } = require('./src/app/app.js')

console.log(`Versión api telegram: ${botsApi}`)

const https = require('https')

https.get(`https://api.telegram.org/bot${token}/getMe`, (res) => {
  res.on('data', (data) => {
    console.log(JSON.parse(data))
  })
})