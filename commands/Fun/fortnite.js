const Discord = require("discord.js");
const gm = require('gm')
const fs = require('fs')
const ms = require("ms");
const Fortnite = require("fortnite");
const FT = new Fortnite("0884042e-221e-4b8d-a3bb-2bfcd95a5381");



module.exports.run = async (client,message,args) => {

 


    let username = args[0];
    let platform = args[1] || "pc";



    FT.getInfo(username, platform).then(data => {
        let stats = data.lifetimeStats;
        let kills = stats.find(s => s.stat == 'kills');
        let kd = stats.find(s => s.stat == 'kd');
        let wins = stats.find(s => s.stat == 'wins');
        let win = stats.find(s => s.stat == 'win');
        let t5 = stats.find(s => s.stat == 'top5s');
        let mPlayed = stats.find(s => s.stat == 'matchesPlayed');


        gm('Status2.png')
        .stroke("#000000")
        .font("Arial", 35)
        .drawText(331, 32, kills.value)
 //       .font("Arial", 35)
//        .drawText(192, 255, kills.value)
 //       .font("Arial", 35)
 //       .drawText(484, 256, kd.value)
 //       .font("Arial", 35)
  //      .drawText(789, 252, wins.value)
   //     .font("Arial", 35)
    //    .drawText(190, 376, win.value)
     //   .font("Arial", 35)
      //  .drawText(496, 375, t5.value)
       // .font("Arial", 35)
       //.drawText(773, 373, mPlayed.value)
        .write("Fortnite2.png", function (err) {
          
            message.channel.send({files: [
                {
                   attachment: "Fortnite2.png",
                   name: "avatar.png"
                }
             ]});

        });

    }).catch(e => {
        console.log(e)
        //message.channel.send("Couldn't find that username.");
    });



  }

module.exports.help = {
    name: "fortnite"
}