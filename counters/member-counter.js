const chalk = require('chalk');
module.exports = async (client) => {
  const guild = client.guilds.cache.get('755142481317855293');
  if(!guild.available) return console.log('No guild found');
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get('829192388361584650');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log(
      chalk.black.bgCyan(
        `Current member count: ${memberCount} | Checking if we need to update`,
        )
      )
  }, 60000)
};


// let guild = client.guilds.cache.get('828579107830104096');
// setInterval(() => {
//   let memberCount = guild.memberCount;
//   let channel = guild.channels.cache.get('828614680439291984');
//   channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
//   console.log(
//     chalk.black.bgCyan(
//       `Checking if we need to update member count ${memberCount}`,
//     ),
//   );
// }, 60000);
