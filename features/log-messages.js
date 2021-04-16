const chalk = require('chalk');
const { Feature } = require('cdcommands');

module.exports = new Feature((client, instance) => {
  client.on('message', (message) => {
    console.log(
      chalk.greenBright(
        `${message.author.tag} => (#${message.channel.name}):`,
      ) + ` ${message.content}`,
    );
  });
});

// module.exports.config = {
//   displayName: 'WIGlogger',
//   dbName: 'WIGBOTDB',
//   loadDBFirst: true,
// };