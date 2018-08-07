const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (client,message,args) => {
    urban.random().first(json => {
        let embed = new Discord.RichEmbed()
        .setTitle(`Urban-`,json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by ${json.author}`);

        message.channel.send({embed})
    })


}
module.exports.help = {
    name: "randomurban"
}