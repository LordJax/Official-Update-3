const Discord = require('discord.js');
const config = require('./jsons/botconfig.json');
const embeds = require('./jsons/embeds.json');

exports.run = (client, message, args) => {

  if (!args) return message.channel.send('**Proper Usage: `OG.announce` <announcement> **')

  try{
    
    var missingArgsEmbed = new Discord.RichEmbed()
      .setColor(embeds.global.missingArgs.color)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(embeds.global.missingArgs.title)
      .setDescription(embeds.global.missingArgs.desc.replace('#ARGS#', 'Message').replace('#USAGE#', `${config.prefix}announce [Message]`))
      .setTimestamp();
    
    var noPermissionsEmbed = new Discord.RichEmbed()
      .setColor(embeds.global.noPermissions.color)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(embeds.global.noPermissions.title)
      .setDescription(embeds.global.noPermissions.desc.replace('#PERMISSIONS#', '`MENTION_EVERYONE`'))
      .setTimestamp();
    if(!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send(noPermissionsEmbed);
    let announcementMessage = args.join(' ');
    if(!announcementMessage) return message.channel.send(missingArgsEmbed);
    
    var announcementEmbed = new Discord.RichEmbed()
      .setColor(embeds.defaultColor)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('New Announcement!')
      .setDescription(announcementMessage)
      .setFooter(`Announcement by ${message.author.tag}`)
      .setTimestamp();
    message.delete(3);
    message.channel.send(announcementEmbed);
    
  } catch(err) {
    if(message.author.id === config.developer || message.author.id === config.developer2) {
      var commandErrorEmbed = new Discord.RichEmbed()
        .setColor(embeds.global.devCommandError.color)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(embeds.global.devCommandError.title)
        .setDescription(`\`\`\`${err}\`\`\``)
        .setTimestamp();
      
      message.channel.send(commandErrorEmbed);
    } else {
      var commandErrorEmbed = new Discord.RichEmbed()
        .setColor(embeds.global.commandError.color)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(embeds.global.commandError.title)
        .setDescription(embeds.global.commandError.desc)
        .setTimestamp();
      message.channel.send(commandErrorEmbed);
    }
  }
}


module.exports.help = {
name: "announce"
}