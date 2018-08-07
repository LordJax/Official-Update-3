

const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("My invite link\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*")
    .addField("**Link**", "[OG Bot](https://discordapp.com/oauth2/authorize?client_id=441408729175293975&scope=bot&permissions=2146958591)")
    .setColor("#00ff94");

    message.author.send({embed})
    message.channel.send(`${message.author.tag} Check your DMS`)


}
module.exports.help = {
    name: "invite"
}
