const Discord = require('discord.js'),
      math = require('math-expression-evaluator');

exports.run = (client, message, args, tools) => {
    
    const embed = new Discord.RichEmbed()
        .setColor("#00ff94");
    
    if (!args[0]) {
        
        embed.setFooter('Please input an expression.');
        
        return message.channel.send(embed);
        
    }
    
  
    let result;

   

    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) { 
        
        result = 'Error: "Invalid Input"';

        if (args[0].includes(9+10)){
            result = result.replace(9+10, "21");
        } 
        
    }




    embed.addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``);
    message.channel.send(embed);

    
    
}

module.exports.help = { 
  name: "math"
}