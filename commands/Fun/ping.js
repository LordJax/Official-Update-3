const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    message.channel.send(`${client.ping}`).then(message.channel.send("Pong!"));

}
module.exports.help = {
    name: "ping"
}
