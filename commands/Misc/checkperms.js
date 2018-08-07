const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
  

  let pUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let fields = [];

let permissions = pUser.permissions.serialize();
for (let permission in permissions) {
  fields.push({
    name: permission.replace(/_/g, ' ').toLowerCase(),
    value: permissions[permission],
    inline: true
  });

  if (args[0] = null) message.channel.send("Specify a user!")  
}
message.channel.send({
  embed: {
    title: `Permissions for ${message.author}`,
    description: 'Permissions I have in this channel and server.',
    fields: fields

    
  }
}).catch(e => {
   console.log(e)
});


}
module.exports.help = {
    name: "perms"
}
