const Discord = require("discord.js");

/**
 * @file forecast command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */

const weather = require('weather-js');

module.exports.run = async (client,message,args) => {

  if (!args) return message.channel.send('**Proper Usage: `OG.weather` <location> **')

  weather.find({ search: args.join(' '), degreeType: 'F' }, function(err, result) {
    if (err) {
      /**
       * Error condition is encountered.
       * @fires error
       */
      return client.emit('error', '', client.i18n.error(message.guild.language, 'weatherNotFound'), message.channel);
    }

    if (!result || result.length < 1) {
      /**
       * Error condition is encountered.
       * @fires error
       */
      return client.emit('error', '', client.i18n.error(message.guild.language, 'connection'), message.channel);
    }

    let fields = [];
    for (let i = 0; i < result[0].forecast.length; i++) {
      fields.push({
        name: new Date(result[0].forecast[i].date).toDateString(),
        value: `**Condition:** ${result[0].forecast[i].skytextday}\n**Low:** ${result[0].forecast[i].low} \u00B0${result[0].location.degreetype}\n**High:** ${result[0].forecast[i].high} \u00B0${result[0].location.degreetype}\n**Precipitation:** ${result[0].forecast[i].precip} cm`
      });
    }

    message.channel.send({
      embed: {
    
        title: 'Weather Forecast',
        description: result[0].location.name,
        fields: fields,
        footer: {
          text: 'Powered by MSN Weather'
        }
      }
    }).catch(e => {
      console.log.error(e);
    });
  });
}
module.exports.help = {
    name: "weather"
}
