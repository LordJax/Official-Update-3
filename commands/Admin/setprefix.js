const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

  if (!args) return message.channel.send('**Proper Usage: `OG.setprefix` <prefix> **')

  const prefixes = require("../jsons/prefixes.json");

  const prefix = prefixes[message.guild.id].prefixes;

  if(!message.member.hasPermission("VIEW_AUDIT_LOG"))return message.reply('you need the "`ADMINISTRATOR`" permission to use this');
  if (args[0] === "help") {
	  let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Prefix help')
	  .addField('**Useage:**', `${prefix}setprefix <new prefix>`)
    .addField('**Example:**', `${prefix}setprefix ;~;`)
	  message.channel.send(helpbed);
    
    


  } else {

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./jsons/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
    return message.channel.send(`Prefix set to ${args}`)
  });
}





}
module.exports.help = {
  name: "setprefix"
}
