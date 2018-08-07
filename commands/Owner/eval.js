const Discord = require("discord.js");

const client = new Discord.Client();



let parseTime = function(msec) {
    var seconds = Math.floor(msec/1000); msec %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};



module.exports.run = async (client,message,args) => {
    var OGEVAL = message.guild.members.find("id", "314165916264955904");
    if (message.member !== OGEVAL)return message.channel.send("**Hey, `" + message.author.username + "` Eval is a Owner command!**");


    
    
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

    try{
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string"){
        evaled = require("util").inspect(evaled);
      }
        if (evaled.includes(client.token)){
            evaled = evaled.replace(client.token, "Nice try");
        }  








    let embed = new Discord.RichEmbed()
    .addField(`Input`, "***```" + code + "```***", true)
    .addField(`Output`, `\`\`\`js\n${evaled}\`\`\``)
    .setColor("#00ff94")// 
    .setTimestamp()





await message.channel.send(embed);





    } catch (err) {



    let errorEmbed = new Discord.RichEmbed()
    .addField(`Error`, "**```" + clean(err) + "```**", true)
    .setColor("#00ff94");
    message.channel.send(errorEmbed);
    }    
}
module.exports.help = {
    name: "eval"
}