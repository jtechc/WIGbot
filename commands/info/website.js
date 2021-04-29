const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'website',
description: 'Wicked Immortals Gaming Website',
details: 'Wicked Immortals Gaming Website',
minArgs: 0,
maxArgs: 1,
usage: '{prefix}website [channel]',
userPermissions: ['SEND_MESSAGES'],
noDisable: false,
category: 'Info',
run: ({ message, args }) => {
  const channel = message.mentions.channels.first();
  args[0] = channel;

  let embed = new MessageEmbed()
  .setTitle('Wicked Immortals Gaming Website')
  .setDescription('The Wicked Immortals Gaming Store/Website!')
  .setColor('#1E74BB')
  .setURL('https://wickedimmortalsgaming.com/')
  .setThumbnail('https://i.imgur.com/I9gPKnJ.png')
  .setTimestamp();

  if (args[0] === channel) return message.channel.send(embed);
  message.reply(embed)

}
})