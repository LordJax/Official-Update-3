const Discord = require("discord.js");
var TOKEN = process.env.TOKEN;

module.exports.run = async (client,message,args) => {



if (message.author.id !== "314165916264955904")return;

message.channel.send('Restarting...')
    client.destroy()
    .then(() => client.login(TOKEN));


}
module.exports.help = {
    name: "restart"
}
