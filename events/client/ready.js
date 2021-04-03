memberCounter = require('../../counters/member-counter');

module.exports = (Discord, client, message) => {
  console.log(
    `${client.readyTimestamp}: Logged in as ${client.user.tag} for ${client.guilds.cache.size}`,
  );
  setInterval(() => {
    targetGuild = client.guilds.cache.get('824338151312982068');
    if (targetGuild) {
      client.user
        .setPresence({
          status: 'online',
          activity: {
            name: `${client.guilds.cache.size} members`,
            type: 'WATCHING',
          },
        })
        .catch(console.error);
    }
  }, 50000);
  memberCounter(client);
};

// client.user.setPresence({
//   activity: {
//     name: 'over ' + targetGuild.memberCount + ' WIG members',
//     type: 'WATCHING',
//     status: 'online',
//   },
// });
