const { ShardingManager } = require('discord.js');
var TOKEN = process.env.TOKEN;
const shard = new ShardingManager('./bot.js', {
  token: TOKEN,
  autoSpawn: true
});

shard.spawn(2);

let TotalShards = shard.totalShards;

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id} | ${TotalShards}`));
