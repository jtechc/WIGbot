const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'ping',
  description: 'check ping',
  details: 'check ping',
  minArgs: 0,
  maxArgs: 0,
  usage: '{prefix}ping',
  noDisable: true,
  cooldown: 15000,
  category: 'Utility',
  run: ({ message, client }) => {

    const msg = await message.reply('```Checking my ping to the server...```');
    const latency = msg.createdTimestamp - message.createdTimestamp;
    msg.edit(
      `\`\`\`Calculated my ping to the server.\nBot latency: ${latency}ms | API: ${Math.round(client.ws.ping)}ms\`\`\``
    );

    /* You should really Math.round client.ws.ping.
    message.reply('```Checking my ping to the server...```').then((resultMessage) => {
      const latency = resultMessage.createdTimestamp - message.createdTimestamp;

      resultMessage.edit(
        `\`\`\`Calculated my ping to the server.\nBot latency: ${latency}ms | API: ${client.ws.ping}ms\`\`\``,
      );
    });*/
  },
});

// module.exports = { You are aware you can do /** */ or /* */ for comments as well? Then no need to add // for every line.
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
