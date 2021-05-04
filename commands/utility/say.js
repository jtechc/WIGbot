const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'say',
aliases: ['botsay'],
description: 'Say things you want the bot to say',
details: 'Say things you want the bot to say',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}say <message>',
noDisable: false,
cooldown: 15000,
category: 'Utility',
run: ({ message, args, client, prefix, language }) => {
  if(!args[0]) return message.reply('Oh, you have to want me to say... something...right?').then(msg => msg.delete({ timeout: 5000}))
  else {
    message.delete()
    message.channel.send(args.join(" "))
  }
}
})