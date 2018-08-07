const Discord = require(`discord.js`);



exports.run = async (client, message, [args]) => {
    if (!args) return message.channel.send('**Proper Usage: `OG.8ball` <Question> **')
    // message.delete();
    let response = ["Yes", "Maybe", "No", "Try again later", "Possibly", "Absolutely"];

    message.channel.send(`${response[~~(Math.random() * response.length)]}, ${message.author.username}.`);    
};


exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};
      
exports.help = {
    name: "8ball",

};