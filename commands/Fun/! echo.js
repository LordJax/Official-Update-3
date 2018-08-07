const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {




if (args.length < 1) {

    return message.reply("Please specify text to echo!");
  }

  message.channel.send({
    embed: {
     
      description: args.join(' '),

    }
  }).catch(e => {
   console.error(e);
  });

}
module.exports.help = {
    name: "echo"
}