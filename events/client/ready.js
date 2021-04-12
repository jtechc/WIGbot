memberCounter = require('../../counters/member-counter');
const chalk = require('chalk');
require('dotenv').config();
const mongo = require('../../mongo');

module.exports = async (Discord, client, message) => {
  console.log(chalk.green(
    `Logged in as ${client.user.tag} for ${client.guilds.cache.size} current server(s)`,
  ));

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

  await mongo().then(mongoose =>{
    try{
      console.log(chalk.green('Connected to mongo!'))
  } finally {
    mongoose.connection.close()
  }})
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
