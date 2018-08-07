const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    if (!args) return message.channel.send('**Proper Usage: `OG.8ball` <answer 1> <answer 2> **')


    let replies = [`${args[0]}`, `${args[1]}`];
    let result = Math.floor((Math.random() * replies.length));
 
    let chooseEmbed = new Discord.RichEmbed()
    .setColor("#000000")
    .addField("I choose...", replies[result]);
    message.channel.send(chooseEmbed)


}
module.exports.help = {
    name: "pick"
}