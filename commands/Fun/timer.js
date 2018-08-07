const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args, tools) => {
 
  let Timer = args[1];
  
  if(!args[1]) { 
   return message.channel.send("Please provide a period of time: EX. `s, m , h` `s = seconds, m= minutes, h = hours`"); 
    }
  
  if(args[1] <= 0){
   return message.channel.send("Please provide a period of time: EX. `s, m , h` `s = seconds, m= minutes, h = hours`"); 
  }

  if(!args[0]) { 
    return message.channel.send("Please provide a title`"); 
     }
  
  message.channel.send(`Reminder for ` + args[0] + ` has been set for ` + `${ms(ms(Timer), {long: true})}`)
  
  
  setTimeout (function(){ 
    message.channel.send(`Your reminder for **` + args[0] + `** Is over time was set for *${ms(ms(Timer), {long: true})}*`)
  }, ms(Timer));

}

module.exports.help = { 
  name: "setReminder"
}
