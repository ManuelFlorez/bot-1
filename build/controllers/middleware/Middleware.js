"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const https_1 = __importDefault(require("https"));
const ResponseBot_1 = require("../api-telegram/ResponseBot");
class Middleware {
    constructor() {
        this.token = process.env.TOKEN;
        this.url = `https://api.telegram.org/bot${this.token}`;
        this.responseBot = new ResponseBot_1.ResponseBot();
        //this.getMe()
        this.getUpdates();
        //this.sendMessage(1213354586,'hola 🎯')
    }
    getMe() {
        https_1.default.get(`${this.url}/getMe`, (res) => {
            res.on('data', (data) => {
                this.responseBot.getMet(JSON.parse(data));
            });
        });
    }
    logOut() {
        https_1.default.get(`${this.url}/logOut`, (res) => {
            res.on('data', (data) => {
                this.responseBot.logOut(JSON.parse(data));
            });
        });
    }
    getUpdates() {
        https_1.default.get(`${this.url}/getUpdates`, (res) => {
            res.on('data', (data) => {
                const json = JSON.parse(data);
                this.responseBot.getUpdates(json);
            });
        });
    }
    sendMessage(chat_id, text) {
        https_1.default.get(`${this.url}/sendMessage?chat_id=${chat_id}&text=${text}`, (res) => {
            res.on('data', (data) => {
                const json = JSON.parse(data);
                this.responseBot.sendMessage(json);
            });
        });
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middleware.js.map