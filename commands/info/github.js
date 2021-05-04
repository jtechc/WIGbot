const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'github',
aliases: ['git'],
description: 'Link to github repo',
details: 'Link to github repo',
minArgs: 0,
maxArgs: 0,
usage: '{prefix}github',
noDisable: false,
cooldown: 15000,
category: 'Info',
run: ({ message }) => {
  const embed = new MessageEmbed()
  .setTitle('Github Repo')
  .setDescription('Current Branch: brejchabot\n' + 'https://github.com/jtechc/WIGbot/tree/brejchabot')
  .setColor('RANDOM')
  .setFooter(`Requested by ${message.author.tag}`);
  message.reply(embed);
}
})