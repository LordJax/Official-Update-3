const Discord = require('discord.js');
const embeds = require(`./jsons/embeds.json`);
var log = require('fancy-log');
exports.run = async (client, message, args, tools) => {
  
  const Discord = require("discord.js");


  
    let question = args.slice(0).join(" ");
  
    if (!args) return message.channel.send('**Proper Usage: `OG.poll` <Poll name> **')
  
    const embed = new Discord.RichEmbed()
    .setTitle("A Poll Has Been Started!")
    .setColor(embeds.defaultColor)
    .setDescription(`${question}`)
    .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)
    const pollTitle = await message.channel.send({ embed });
    message.channel.send({pollTitle})
    pollTitle.react('👍')
    .then(() => pollTitle.react('👎'))
    .then(() => pollTitle.react('🤷'))
    .catch(() => console.error('Emoji failed to react.'));
  
  

}

module.exports.help = {
  name:"poll"
}