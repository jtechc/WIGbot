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
cooldown: 60000,
category: 'Info',
run: ({ message, args }) => {
  const channel = message.mentions.channels.first();

  let embed = new MessageEmbed()
  .setTitle('Wicked Immortals Gaming Website')
  .setDescription('The Wicked Immortals Gaming Store/Website!')
  .setColor('#1E74BB')
  .setURL('https://wickedimmortalsgaming.com/')
  .setThumbnail('https://i.imgur.com/I9gPKnJ.png');

  if (!channel) { return message.channel.send(embed);
  } else {channel.send(embed)}

}
})