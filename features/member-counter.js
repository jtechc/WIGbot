const chalk = require('chalk');
const { Feature } = require('cdcommands');
// const { guildid, membercountchanid } = require('./config.json');

module.exports = new Feature((client) => {
  const guild = client.guilds.cache.get('755142481317855293');
  if (!guild.available) return console.log('No guild found');
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get('829192388361584650');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(
      chalk.magentaBright(
        'Current member count: ' + chalk.blueBright(`${memberCount}`),
      ) + ' Checking if we need to update',
    );
  }, 300 * 1000);
});
