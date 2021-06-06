"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
const dotenv = require("dotenv");
dotenv.config();
const discord_js_1 = require("discord.js");
//Consts
const client = new discord_js_1.Client();
client.on("ready", () => {
    console.log("I'm Ready!");
});
client.on("message", (msg) => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map