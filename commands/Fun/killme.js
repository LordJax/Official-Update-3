const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    message.channel.send(`This command has been disabled | **suicidepreventionlifeline.org**`)
}

module.exports.help = {
    name: "suicide"
}