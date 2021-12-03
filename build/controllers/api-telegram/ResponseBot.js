"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBot = void 0;
class ResponseBot {
    getMet(me) {
        console.log(`ok: `, me.ok);
        console.log(`result: `, me.result);
    }
    logOut(logOut) {
        console.log(`description: `, logOut.description);
        console.log(`error_code: `, logOut.error_code);
        console.log(`result: `, logOut.result);
        console.log(`ok: `, logOut.ok);
    }
    getUpdates(getUpdates) {
        getUpdates.result.forEach((data) => {
            const msg = `${data.update_id}`;
            console.log(msg);
        });
    }
    sendMessage(getUpdates) {
        console.log(getUpdates.ok);
    }
}
exports.ResponseBot = ResponseBot;
//# sourceMappingURL=ResponseBot.js.map