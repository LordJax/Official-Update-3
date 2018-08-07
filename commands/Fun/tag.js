const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    exports.run = (bot, message, args) => {
        const id = args[0];
        if (id == undefined) {
          message.reply("No argument set");
          return;
        } else {
          const arr = [];
          message.guild.fetchMembers().then(guild => {
            guild.members.forEach(member => {
              if (member.user.discriminator === id) arr.push(`<@${member.user.id}>`);
            });
            if (arr.length > 0) {
              message.reply("Users that have #" + id + " -> " + arr.join(", "));
            } else {
              message.reply("No one has that discriminator");
            }
          });
        }
      };
      


}
module.exports.help = {
    name: "tag"
}