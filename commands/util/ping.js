const { MessageEmbed } = require('discord.js');

module.exports = {
  minArgs: 0,
  maxArgs: 0,
  cooldown: '15s',
  category: 'Utility',
  description: 'check ping',
  // init: (client, instance) => {
  //   console.log('Initializating...')
  // },
  callback: ({ message, args, text, client }) => {
    message.reply('```Checking my ping to the server...```').then((resultMessage) => {
      const latency = resultMessage.createdTimestamp - message.createdTimestamp;

      resultMessage.edit(
        `\`\`\`Calculated my ping to the server.\nBot latency: ${latency}ms | API: ${client.ws.ping}ms\`\`\``,
      );
    });
  },
};

// module.exports = {
//   category: 'Utility',
//   callback: ({ message }) => {
//     message.reply('pong')
//   },
//   error: ({ error, command, message, info }) => {
//     if (error === 'COMMAND DISABLED') {
//       const embed = new MessageEmbed()
//       .setTitle('Command disabled')
//       .setColor(0xff0000)

//       message.replay(embed)
//     }
//   }
// }
// module.exports = {
//   name: 'ping',
//   permissions: [],
//   description: 'this is a ping command',
//   execute(client, message, args) {
//     if (message.author.id === process.env.BOTOWNERID) {
//       message.channel.send('pong!');
//     }
//   },
// };
