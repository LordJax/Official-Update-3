const Discord = require("discord.js");
const urban = require("urban");   


module.exports.run = async (client,message,args) => {
    if(args.length >1) return message.channel.send("you didnt say anything :face_palm: ")
    let str = args.join(" ");

    urban(str).first(json => {
        if(!json) return message.channel.send("No resaults")

        let embed = new Discord.RichEmbed()
        
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by ${json.author}`)
        .setColor("#e56b00");

        message.channel.send({embed});

    });
 



}
module.exports.help = {
    name: "urban"
}

