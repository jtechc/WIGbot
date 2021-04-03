const chalk = require('chalk');
module.exports = async (client) => {
  let guild = client.guilds.cache.get('process.env.GUILDID');
  setInterval(() => {
    let memberCount = guild.memberCount;
    let channel = guild.channels.cache.get('process.env.COUNTERVOICECHANNEL');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(chalk.blue('Updating Member Count'));
  }, 60000);
};
