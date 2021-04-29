const { Command } = require("cdcommands");
const { MessageEmbed } = require('discord.js');

module.exports = new Command ({
  name: 'ping',
  description: 'check ping',
  details: 'check ping',
  minArgs: 0,
  maxArgs: 0,
  usage: '{prefix}ping',
  guildOnly: true,
  noDisable: true,
  cooldown: 15000,
  category: 'Utility',
  run: async ({ message, client }) => {

    let member = message.member;
    const msg = await message.reply('```Checking my ping to the server...```')
    const latency = msg.createdTimestamp - message.createdTimestamp;
    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`PONG! :ping_pong:`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields(
      {name: 'Latency', value: `\`${latency}ms\``},
      {name: 'API Latency', value: `\`${Math.round(client.ws.ping)}ms\``},
    );
    await msg.delete();
    await message.channel.send(embed);
  },
});