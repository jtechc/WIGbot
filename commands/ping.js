const { MessagedEmbed } = require('discord.js')

module.exports = {
  minArgs: 0,
  maxArgs: 0,
  category: 'Utility',
  description: 'check ping',
  init: (client, intance) => {
    console.log('Initializating...')
  },
  callback: ({ message }) => {
    message.reply('pong')
  }
}




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