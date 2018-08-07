const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {





if (!args.name) {

    return message.reply("Please use a animated emote");
  }

  let emoji = message.guild.emojis.find('name', args.name);

  if (emoji) {
    message.channel.send({
      files: [ emoji.url ]
    }).catch(e => {
      console.error(e);
    });
  }
}
module.exports.help = {
    name: "animote"
}