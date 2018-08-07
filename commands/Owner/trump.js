const gm = require('gm')

const fs = require('fs')

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("please say something for this meme")

    
        
    
    let e = args.join(" ")

  gm('hb.png')
    .stroke("#000000")
    .font("Cleon-Light", 25)
    .drawText(18, 104, e)
    .write("Out.png", function (err) {
      
        

     message.channel.send({
            files: [
               "Out.png"
            ]
        })
    })
    
}


module.exports.help = {
    name: "trump"
}