const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");
const config = require('./jsons/botconfig.json');
const embeds = require('./jsons/embeds.json');
const request = require('snekfetch');
const fs = require("fs")
const randomPuppy = require('random-puppy');

module.exports.run = async (client,message,args) => {
    const oghelp = message.content.split(" ").slice(1).join(" ");
        const helpEmbed = new Discord.RichEmbed()
        .setTitle("NSFW Commands")
        .setDescription(`**neko** | **trap** | **hentai** | **dva** | **anime** | **ass** | **boobs** | **asain** | **4k** | **public** | **gif** | **ass** | **pussy** | `)
        .setColor(embeds.defaultColor)
        .setTimestamp();
    if(!oghelp)return(message.channel.send(helpEmbed))



    if (oghelp == "neko"){
        if (message.guild.id === "266326892091670528") return;

        let {body} = await superagent
        .get(`https://nekos.life/api/lewd/neko`);
        if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
      
        let lewdEmbed = new Discord.RichEmbed()
        .setColor(embeds.defaultColor)
        .setTitle(`Neko!`)
        .setImage(body.neko);
    
        message.channel.send(lewdEmbed);
    
    }

    
    if (oghelp == "trap"){

        if (message.guild.id === "266326892091670528") return;

        let {body} = await superagent
        .get(`https://api.computerfreaker.cf/v1/trap`);
        if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
      
        let TrapEmbed = new Discord.RichEmbed()
        .setColor(embeds.defaultColor)
        .setTitle(`Trap!`)
        .setImage(body.url);
    
        message.channel.send(TrapEmbed);
    }

    if (oghelp == "hentai"){

        if (message.guild.id === "266326892091670528") return;

        let {body} = await superagent
        .get(`https://api.computerfreaker.cf/v1/hentai`);
        if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
      
        let HentaiEmbed = new Discord.RichEmbed()
        .setColor(embeds.defaultColor)
        .setTitle(`Hentai!`)
        .setImage(body.url);
    
        message.channel.send(HentaiEmbed);

    }

    if (oghelp == "boobs"){
        var max = 12449;
        var min = 10000;
        var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
        var MathLoL = Math.round(MathRan);
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
                fs.writeFile(`boobs.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./boobs.jpg`)
            })
        }
    }


    if (oghelp == "dva"){
        if (message.guild.id === "266326892091670528") return;

        let {body} = await superagent
        .get(`https://api.computerfreaker.cf/v1/dva`);
        if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
      
        let DVAEmbed = new Discord.RichEmbed()
        .setColor(embeds.defaultColor)
        .setTitle(`Dva!`)
        .setImage(body.url);
    
        message.channel.send(DVAEmbed);

    }


    if (oghelp == `anime`){
        if (message.guild.id === "266326892091670528") return;

        let {body} = await superagent
        .get(`https://api.computerfreaker.cf/v1/anime`);
        if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
      
        let AnimeEmbed = new Discord.RichEmbed()
        .setColor(embeds.defaultColor)
        .setTitle(`Anime!`)
        .setImage(body.url);
    
        message.channel.send(AnimeEmbed);

    }

    if (oghelp == `4k`){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'NSFW_Wallpapers',
            'SexyWallpapers',
            'HighResNSFW',
            'nsfw_hd',
            'UHDnsfw'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                request.get(url).then(r => {
                    fs.writeFile(`4k.jpg`, r.body)
                    message.channel.sendFile(r.body)
                    fs.unlink(`./4k.jpg`)
                })
            })
    }
    
    if (oghelp == `asain`){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'AsianHotties',
            'juicyasians',
            'asianbabes'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                request.get(url).then(r => {
                    fs.writeFile(`asian.jpg`, r.body)
                    message.channel.sendFile(r.body)
                    fs.unlink(`./asian.jpg`)
                })
            })
    }

    if(oghelp == `public`){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'naughtyinpublic',
            'gwpublic',
            'exposedinpublic',
            'beachgirls'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                request.get(url).then(r => {
                    fs.writeFile(`public.jpg`, r.body)
                    message.channel.sendFile(r.body)
                    fs.unlink(`./public.jpg`)
                })
            })
    }

    if (oghelp == `gif`){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        const subreddits = [
            "NSFW_GIF",
            "nsfw_gifs",
            "porninfifteenseconds",
            "60FPSPorn",
            "porn_gifs",
            "nsfw_Best_Porn_Gif",
            "LipsThatGrip",
            "adultgifs"
        ]
    
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
                .then(url => {
                    const embed = new Discord.RichEmbed()
                        .setColor(0xffa500)
                        .setImage(url)
                    message.channel.send({ embed });
            })
   
    }
    if (oghelp == `pussy`){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    
        var subreddits = [
            'pussy',
            'rearpussy',
            'simps',
            'vagina',
            'MoundofVenus',
            'PerfectPussies',
            'spreading'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        randomPuppy(sub)
            .then(url => {
                request.get(url).then(r => {
                    fs.writeFile(`BotAvatar.jpg`, r.body)
                    message.channel.sendFile(r.body)
                    fs.unlink(`./BotAvatar.jpg`)
                })
            })
    
     }

   if (oghelp == `ass`){
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`ass.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./ass.jpg`)
        })
    }
    

    

   }

 


//if (oghelp == `____________`){

//}
//if (oghelp == `____________`){

//}
//if (oghelp == `____________`){

//}
//if (oghelp == `____________`){

//}
//if (oghelp == `____________`){

//}


}
module.exports.help = {
    name: "nsfw"
}


