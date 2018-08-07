
const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {
  var OGEVAL = message.guild.members.find("id", "314165916264955904");
if (message.member !== OGEVAL)return message.channel.send("**Hey, `" + message.author.username + "` setAvatar is a Owner command!**");

    try {
        if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {

          return message.channel.send("Invalid link.");
        }
    
        await client.user.setAvatar(args.join(' '));

        let embed = new Discord.RichEmbed()
        .setDescription(`${client.user.username}'s Avatar changed`)
        .setImage(args.join(' '));
        
        message.channel.send(embed);
      }
      catch (e) {
        console.error(e);
      }

}
module.exports.help = {
    name: "setAvatar"
}