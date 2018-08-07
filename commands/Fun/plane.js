//https://api.cheweybot.ga/space

const Discord = require("discord.js");
const superagent = require("superagent");
const embeds = require('./jsons/embeds.json');

module.exports.run = async (client,message,args) => {

 let {body} = await superagent
 .get(`https://api.cheweybot.ga/plane`);

 let dogembed = new Discord.RichEmbed()
 .setColor(embeds.defaultColor)
 .setTitle("Plane")
 .setImage(body.data);

 message.channel.send(dogembed)

}
module.exports.help = {
    name: "plane"
}