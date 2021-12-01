import https from 'https'

import { ResponseBot } from '../api-telegram/ResponseBot'

export class Middleware {

  token = process.env.TOKEN
  responseBot = new ResponseBot();

  constructor() {
    this.getMe()
  }

  getMe() {
    https.get(`https://api.telegram.org/bot${this.token}/getMe`, (res) => {
      res.on('data', (data) => {
        this.responseBot.getMet(JSON.parse(data))
      })
    })
  }

}

