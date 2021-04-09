const chalk = require('chalk');
module.exports = async (client) => {
  let guild = client.guilds.cache.get('755142481317855293');
  setInterval(() => {
    let memberCount = guild.memberCount;
    let channel = guild.channels.cache.get('829192388361584650');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(
      chalk.blue.bgCyan(
        `Checking if Member Count:(${memberCount.toLocaleString()}) has`,
      ),
    );
  }, 600000);
};
