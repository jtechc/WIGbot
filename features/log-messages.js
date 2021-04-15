const chalk = require('chalk');
module.exports = (client, instance) => {
  client.on('message', (message) => {
    console.log(
      chalk.greenBright(
        `${message.author.tag} => (#${message.channel.name}):`,
      ) + ` ${message.content}`,
    );
  });
};

module.exports.config = {
  displayName: 'WIGlogger',
  dbName: 'WIGBOTDB',
  loadDBFirst: true,
};
