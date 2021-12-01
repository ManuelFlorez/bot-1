"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Middleware_1 = require("./controllers/middleware/Middleware");
dotenv_1.default.config();
console.log(`Versión api telegram: ${process.env.BOTS_API}`);
new Middleware_1.Middleware();
//# sourceMappingURL=index.js.map