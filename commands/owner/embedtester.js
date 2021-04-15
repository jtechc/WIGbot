const { MessageEmbed } = require('discord.js');

module.exports = {
  commands: ['testembed', 'embedtest'],
  category: 'Owner',
  ownerOnly: true,
  description: 'MessageEmbed visualizer',
  callback: ({ message, args, text, channel }) => {
    const embed = new MessageEmbed();

    message.author.send(embed);
  },
};
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
