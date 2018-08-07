const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.guild.roles.find("name", "Staff"); 
          return message.channel.send("**Hey, `" + message.author.username + "` You Do Not Have Enough Perms To Mute or You Need `Staff` Role**");



        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("**Hey, `" + message.author.username + "` You Need To `MENTION USER` Please Try Again**");

        if(toMute.id === message.author.id) return message.channel.send("**Hey, `" + message.author.username + "` You Can't Mute Yourself**");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("**Hey, `" + message.author.username + "` You Can't Mute A Member That Has A `Higher Role/Same Role` As You**");

        let role = message.guild.roles.find(r => r.name === "Muted");
        if(!role) {
            try{
               role = await message.guild.createRole({
                 name: "Muted",
                 color: "#000000",
                preissions: []
              });

              message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(role, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              });
          } catch(e) {
              console.log(e.stack);
          }
      }
       
          if(toMute.roles.has(role.id)) return message.channel.send("**Hey, `" + message.author.username + "` This User Is `ALREADY` Muted**");

          await toMute.addRole(role);
          message.channel.send("**Hey, `" + message.author.username + "` I Have `MUTED` Them**");
}

module.exports.help = {
  name:"mute"
}