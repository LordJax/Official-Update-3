const Discord = require("discord.js");
const gm = require("gm").subClass({imageMagick: true});
const request = require('request');

module.exports.run = async (client,message,args) => {
    var input = message.content.substr(13);
    var k = [];k["a"] = "ðŸ‡¦";k["b"] = "ðŸ‡§";k["c"] = "ðŸ‡¨";k["d"] = "ðŸ‡©";k["e"] = "ðŸ‡ª";k["f"] = "ðŸ‡«";k["g"] = "ðŸ‡¬";k["h"];"ðŸ‡­";k["i"] = "ðŸ‡®";k["j"] = "ðŸ‡¯";k["k"] = "ðŸ‡°";k["l"] = "ðŸ‡±";k["m"] = "ðŸ‡²";k["n"] = "ðŸ‡³";k["o"] = "ðŸ‡´";k["p"] = "ðŸ‡µ";k["q"] = "ðŸ‡¶";k["r"] = "ðŸ‡·";k["s"] = "ðŸ‡¸";k["t"] = "ðŸ‡¹";k["u"] = "ðŸ‡º";k["v"] = "ðŸ‡»";k["w"] = "ðŸ‡¼";k["x"] = "ðŸ‡½";k["y"] = "ðŸ‡¾";k["z"] = "ðŸ‡¿";
    var _result = "";
    for (i = 0; i < input.length; i++) {
        var emoji = k[input.substr(i,i)];
        //if (emoji == null){
        //	emoji = "."
        //}
        if (input.substr(i,i) == " "){
            emoji = "   ";
        }
        _result = _result + emoji;
    }
    cmd = true;
    function r(time,emoji){
        setTimeout(function(){ message.react(emoji); }, time * 500);
    }
    function rem(time){
        setTimeout(function(){ message.clearReactions() }, time * 1000);
    }
    r(0, "ðŸ‡´");
    r(1, "ðŸ‡°");
    rem(2);
    setTimeout(function(){
        r(0, "ðŸ‡­");
        r(1, "ðŸ‡¦");
        rem(2);
    }, 3000);
    setTimeout(function(){
        r(0, "ðŸ‡­");
        r(1, "ðŸ‡¦");
        rem(2);
    }, 6000);
    setTimeout(function(){
        message.reply(_result)
            .catch(console.error);
    }, 7000);



}
module.exports.help = {
    name: "cryptic"
}    
    
    
    
    
    
