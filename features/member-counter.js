const chalk = require('chalk');
const { Feature } = require('cdcommands')
// const { guildid, membercountchanid } = require('./config.json');

module.exports = new Feature((client) => {
  const guild = client.guilds.cache.get('823350523334754364');
  if (!guild.available) return console.log('No guild found');
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get('835919421703716899');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(
      chalk.magentaBright(
        'Current member count: ' + chalk.blueBright(`${memberCount}`)) + ' Checking if we need to update'
    );
  }, 300 * 1000);
});
