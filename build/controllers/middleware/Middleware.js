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
        this.responseBot = new ResponseBot_1.ResponseBot();
        this.getMe();
    }
    getMe() {
        https_1.default.get(`https://api.telegram.org/bot${this.token}/getMe`, (res) => {
            res.on('data', (data) => {
                this.responseBot.getMet(JSON.parse(data));
            });
        });
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=Middleware.js.map