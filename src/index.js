"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var dotenv = require("dotenv");
dotenv.config();
var envconfig_config_1 = require("../envconfig.config");
var discord_js_1 = require("discord.js");
var prefix = "!!";
var client = new discord_js_1.Client();
client.on("ready", function () {
    console.log("MineHut Bot Ready!");
});
client.on("message", function (message) {
    if (!message.content.startsWith(prefix))
        return;
});
client.login(envconfig_config_1.default.TOKEN);
//# sourceMappingURL=index.js.map