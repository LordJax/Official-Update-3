const Discord = require("discord.js");
const superagent = require("superagent");


module.exports.run = async (client,message,args) => {

 let {body} = await superagent
 .get(`https://api.cheweybot.ga/birb`);

 let dogembed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Bird")
 .setImage(body.data);

 message.channel.send(dogembed)

}
module.exports.help = {
    name: "bird"
}