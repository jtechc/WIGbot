const chalk = require('chalk');
module.exports = async (client) => {
  let guild = client.guilds.cache.get('824338151312982068');
  setInterval(() => {
    let memberCount = guild.memberCount;
    let channel = guild.channels.cache.get('827680506564837417');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(chalk.blue('Updating Member Count'));
  }, 60000);
};
