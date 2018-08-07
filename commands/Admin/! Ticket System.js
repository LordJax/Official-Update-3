const Discord = require("discord.js");
const fs = require("fs");
const tickts = require("./jsons/tickets.json");
const embeds = require('./jsons/embeds.json');


module.exports.run = async (client, message, args) => {
    const oghelp = message.content.split(" ").slice(1).join
    const prefixes = require("../jsons/prefixes.json");
const prefix = prefixes[message.guild.id].prefixes;


if(oghelp === `add`){
    message.channel.send("W.I.P Command");
}


if(oghelp === `close`){
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === `${prefix}confirm`, {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}


if(oghelp === `new`){


if(!tickts[message.guild.id]){
    tickts[message.guild.id] = {
      tickts: 0000
    };
  }
let tickets = tickts[message.guild.id].tickts;

const person = client.users.find('id', message.author.id);
let exists = message.guild.channels.find(c=>c.name.includes(`${person.discriminator}`));
let sprt = message.guild.roles.find("name", "Support Team")
let reason = message.content.split(' ').slice(1).join(' ');
if(!reason) return message.reply(`Please put a reason why you are making a ticket!`).then(msg => msg.delete(5000));

if(!sprt)return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
if(exists)return message.channel.send(`You already have a ticket open...<#${exists.id}>`);


tickts[message.guild.id] = {
      tickts: tickts[message.guild.id].tickts + 1
    };
fs.writeFile("./tickets.json", JSON.stringify(tickts), (err) => {
    if(err) console.log(err)
    });
message.guild.createChannel(`ticket-${tickets}-${person.discriminator}`, "text").then(c => {
let role = message.guild.roles.find("name", "Support Team");
let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, <#${c.id}>.`);

        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .addField("Reason", `${reason}`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
}



module.exports.help = {
  name: "ticket"
}