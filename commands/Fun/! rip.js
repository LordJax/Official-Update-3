
const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {




message.channel.send({
    embed: {
     
      title: `R.I.P ${args.length ? args.join(' ') : 'Everything'}`,
      image: {
        url: 'https://i.imgur.com/BrJItdf.png'
      },
      footer: {
        text: 'May the Soul Rest in Peace.'
      }
    }
  }).catch(e => {
    console.error(e);
  });
}
module.exports.help = {
    name: "rip"
}