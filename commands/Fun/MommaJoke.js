const discord = require('discord.js');
const snek = require('snekfetch');
const twemoji = require('twemoji');
const fs = require('fs');
const embeds = require('./jsons/embeds.json');
module.exports.run = async (client,message,args) => { 

    const yoMamma = require('yo-mamma').default;
    let joke = yoMamma();
let jokeEmbed = new discord.RichEmbed()
.setDescription(joke)
.setColor(embeds.defaultColor)
.setTimestamp();


    message.channel.send(jokeEmbed)



}
module.exports.help = {
    name: "momma"
}