const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    let ubUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!ubUser) return message.channel.send("Can't find user!");
    let ubReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No");
    if(ubUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person isnt banned");

    let ubanEmbed = new Discord.RichEmbed()
    .setDescription("unban")
    .addField(`${ubUser} was unbanned`)
    .setColor("#000000")
    let incidentchannel = message.guild.channels.find(`name`, "bans-kicks");
    if(!incidentchannel) return message.channel.send("Can't find bans-kicks channel, make a channel `bans-kicks`");

    message.guild.member(ubUser).unban(ubReason);
    incidentchannel.send(ubanEmbed);
    


    return;
}
module.exports.help = {
  name: "unban"
}