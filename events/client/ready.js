memberCounter = require('../../counters/member-counter');
require('dotenv').config();

module.exports = (Discord, client, message) => {
  console.log(
    `Logged in as ${client.user.tag} for ${client.guilds.cache.size} current server(s)`,
  );

  setInterval(() => {
    targetGuild = client.guilds.cache.get(process.env.GUILDID);
    if (targetGuild) {
      client.user
        .setPresence({
          activity: {
            name: 'over ' + targetGuild.memberCount + ' WIG members',
            type: 'WATCHING',
            status: 'online',
          },
        })
        .catch(console.error);
    }
  }, 50000);
  memberCounter(client);
};

//client.user.setPresence({
//  activity: {
//    name: 'over ' + targetGuild.memberCount + ' WIG members',
//    type: 'WATCHING',
//    status: 'online',
//  },
//});

// client.user
// .setPresence({
//   status: 'online',
//   activity: {
//     name: `${client.guilds.cache.size} members`,
//     type: 'WATCHING',
//   },
// })
