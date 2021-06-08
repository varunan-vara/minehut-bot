"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
var discord_js_1 = require("discord.js");
var Bot = /** @class */ (function () {
    function Bot() {
    }
    Bot.prototype.listen = function () {
        var client = new discord_js_1.Client();
        client.on("message", function (message) { });
        return client.login("");
    };
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=bot.js.map