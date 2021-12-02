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
        this.url = `https://api.telegram.org/bot`;
        this.token = process.env.TOKEN;
        this.responseBot = new ResponseBot_1.ResponseBot();
        //this.getMe()
        this.getUpdates();
    }
    getMe() {
        https_1.default.get(`${this.url}${this.token}/getMe`, (res) => {
            res.on('data', (data) => {
                this.responseBot.getMet(JSON.parse(data));
            });
        });
    }
    logOut() {
        https_1.default.get(`${this.url}${this.token}/logOut`, (res) => {
            res.on('data', (data) => {
                this.responseBot.logOut(JSON.parse(data));
            });
        });
    }
    getUpdates() {
        https_1.default.get(`${this.url}${this.token}/getUpdates`, (res) => {
            res.on('data', (data) => {
                this.responseBot.getUpdates(JSON.parse(data));
            });
        });
    }
    sendMessage(chat_id, text) {
        https_1.default.request({});
        https_1.default.get(`${this.url}${this.token}/sendMessage`, (res) => {
        });
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middleware.js.map