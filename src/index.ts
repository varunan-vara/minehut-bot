//Imports
import * as dotenv from "dotenv";
dotenv.config();
import envconfig from "../envconfig.config";
import {Client, Message} from "discord.js";

const prefix : string = "!!";
const client = new Client();
client.on("ready", () => {
    console.log("MineHut Bot Ready!");
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    
});

client.login(envconfig.TOKEN);