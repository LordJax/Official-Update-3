const Discord = require('discord.js')

const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (args.length < 1) {
    message.channel.send('You must provide some text to banner');
}

if(args.join(' ').length > 30) return message.channel.send('Cant be above 30 characters.') 

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

module.exports.help = {
  name: "banner"
};