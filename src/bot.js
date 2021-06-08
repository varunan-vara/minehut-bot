var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
console.log("XMLHttpRequest initialized")

function checkStatus (message) {
    request.open("GET", "https://api.minehut.com/servers", true);
    console.log("Request has opened...")
    request.onload(function () {
        if (this.response != "") {
            console.log("checker 1")
            message.channel.send("MineHut API is currently functional!")
        }
    })
}

module.exports =  {
    checkStatus,
};