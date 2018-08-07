
const Discord = require("discord.js");
module.exports.run = async (client,message,args) => {
    const { get } = require('http');
    function images() {
        return new Promise((resolve, reject) => {
            get('http://api.imgflip.com/get_memes', res => {
                const { statusCode, statusMessage } = res;
                if (statusCode !== 200) reject(new Error(`Error on request: Code: ${statusCode}, Message: ${statusMessage}`));
                let data = '';
                res.on('data', rawData => { data += rawData; });
                res.on('end', () => {
                    try {
                        const response = JSON.parse(data);
                        if (response.success === false) reject(new Error(`Error grabbing images...`));
                        if (response.data.memes === undefined || response.data.memes.length <= 0) reject(new Error(`No images found...`));
                        const links = [];
                        for (const image of response.data.memes) {
                            const obj = { name: image.name, url: image.url };
                            links.push(obj);
                        }
                        resolve(links);
                    } catch (error) {
                        reject(error.message);
                    }
                });
            }).on('error', err => {
                reject(err.message);
            });
        });
    }
    
    images().then(imgs => {
        const { url, name } = imgs[Math.floor(Math.random() * imgs.length)];
        message.channel.send(`${name}\n${url}`);
    });    
}
module.exports.help = {
    name: "meme"
}