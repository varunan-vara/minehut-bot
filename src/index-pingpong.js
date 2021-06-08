"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
var dotenv = require("dotenv");
dotenv.config();
var envconfig_config_1 = require("../envconfig.config");
var discord_js_1 = require("discord.js");
//Consts
var client = new discord_js_1.Client();
client.on("ready", function () {
    console.log("I'm Ready!");
});
client.on("message", function (msg) {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});
client.login(envconfig_config_1.default.TOKEN);
//# sourceMappingURL=index-pingpong.js.map