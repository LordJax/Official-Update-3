const Discord = require("discord.js");

const ms = require("ms");

exports.run = async (client, message, [time, reason]) => {
  if (!client.lockit) { client.lockit = []; }
  let validUnlocks = ["release", "unlock", "u"];
  if (!time) { return message.reply("I need a time for the lockdown"); }

  const Lockembed = new Discord.RichEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔒 LOCKDOWN NOTICE 🔒")
    .setDescription(`This channel has been lockdown by ${message.author.tag} for ${time}`);
    if (reason != null) { Lockembed.addField("Reason: ", reason); }

  const Unlockembed = new Discord.RichEmbed()
    .setColor(0xDD2E44)
    .setTimestamp()
    .setTitle("🔓 LOCKDOWN NOTICE 🔓")
    .setDescription("This channel is now unlocked.");

  if (message.channel.permissionsFor(message.author.id).has("MUTE_MEMBERS") === false) { 
    const embed = new Discord.RichEmbed()  
      .setColor(0xDD2E44)
      .setTimestamp()
      .setTitle("❌ ERROR: MISSING PERMISSIONS! ❌")
      .setDescription("You do not have the correct permissions for this command!");
    return message.channel.send({embed});  
  }  

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null }).then(() => {
      message.channel.send({embed: Unlockembed});
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => { console.log(error); });
  } else {
    message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false }).then(() => {
      message.channel.send({embed: Lockembed}).then(() => {
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send({embed: Unlockembed})).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => { console.log(error); });
    });
  }
};


 



module.exports.help = {
   name: "lockdown"
}
