const Discord = require("discord.js");

module.exports.run = async (Client, message, args) => {

  if (!args) return message.channel.send('**Proper Usage: `OG.avatar` || OG.avatar <user>**')
  
    let msg = await message.channel.send("Generating Avatar...")
    let target = message.mentions.users.first() || message.author;

    message.channel.send({files: [
       {
          attachment: target.displayAvatarURL,
          name: "avatar.png"
       }
    ]});

    msg.delete();
}



module.exports.help = {
  name:"avatar"
}