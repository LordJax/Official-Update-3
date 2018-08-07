const Discord = require('discord.js');
const fs = require('fs');
var TOKEN = process.env.TOKEN;
var log = require('fancy-log');
var colors = require('colors/safe');
const { version } = require('./package.json');
const ms = require(`ms`);
const ytdl = require('ytdl-core');
const Youtube = require('simple-youtube-api');
const format = require('format-duration');
const queue = new Map();
const logSymbols = require('log-symbols');
const prefixes = require("./jsons/prefixes.json");
const tickts = require("./jsons/tickets.json");
const roles = require("./jsons/roles.json");
const client = new Discord.Client();
const MessageHandler = require('discord-message-handler');
const gm = require("gm").subClass({imageMagick: true});
const moment = require("moment")
const figlet = require('figlet');
var Jimp = require("jimp");
const embeds = require('./jsons/embeds.json');
require("moment-duration-format");
const question = require('./jsons/wyr.json');
require('discord.js-aliases');
let Owner = client.users.get("314165916264955904"); 

const {
	yt_api_key,
} = require('./jsons/config.json');





client.commands = new Discord.Collection();






fs.readdir("./commands/Fun/", (err, files) => {

  if(err) log(err);
  let jsfile = files.filter(file => file.split(".").pop() === "js");
  if(jsfile.length <= 0){
   return;
  }
  jsfile.forEach((file, i) =>{
    let props = require(`./commands/Fun/${file}`);



    client.commands.set(props.help.name, props);
  });

});


fs.readdir("./commands/", (err, files) => {

    if(err) log(err);
    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if(jsfile.length <= 0){
     return;
    }
    jsfile.forEach((file, i) =>{
      let props = require(`./commands/${file}`);
  
  
  
      client.commands.set(props.help.name, props);
    });
  
  });

fs.readdir("./commands/Admin/", (err, files) => {

    if(err) log(err);
    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if(jsfile.length <= 0){
     
      return;
    }
    jsfile.forEach((file, i) =>{
      let props = require(`./commands/Admin/${file}`);
  
  
  
      client.commands.set(props.help.name, props);
    });
  
  });
  fs.readdir("./commands/Misc/", (err, files) => {
  
    if(err) log(err);
    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if(jsfile.length <= 0){
      
      return;
    }
    jsfile.forEach((file, i) =>{
      let props = require(`./commands/Misc/${file}`);
  
  
  
      client.commands.set(props.help.name, props);
    });
  
  });
  fs.readdir("./commands/Owner/", (err, files) => {

    if(err) log(err);
    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if(jsfile.length <= 0){
     
      return;
    }
    jsfile.forEach((file, i) =>{
      let props = require(`./commands/Owner/${file}`);
  
  
  
      client.commands.set(props.help.name, props);
    });
  
  });
  fs.readdir("./commands/Testing-Commands/", (err, files) => {
   
    if(err) log(err);
    let jsfile = files.filter(file => file.split(".").pop() === "js");
    if(jsfile.length <= 0){
     
      return;
    }
    jsfile.forEach((file, i) =>{
      let props = require(`./commands/Testing-Commands/${file}`);
  
  
  
      client.commands.set(props.help.name, props);
    });
  
  });
var commands = {
  say: function(reader, input) {
      var parts = input.replace('say', '').trim().split('@');
          guild = parts.shift(),
          channel = parts.shift(),
          text = parts.join('@');
      var targetguild = bot.client.guilds.find(g => g.name.contains(guild));
      if(targetguild) {
          var targetchannel = targetguild.channels.find(c => c.name.contains(channel));
          if(targetchannel)
              targetchannel.sendMessage(text);
      }
  },
  exit: function(reader) {
      client.disconnect()
          .then(() => {
              reader.close();
          });
  }
};
client.console = {
  listen: function() {
      var rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
      });
      rl.on('line', input => {
          var parts = input.split(' '),
              cmd = parts[0];
          if(commands[cmd])
              commands[cmd](rl, input);
      });
  }
};



const youtube = new Youtube(yt_api_key);

client.on('ready', () => {

    let RestartEmbed = new Discord.RichEmbed()
    .setTitle("Restart Complete.") .setColor(embeds.defaultColor) .setTimestamp();

    let user = client.users.get("314165916264955904");

    user.send(RestartEmbed);


})



client.on('ready', () => {
	console.log(logSymbols.success,`${client.user.username} logged in successfully OGBot Plugin, Version: ${version}`.bold.red); //console.log(logSymbols.success, 'Finished successfully!');
	console.log(colors.red.underline.bold('--------------------------'));
	console.log(colors.cyan.bold(`Loaded in with ${client.guilds.size} Guilds`));
	console.log(colors.cyan.bold(`Loaded in with ${client.users.size} Users`));
    console.log(colors.cyan.bold(`Loaded in with ${client.channels.size} Channels`));
	console.log(colors.red.underline.bold('--------------------------'));
    });
    MessageHandler.enableLogging((filterType, filter, message) => {
        log(`${new Date().toISOString()} ${filterType}: ${filter} - "${message.content}"`);
    });

client.on('ready', () => {
client.user.setActivity(`H.help | ${client.guilds.size} Guilds | ${client.users.size} Users`, {url: "https://twitch.tv/monstercat", type: "STREAMING"});
});


client.on("ready", async () => {  
  //log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      try {
        let link = await client.generateInvite(["ADMINISTRATOR"]);
        
    } catch(e) {
        log(e.stack);
    }

 });



colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });
client.on(`ready`, () => console.log(colors.dim(`https://discordapp.com/oauth2/authorize?client_id=441408729175293975&scope=bot&permissions=2146958591`)))
client.on('disconnect', () => log('I just disconnected, making sure you know'));
client.on('reconnecting', () => log('I will reconnect now...'));



client.on('message', async message => { 
	if (message.author.bot)return;
	if (message.content.startsWith("H.") && message.channel.type !== "text")return message.reply("Please use my commands in a server");							
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "H."
    };
  }

 
   const prefix = prefixes[message.guild.id].prefixes
   if (message.content.startsWith("<@441408729175293975>")) {
      let serverpre = new Discord.RichEmbed()
      .setTitle(`**Hey, ${message.author.username} My prefix is ${prefix}**`)
      .setColor(`#26ff51`);
      
    message.channel.send(serverpre);
	   

  }


	
  if(!message.content.startsWith(prefix))return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];//.toLowerCase();
  let args = messageArray.slice(1);
let commandfile = client.commands.get(cmd.slice(prefix.length))
 if(commandfile){ 
   commandfile.run(client,message,args)
    };
        if(cmd === `${prefix}play`) {
            const voice = message.member.voiceChannel;
            if (voice === undefined) return message.channel.send(`You must be in a voice channel in order to play music`);
            const regex = /^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?.*?(?:v|list)=(.*?)(?:&|$)|^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?(?:(?!=).)*\/(.*)$/;
            const new_input = regex.test(args.slice(0).join(' ')) ? args.slice(0).join(' ').match(regex)[1] : args.slice(0).join(' ');
    
            handleVideos(message, voice, new_input);
        }

        if(cmd === `${prefix}skip`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`No song is playing`);
    
            guildQueue.dispatcher.end('Skip');
    
            if (guildQueue.songs[0] === undefined) return;
    
            
        }
        if(cmd === `${prefix}stats`){
	    let TotalShards = client.shard.totalShards;
            let bicon = client.user.displayAvatarURL;
	    const duration = moment.duration(client.uptime).format(" D [Days], H [Hours], m [minutes], s [Seconds]");
            let statsEmbed = new Discord.RichEmbed()
	    
            .setTitle(`Stats for ${client.user.username}`)
            .addField(`❯ Mem Usage`,  `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
            .addField("❯ Servers", `${client.guilds.size}`)
            .addField(`❯ Owner`, `OfficialGaming#0196`)
	    .addField("❯ Shard", `1 | ${client.shard.count}`)
	    .addField(`❯ Version`, version)
            .addField("❯ Users", `${client.users.size}`)
            .addField("❯ Channels", `${client.channels.size}`)
            .addField("❯ Uptime", duration)
            .addField("❯ Commands", client.commands.size + 19)
            .addField("❯ Discord.js", `v${Discord.version}`)
            .addField("❯ Node.js" , `${process.version}`)
	        .setColor("#36393E")
            .setTimestamp()
            .setThumbnail(bicon);
            
                message.channel.send(statsEmbed);

            
        


        client.on('message', function() {
            if(cmd === `${prefix}loop`){
             var interval = setInterval (function () {
               client.sendMessage(message.channel, "123")
             }, 1 * 500); 
           }
       });




















        if(cmd === `${prefix}ascii`){
  
            if(args.join(' ').length > 14) return message.channel.send('Only 14 characters are admitted!');
            if (!args) return message.channel.send('**Proper Usage: `H.ascii` <Word(s)> **');
              figlet(args.join(' '), (err, data) => {
                message.channel.send('```' + data + '```')
              })


             // if(args[2] === `embed`)
                    
          
        

        }

        if(cmd === `${prefix}close`){
            if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
                    message.channel.delete();
  
         }





        if(cmd === `${prefix}new`){

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






        if(cmd === `${prefix}update`){
            let UpDateEmbed = new Discord.RichEmbed()
            .setTitle("OG Bots updates!")
            .addField("Next update", "Changing color, Updating help")
            	message.channel.send(UpDateEmbed)
        }

        if(cmd ===  `${prefix}getinvite`){

  var noPermsEmbed = new Discord.RichEmbed()
    .setColor(embeds.commandError)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(embeds.insufficientPerms)

    .setTimestamp();
  var noArgsEmbed = new Discord.RichEmbed()
    .setColor(embeds.defaultColor)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(embeds.commandError)

    .setTimestamp();
  

    let guildName = args.join(' ');
    if(!guildName) return message.channel.send(noArgsEmbed);
    var guildUnavalibleEmbed = new Discord.RichEmbed()
      .setColor(embeds.commandError)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(embeds.title.guildUnavalibe)

      .setTimestamp();
    var guildNotFoundEmbed = new Discord.RichEmbed()
      .setColor(embeds.commandError)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(embeds.title.guildNotFound)

      .setTimestamp();
    var clientMissingPermsEmbed = new Discord.RichEmbed()
      .setColor(embeds.commandError)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('Insufficient Permissions in Guild')
      .setDescription(`Client is missing the \`MANAGE_GUILD\` or \`ADMINISTRATOR\` permission(s)!`)
      .setTimestamp();
      let guildID = client.guilds.find('name', guildName).id;
    if(client.guilds.get(guildID).avalible === false) return message.channel.send(guildUnavalibleEmbed);
    if(!client.guilds.get(guildID).me.hasPermission('MANAGE_GUILD' || 'ADMINISTRATOR')) return message.channel.send(clientMissingPermsEmbed);
    client.guilds.get(guildID).fetchInvites().then(inviteCollection => {
      var invitesEmbed = new Discord.RichEmbed()
        .setColor(embeds.color.successMsg)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`Invites for ${client.guilds.get(guildID).name}`)
        .setDescription(inviteCollection.map(singleInvite => singleInvite.code).join(', '))
        .setTimestamp();
      message.channel.send(invitesEmbed);
    })
  

        }

        if(cmd === `${prefix}tickle`){
            const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            
            const client = require('nekos.life');
            const neko = new client();
            
            neko.getSFWTickle().then(tickle => {
                let tickleEmbed = new Discord.RichEmbed()
                    .setDescription(`**${message.author.username}** tickles **${member.user.username}**...`)
                    .setImage(tickle.url)
                    .setFooter('Powered by nekos.life')
                    .setColor(message.guild.me.displayColor)
                    .setTimestamp();
                message.channel.send(tickleEmbed);
            })}

         if(cmd === `${prefix}setTopic`){
            
            if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("No permissions");
            //if(message.author.id)
            let channel = message.mentions.channels.first();
            let topic;
            if (!channel) {
              channel = message.channel;
              topic = args.join(' ');
            }
            else {
              topic = args.slice(1).join(' ').trim();
            }
            await channel.setTopic(topic);
                    let EMBED121212 = new Discord.RichEmbed()
                    .setColor(embeds.defaultColor)
                    .setDescription(`Updated channel topic to **${topic}**`, message.author.tag, channel.name, channel.topic)
                    .setTimestamp();
                  await  message.channel.send(EMBED121212);
          }

          if(cmd === `${prefix}createEmoji`){
            
                if (!args.url || !/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png)$/i.test(args.url) || !args.name) {

                  return message.channel.send(`Unknown URL`);
                }
            
                let emoji = await message.guild.createEmoji(args.url, args.name.join('_'));

                let createEmojiEMBED = new Discord.RichEmbed()
                .setColor(embeds.defaultColor)
                .setDescription(`Created Emoji ${emoji}`);
                    await message.channel.send(createEmojiEMBED);
            
            }

        if(cmd === `${prefix}uptime`){
            const duration = moment.duration(client.uptime).format(" D [Days], H [Hours], m [minutes], s [Seconds]");
            let bicon = client.user.displayAvatarURL;
                let uptimeembed = new Discord.RichEmbed()
                .setTitle(`${client.user.tag}\`s Uptime <a:OGloading:450311760675733524>`)
                
                .setThumbnail(bicon)
                .setColor(embeds.defaultColor)
                .setTimestamp()
                .setDescription(duration);
            
            message.channel.send(uptimeembed)
        }

        //right here
        
        if(cmd === `${prefix}stop`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`No song is playing`);
    
            guildQueue.dispatcher.end('Stop');
            guildQueue.voiceChannel.leave();
            guildQueue.songs = [];
            queue.delete(message.guild.id);

    
            return message.channel.send('Stoped music and left call');
        }

        if(cmd === `${prefix}pause`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`Nothing is playing`);
    
            guildQueue.dispatcher.pause();
    
            return message.channel.send('Paused the queue');
        }

        if(cmd === `${prefix}resume`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`Nothing is playing`);
    
            guildQueue.dispatcher.resume();
    
            return message.channel.send('Resumed the queue');
        }

        if(cmd === `${prefix}queue`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`Nothing is playing`);
    
            const embed = new Discord.RichEmbed()
                .setTitle(`OGBot Music Queue`, true)
                .addField('Now playing', guildQueue.songs[0].title, true)
                .setThumbnail(guildQueue.songs[0].thumbnails.default.url, true)
                .setURL(guildQueue.songs[0].url)
	    	.setColor(embeds.invColor)
                .setDescription(`${guildQueue.songs.map((vid, i = 0) => `**${++i}**: ${vid.title} | **Requested By ${vid.requester.tag}`).join('\n')}**`, true);
            return message.channel.send(embed);
        
            

        }

        if(cmd === `${prefix}np`) {
            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`Nothing is playing`);
    
            const embed = new Discord.RichEmbed()
                .setTitle(guildQueue.songs[0].title)
                .setURL(guildQueue.songs[0].url)
                .setColor(0xFF0000)
                .setThumbnail(guildQueue.songs[0].thumbnails.default.url)
                .addField('Duration', `[${durationFormat(guildQueue.dispatcher.totalStreamTime, guildQueue.songs[0].duration)}]`, true)
                .setFooter(`Requested By ${guildQueue.songs[0].requester.tag}`, guildQueue.songs[0].requester.avatarURL);
            message.channel.send(embed);


        }

	
	
	
	
	


																																						





            if(cmd === `${prefix}send`){
            
                const sayMessage = args.join(' ');
                const messageSend = args.join("-")
                if(sayMessage == undefined)return;
                if(!message.member.hasPermission("READ_MESSAGES")) return;
                let USERM = message.guild.member(message.mentions.users.first())
                message.delete().catch();
                USERM.send(`${sayMessage} \n\n\nFrom ***${message.author.tag}***\n\n\nIn **__${message.guild.name}__**`);
            }


        if(cmd === `${prefix}volume`) {

            const guildQueue = queue.get(message.guild.id);
            if (guildQueue === undefined) return message.reply(`Nothing is playing`);
            if (args[0] === undefined) return message.channel.send(`Current volume is set to ${guildQueue.volume}`);
    
            if (parseInt(args[0]) > 10 || parseInt(args[0]) < 0) return message.channel.send('Volume must be in between 0 and 10');
    
            guildQueue.dispatcher.setVolumelogarithmic(parseInt(args[0]) / 5);
    
            let volumeEmbed = new Discord.RichEmbed()
            .setTitle(`Volume is now set to ${args[0]}`)
	    .setColor(`#36393E`)
    
            return message.channel.send(volumeEmbed);
        }

        function grabGuildDuration(songs) {
            let ranArr = [];
            for (const song of songs) {
                const duration = song.duration * 1000;
                ranArr.push(duration);
            }
        
            return format(ranArr.reduce((a, b) => a + b));
        }



    }});

    function durationFormat(cDuration, duration) {
        const stringedDuration = format(cDuration);
            const { hours, minutes, seconds } = duration;


        if (hours === 0 && minutes === 0 && seconds === 0) return `LIVE / LIVE`;
    
    
    
        return hours === 0 ? `${minutes}:${seconds} / ${stringedDuration}` : `${hours}:${minutes}:${seconds} / ${stringedDuration}`;
    }
    
    async function handleVideos(message, voice, new_input) {
        try {
            let video = await youtube.getVideoByID(new_input);
            video.requester = message.author;
            handleQueue(video, message.guild.id, voice, message.channel);
        } catch (noVideoError) {
            try {
                let i = 0;
                let videos = await youtube.searchVideos(new_input);

                    let playEmbed = new Discord.RichEmbed()
                    .setTitle(`Pick a song by typing the number in chat`)
                    .setDescription(`${videos.map(vid => `[${++i}] - ${vid.title}`).slice(0, 10).join('\n')}`)
		    .setColor("#36393E");
                        message.channel.send(playEmbed);
                //message.channel.send(`Choose a song\n\n${videos.map(vid => `[${++i}] - ${vid.title}`).slice(0, 10).join('\n')}`, { code: 'md' });
                try {
                    const filter = msg => msg.author.id === message.author.id && parseInt(msg.content) < 10 && parseInt(msg.content) > 0;
                    const response = await message.channel.awaitMessages(filter, {
                        time: 30 * 1000,
                        maxMatches: 1,
                        errors: ['time']
                    });
    
                    const index = parseInt(response.first().content) - 1;
                    videos[index].requester = message.author;
                    handleQueue(videos[index], message.guild.id, voice, message.channel);
                } catch (noResponse) {
                    return message.reply(`You didnt pick a song!`);
                }
            } catch (error) {
                throw new Error('No videos found.');
            }
        }
    }
    
    async function handleQueue(video, guildID, voice, text, playlist = false) {
        let guildQueue = queue.get(guildID);
    
        if (guildQueue === undefined) {
            const serverQueue = {
                songs: [],
                voiceChannel: voice,
                dispatcher: null,
                connection: null,
                textChannel: text,
                volume: 1
            };
    
            queue.set(guildID, serverQueue);
    
            serverQueue.songs.push(video);
    
            try {
                serverQueue.connection = await serverQueue.voiceChannel.join();
                play(serverQueue.songs[0], guildID);
            } catch (error) {
                log(error);
            }
        } else {
            guildQueue.songs.push(video);
            if (playlist === true) return;
    
                    let addEmbed = new Discord.RichEmbed()
                    .setTitle(`Added **${video.title}** to the queue`)
		    .setColor(`#36393E`);
    
            guildQueue.textChannel.send(addEmbed);    
        }
    }
    
    function play(song, guildID) {
        const guildQueue = queue.get(guildID);
    

    
        guildQueue.dispatcher = guildQueue.connection.playStream(ytdl(song.url), { volume: guildQueue.volume / 5 });
    
        let PlayEmbed = new Discord.RichEmbed()
        .setTitle(`Now playing **${song.title}**`)
        .setColor("36393E");
    
        guildQueue.textChannel.send(PlayEmbed);//(`Now Playing: **${song.title}**`)
        guildQueue.dispatcher.on('end', reason => {
            if (reason === 'Stop' || reason === 'Leave') return;
            guildQueue.songs.shift();
            play(guildQueue.songs[0], guildID);
        }).on('error', err => log(err));
    }



    
  



client.login("NDQxNDA4NzI5MTc1MjkzOTc1.DhXpTA.NmEINzcifiWCj_npKa-x_2anKLU")