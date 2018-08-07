const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {{

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "bans-kicks");
    if(!incidentchannel) return message.channel.send("Can't find bans-kicks channel, make a channel `bans-kicks`");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    message.bUser.send(`You have been banned in ${guild.name}!`)
} 
    
return;








  
}
module.exports.help = {
  name: "ban"
}