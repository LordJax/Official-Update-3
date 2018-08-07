const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
  try {
    let spinning = await message.channel.send({
      embed: {
        
        description: `${message.author.tag} is spinning a fidget spinner...`,
        image: {
          url: 'https://i.imgur.com/KJJxVi4.gif'
        }
      }
    });

    let timeout = (Math.random() * (60 - 5 + 1)) + 5;
    setTimeout(() => {
      spinning.edit({
        embed: {
      
          description: `${message.author.tag}, you spinned the fidget spinner for ${timeout.toFixed(2)} seconds.`
        }
      }).catch(e => {
        console.log.error(e);
      });
    }, timeout * 1000);
  }
  catch (e) {
    console.log.error(e);
  }
};

exports.config = {
  aliases: [ 'fidget' ],
  enabled: true
};



module.exports.help = {
    name: "spinner"
}


