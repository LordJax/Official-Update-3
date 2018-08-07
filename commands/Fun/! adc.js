
const Discord = require("discord.js");
const outcomes = [
    '🔫 BANG! You are dead, buddy.',
    'You got lucky, my friend.'
  ];
  


module.exports.run = async (client,message,args) => {

    args = isNaN(args = parseInt(args[0])) ? 1 : args > 7 ? 7 : args;
    let outcome = '';
    for (let i = 0; i < args; i++) {
      outcome = `${message.author} ${outcomes[Math.floor(Math.random() * outcomes.length)]}`;
  
      message.channel.send({
        embed: {
          
          title: `Round ${i + 1}`,
          description: outcome
        }
      }).catch(e => {
        console.log.error(e);
      });
  
      if (outcome.includes('BANG')) return;
    }
    


}
module.exports.help = {
    name: "roulette"
}
  