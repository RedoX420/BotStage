console.log("test");

var Discord = require("discord.js");
var Client  = new Discord.Client({
    intents: [
    ]

});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTg4Nzc3MDcxODA1MzYyMjI2.GicLgL.XZCkiat11DXXTtjlcNEPFQk8nY3cyE_jovOHls");
