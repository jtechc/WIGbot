const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'botinfo',
aliases: ['credits'],
description: 'Bot information and credits',
details: 'Bot information and credits',
minArgs: 0,
maxArgs: 0,
usage: '{prefix}botinfo',
noDisable: false,
cooldown: 15000,
category: 'Info',
run: ({ message }) => {
  const botOwner = 'Jaegnah#9999';

  const embed = new MessageEmbed()
  .setTitle('WIGbot/BrejchaBot')
  .setColor('RANDOM')
  .setDescription('Thanks to')
  .addFields(
    { name: 'Exxon', value: 'for proof-reading my shit code' },
    { name: 'WOK Discord', value: 'for command ideas/help' },
    { name: 'Non-TS gang', value: 'no ts gang here', inline: true },
    { name: 'Probably others', value: 'cause who knows who all helped', inline: true }
  )
  .setFooter(`Originally coded by: ${botOwner}`);
  message.reply(embed);
}
})