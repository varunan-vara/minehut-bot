//Imports
//import * as _ from "lodash";
import { Message } from "discord.js";
import { XMLHttpRequest } from "xmlhttprequest-ts";

class hutChecker {
    message : Message;
    constructor (
        message: Message,
        ) {
            this.message = message;
        }
    request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if 
    };
    response = this.request.open('GET', " https://api.minehut.com/servers ", true);
    isUp = this.request.onload = () => {
        let responsestring = String(this.response);
        console.log("API Responded");
        if (responsestring) {
            this.message.channel.send("`Service is up!`");
        }
    }
};