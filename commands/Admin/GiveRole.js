const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Sorry, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
  
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
    await(rMember.addRole(gRole.id));
  
    try{
      await user.send(`HI`)
    }catch(e){
      console.log(e.stack);
      message.channel.send(` ${gRole.name} Was given to ${rMember}`)
    }
}
module.exports.help = {
  name: "addrole"
}