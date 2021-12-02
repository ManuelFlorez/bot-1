import https from 'https'

import { ResponseBot } from '../api-telegram/ResponseBot'

export class Middleware {

  url = `https://api.telegram.org/bot`
  token = process.env.TOKEN
  responseBot = new ResponseBot();

  constructor() {
    //this.getMe()
    this.getUpdates()
  }

  getMe() {
    https.get(`${this.url}${this.token}/getMe`, (res) => {
      res.on('data', (data) => {
        this.responseBot.getMet(JSON.parse(data))
      })
    })
  }

  logOut() {
    https.get(`${this.url}${this.token}/logOut`, (res) => {
      res.on('data', (data) => {
        this.responseBot.logOut(JSON.parse(data))
      })
    })
  }

  getUpdates() {
    https.get(`${this.url}${this.token}/getUpdates`, (res) => {
      res.on('data', (data) => {
        this.responseBot.getUpdates(JSON.parse(data))
      })
    })
  }

  sendMessage(chat_id: number, text: String) {
    https.request({})

    https.get(`${this.url}${this.token}/sendMessage`, (res) => {

    })
  }

}

