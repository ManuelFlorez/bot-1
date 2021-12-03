import https from 'https'

import { ResponseBot } from '../api-telegram/ResponseBot'

export class Middleware {

  token = process.env.TOKEN
  url = `https://api.telegram.org/bot${this.token}`
  responseBot = new ResponseBot();

  constructor() {
    //this.getMe()
    this.getUpdates()
    //this.sendMessage(1213354586,'hola 🎯')
  }

  getMe() {
    https.get(`${this.url}/getMe`, (res) => {
      res.on('data', (data) => {
        this.responseBot.getMet(JSON.parse(data))
      })
    })
  }

  logOut() {
    https.get(`${this.url}/logOut`, (res) => {
      res.on('data', (data) => {
        this.responseBot.logOut(JSON.parse(data))
      })
    })
  }

  getUpdates() {
    https.get(`${this.url}/getUpdates`, (res) => {
      res.on('data', (data) => {
        const json = JSON.parse(data)
        this.responseBot.getUpdates(json)
      })
    })
  }

  sendMessage(chat_id: number, text: String) {
    https.get(`${this.url}/sendMessage?chat_id=${chat_id}&text=${text}`, (res) => {
      res.on('data', (data) => {
        const json = JSON.parse(data)
        this.responseBot.sendMessage(json)
      })
    })
  }

}

