const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
  
    if(!rMember.roles.has(gRole.id)) return message.reply("Done.");
    await(rMember.removeRole(gRole.id));
  
    try{
      await message.channel.send(`Sorry, <@${rMember.id}> the role **${gRole.name}** has been removed `)
    }catch(e){
      console.log(e.stack);
      message.channel.send(`Welp, <@${rMember.id}>, You have lost the role: **${gRole.name}**. We tried to DM them, but their DMs are locked.`)
    }

}
module.exports.help = {
  name: "delrole"
}