const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {





let user = message.mentions.users.first();
if (!user) {

  return message.reply("Mention a user!");
}

let slaps = [
  'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
  'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
  'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
  'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
  'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
  'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
];

message.channel.send({
  embed: {
    
    description: `${message.author.username} slapped ${user.username}!`,
    image: {
      url: slaps[Math.floor(Math.random() * slaps.length)]
    }
  }
}).catch(e => {
  console.error(e);
});

}
module.exports.help = {
    name: "slap"
}