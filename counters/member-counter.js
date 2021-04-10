const chalk = require('chalk');
module.exports = async (client) => {
  let guild = client.guilds.cache.get('828579107830104096');
  setInterval(() => {
    let memberCount = guild.memberCount;
    let channel = guild.channels.cache.get('828614680439291984');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(
      chalk.black.bgCyan(
        `Checking if we need to update member count ${memberCount}`,
      ),
    );
  }, 60000);
};
