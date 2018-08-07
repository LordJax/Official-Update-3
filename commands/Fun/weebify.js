const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {


    if (args.join(' ').length > 55) {
        return 'Keep it under 55 characters!'
      }
  
      if (args.length === 1) {
        return args[0].split('').join(' <a:partyparrot:429416315695005696> ')
      } else {
        return message.channel.send(args.join(' <a:partyparrot:429416315695005696> '))
      }

}
module.exports.help = {
    name: "partyparrot"
}



