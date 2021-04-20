const { MessageEmbed } = require('discord.js');
const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'embedtester',
  aliases: ['testembed', 'embedtest'],
  category: 'Owner',
  devOnly: true,
  description: 'MessageEmbed visualizer',
  run: ({ message, args, client, prefix, language }) => {
    const testChannel = '832501191698415646'

    if (message.channel.id !== testChannel) {
      return message.channel.send('You can\'t use this command here.')
    } else {
    const embed = new MessageEmbed()
    .setColor('#2A609C')
    .setTitle('Wicked Immortals Gaming')
    .setDescription('Valheim mod pack update 04-15-2021\nYou will need to update your personal plugins folder in-order to connect')
    .setThumbnail('https://i.imgur.com/nGAqI16.png')
    .setImage('https://i.imgur.com/Ze39T67.png')
    .setTimestamp();

    message.delete().then(() => {
    message.channel.send(embed)
    })}

  },
});
// .setColor('#0099ff')
// .setTitle('Some title')
// .setURL('https://discord.js.org/')
// .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
// .setDescription('Some description here')
// .setThumbnail('https://i.imgur.com/wSTFkRM.png')
// .addFields(
//     { name: 'Regular field title', value: 'Some value here' },
//     { name: '\u200B', value: '\u200B' },
//     { name: 'Inline field title', value: 'Some value here', inline: true },
//     { name: 'Inline field title', value: 'Some value here', inline: true },
// )
// .addField('Inline field title', 'Some value here', true)
// .setImage('https://i.imgur.com/wSTFkRM.png')
// .setTimestamp()
// .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
//
//   .setDescription('You are not allowed to use my eval command.')
//   .addField(
//     'Permission Denied',
//     '```diff\n- You are not allowed to use my eval command.```',
//   )
//   .setTimestamp();
