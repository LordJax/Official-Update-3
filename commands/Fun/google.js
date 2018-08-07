const Discord = require("discord.js");
const google = require('google-it');


module.exports.run = async (client,message,args) => {

    if (!args) return message.channel.send('**Proper Usage: `OG.google` <google smth> **')
    const input = args.join(' ');

    if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");

google({ query: input, disableConsole: true }).then(results => {

    let googleembed = new Discord.RichEmbed()
    
    .addField(`Title`, `${results[0].title}`)
    .addField(`Link`, `${results[0].link}` )
    .addField(`Description`, `${results[0].snippet}`)
    .setTimestamp();
    //return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
    return message.channel.send(googleembed);
}).catch(error => {
    if (error) throw error;
});


}
module.exports.help = {
    name: "google"
}