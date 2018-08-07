module.exports.run = async (client,message,args) => {




let lastDate = Date.now() - 86400000;
let startDate = 267062400000;
let comicDate = new Date(getRandomInt(startDate, lastDate));

let year = comicDate.getUTCFullYear();
let month = comicDate.getUTCMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}
let date = comicDate.getUTCDate();
if (date < 10) {
  month = `0${date}`;
}

message.channel.send({
  files: [ `https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/${year}/${year}-${month}-${date}.gif` ]
}).catch(e => {
  if (e.status === 404) {
    return message.reply('I\'m sorry. I was unable to react Garfield at that moment. Could you try again?');
  }
  console.error(e);
});
}
module.exports.help = {
    name: "garfield"
}