const Discord = require("discord.js");


module.exports.run = async (client,message,args) => {
const prefixes = require("./jsons/prefixes.json");
const prefix = prefixes[message.guild.id].prefixes;
const oghelp = message.content.split(" ").slice(1).join(" ");
const bicon = client.user.avatarURL

if (!oghelp) {	
	const RichEmbed = new Discord.RichEmbed()
	.setAuthor(`Hello ${message.author.username} These Are My Commands | Commands are case-sensitive`)

	.setColor("#00ff94")
	.setThumbnail(bicon)
	.setFooter(`${message.guild.name} | ${message.guild.memberCount} Members | Made By OfficialGamingOG`, `${message.guild.iconURL}`)
	.addField("Prefix", `**${prefix}**`)


	

	.addField("Staff", "**`announce` | `ban` | `perms` | `kick` | `mute` | `purge` | `poll` | `addrole` | `delrole` | `report` | `setNick` | `warn` | `setTopic`**")

	.addField("Fun", "**`8ball` | `avatar` | `bird` | `bunny` | `cat` | `coin` | `dog` | `banner` | `illegal` | `meme` | `spinner` | `flip` | `fortnite` | `gif` | `math` | `momma` | `morsecode` | `pick` | `ping` | `plane` | `quiz` | `roll` | `randomurban` | `urban` | `icon` | `space` | `steve` | `trump` | `shorturl` | `google` | `weather` | `ascii` | `send`**")

	.addField(`NSFW`, "**`H.nsfw For commands`**")

	.addField(`Music`, "**`play` | `leave` | `skip` | `queue` | `volume` | `np` **")

	.addField("Contact", "**`Bugs/Spelling Contact Owner OfficialGamingOG#0196`**")
 
	.setTimestamp()
	
    .addField('**More help:**', 'for more help type ```'+ prefix +'help <command>```')	 

    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`);
    message.channel.send({embed: RichEmbed});
    
}
if (oghelp == "ping"){
	  let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('ping help')
	  .setDescription('pongs the bot and sends ping time in ms')
	  .addField('**Usage:**', `${prefix}ping`)
	  message.channel.send(helpbed);
	  
}
if (oghelp == "invite"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('invite help')
	  .setDescription('sends an embed with the bot invite url in it')
	  .addField('**Usage:**', `${prefix}invite`)
	  message.channel.send(helpbed);
	  
}
if (oghelp == "setprefix"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Prefix help')
	  .setDescription('sets the guild prefix to something else')
	  .addField('**Usage:**', `${prefix}setprefix <new prefix>`)
      .addField('**Example:**', `${prefix}setprefix ;~;`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "avatar"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Avatar help')
	  .setDescription('See the avatar for somone!')
	  .addField('**Usage:**', `${prefix}avatar, ${prefix}avatar <user>`)
      .addField('**Example:**', `${prefix}avatar @OfficialGamingOG`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "ban"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Ban help')
	  .setDescription('Bans users')
	  .addField('**Usage:**', `${prefix}ban <user> <reason>`)
      .addField('**Example:**', `${prefix}ban @OfficialGamingOG spam`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "fortnite"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Fortnite help')
	  .setDescription('Check a users fortnite stats')
	  .addField('**Usage:**', `${prefix}fortnite <nick/name> <pc,xb1,psn>`)
      .addField('**Example:**', `${prefix}fortnite ninja pc`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "addrole"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Addrole help')
	  .setDescription('Give users a roles')
	  .addField('**Usage:**', `${prefix}addrole <user> <role>`)
      .addField('**Example:**', `${prefix}addrole @OfficialGamingOG Owner`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "delrole"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Delrole help')
	  .setDescription('Removes the users role')
	  .addField('**Usage:**', `${prefix}delrole <user> <role>`)
      .addField('**Example:**', `${prefix}delrole @OfficialGamingOG Owner`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "meme"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Meme help')
	  .setDescription('Sends a random meme')
	  .addField('**Usage:**', `${prefix}meme`)
      .addField('**Example:**', `${prefix}meme`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "mute"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Mute help')
	  .setDescription('Mutes a user')
	  .addField('**Usage:**', `${prefix}mute <user>`)
      .addField('**Example:**', `${prefix}mute @OfficialGamingOG`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "kick"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Kick help')
	  .setDescription('Kicks users')
	  .addField('**Usage:**', `${prefix}kick <user> <reason>`)
      .addField('**Example:**', `${prefix}kick @OfficialGamingOG BOI`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}

if (oghelp == "purge"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Purge help')
	  .setDescription('Clear messages')
	  .addField('**Usage:**', `${prefix}purge <2-100>`)
      .addField('**Example:**', `${prefix}purge 53`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
}

	  if (oghelp == "help"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Help help')
	  .setDescription(`Wow ur retarted ${message.author}`)
	  message.channel.send(helpbed);
	  
}
if (oghelp == "bunny"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('Bunny help')
	  .setDescription('A bunny')
	  .addField('**Usage:**', `${prefix}bunny`)
      .addField('**Example:**', `${prefix}bunny`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "8ball"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('8ball help')
	  .setDescription('Gives a random question')
	  .addField('**Usage:**', `${prefix}8ball <question>`)
      .addField('**Example:**', `${prefix}8ball Is the world going to end?`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "announce"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('announce help')
	  .setDescription('Announce somthing')
	  .addField('**Usage:**', `${prefix}announce <message>`)
      .addField('**Example:**', `${prefix}announce New Update!`)
	  .addField('**Pemissions required:**', '`ADMINISTRATOR`')
	  message.channel.send(helpbed);
	  
}
if (oghelp == "perms"){
	let helpbed = new Discord.RichEmbed()
	  .setColor(`${message.member.displayHexColor}`)
	  .setTitle('perms help')
	  .setDescription('Check users perms')
	  .addField('**Usage:**', `${prefix}perms <user> `)
      .addField('**Example:**', `${prefix}perms @OfficialGaming`)
	  .addField('**Pemissions required:**', '`NONE`')
	  message.channel.send(helpbed);
	  
}




}
module.exports.help = {
	name: "help"
}
