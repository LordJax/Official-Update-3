const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    if (!args) return message.channel.send('**Proper Usage: `OG.say` <message> **')

    if(!message.member.hasPermission("READ_MESSAGES")) return;
    const sayMessage = args.join(" ");
    message.delete().catch();
    message.channel.send(sayMessage);


}
module.exports.help = {
    name: "say"
}