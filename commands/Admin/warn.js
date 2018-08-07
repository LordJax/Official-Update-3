const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");

module.exports.run = async (client,message,args) => {

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("No")
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Couldn't find them");
    if(wUser.hasPermission("VIEW_AUDIT_LOG")) return message.reply("Nope");
    let reason = args.join(" ").slice(22);  
    let warns = JSON.parse(fs.readFileSync("./jsons/warnings.json", "utf8"));
    let asdchannel = message.guild.channels.find(`name`, "warns");
  
   
    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };
  
    warns[wUser.id].warns++;
  
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err)
    });
  
    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);
  
    let warnchannel = message.guild.channels.find(`name`, "warns");
    if(!warnchannel) return message.reply("Couldn't find channel, Create a channel named: **warns** ");
  
    warnchannel.send(warnEmbed);
  
    if(warns[wUser.id].warns == 1){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("You should create that role (maked a `muted` role)");
  
      let mutetime = "5m";
      await(wUser.addRole(muterole.id));
      message.channel.send(`<@${wUser.id}> has been temporarily muted for **5mins**`);
  
      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been unmuted.`)
      }, ms(mutetime))
    }


    if(warns[wUser.id].warns == 2){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("You should create that role (maked a `muted` role)");
  
      let mutetime = "20m";
      await(wUser.addRole(muterole.id));
      message.channel.send(`<@${wUser.id}> has been temporarily muted for **20m**`);
  
      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been unmuted.`)
      }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 3){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("You should create that role (maked a `muted` role)");
  
      let mutetime = "30m";
      await(wUser.addRole(muterole.id));
      message.channel.send(`<@${wUser.id}> has been temporarily muted for **1H**`);
  
      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been unmuted.`)
      }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 4){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("You should create that role (maked a `muted` role)");
  
      let mutetime = "24h";
      await(wUser.addRole(muterole.id));
      message.channel.send(`<@${wUser.id}> has been temporarily muted for **1day**`);
  
      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.reply(`<@${wUser.id}> has been unmuted.`)
      }, ms(mutetime))
    }
    if(warns[wUser.id].warns == 5){
      message.guild.member(wUser).ban(reason);
      message.reply(`<@${wUser.id}> has been banned.`)
    }

}
module.exports.help = {
  name: "warn"
}