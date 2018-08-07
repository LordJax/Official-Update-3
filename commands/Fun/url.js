const Discord = require('discord.js')
const shorten = require('isgd');
 
var prefix = "OG.";

exports.run = (client, message, args, tools) => {
  if (!args) return message.channel.send('**Proper Usage: `OG.shorturl` <link> **')
 
  
  if (!args[1]) { 
   
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return message.channel.send('**Please enter a valid URL**'); 
     
      message.channel.send(`**<${res}>**`); 
   
    })
   
  } else { 
   
    shorten.custom(args[0], args[1], function(res) {
     
      
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
    
     
      message.channel.send(`**<${res}>**`); 
     
     
    }) 
  }
 
}

module.exports.help = {
  name: "shorturl"
}