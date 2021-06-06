//Imports
import * as dotenv from "dotenv";
dotenv.config();
import {Client, Message} from "discord.js";

//Consts
const client = new Client();

client.on("ready", () => {
    console.log("I'm Ready!");
})
client.on("message", (msg:Message) => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login(process.env.TOKEN);

