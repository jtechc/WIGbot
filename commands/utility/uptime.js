const { MessageEmbed } = require('discord.js');
const { Command } = require('cdcommands');

module.exports = new Command({
name: 'uptime',
description: 'Bot uptime',
details: 'Bot uptime',
minArgs: 0,
maxArgs: 0,
usage: '{prefix}uptime',
noDisable: false,
cooldown: 15000,
category: 'Utility',
run: async ({ message, client }) => {
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;

  let uptimeE = new MessageEmbed()
  .setTitle('WIGbot Uptime')
  .setColor('RANDOM')
  .setDescription(`\nDay(s) online: ${days}\n\nHour(s) online: ${hours}\n\nMinute(s) online: ${minutes}\n\nSecond(s) online: ${seconds}`)
  .setFooter(`Requested by: ${message.author.username}`);
  message.channel.send(uptimeE)
  return;
}
})