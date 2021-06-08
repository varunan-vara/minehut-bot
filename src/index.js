var Discord = require("discord.js");
var _ = require('lodash');
require('dotenv').config();
const bot = require("./bot");

const client = new Discord.Client();
const prefix = "!!";

client.on("ready", () => {
    console.log("MineHut-Bot is Ready!");
})

client.on("message", msg => {
    if (msg.content != prefix) return;
    if (msg.author.bot) return;

    var command = msg.split("!!").pop();
    if (command === "status") {
        bot.checkStatus(msg);
    }
});

client.login(process.env.TOKEN);