memberCounter = require('../../counters/member-counter');
const chalk = require('chalk');
require('dotenv').config();
const mongo = require('../../mongo');
const WOKCommands = require('wokcommands')


module.exports = async (Discord, client, message) => {
  console.log(chalk.green(
    `Logged in as ${client.user.tag} for ${client.guilds.cache.size} current server(s)`,
  ));
    const disabledDefaultCommands = [
    // 'help',
    // 'command',
    // 'language',
    // 'prefix',
    // 'requiredrole'
  
    ]

    const wok = new WOKCommands(client, {
      commandsDir: 'commands',
      featuresDir: 'features',
      showWarns: true,
      del: 5,
      messagesPath: 'messages.json',
      disabledDefaultCommands
    })

    .setBotOwner(['132631391983632384'])
    .setMongoPath(process.env.MONGO_URI)
    .setDefaultPrefix(process.env.PREFIX)
    .setColor(0xff0000)
    .setCategorySettings([
      {
        name: 'Fun',
        emoji: '🎮'
      },
      {
        name: 'Economy',
        emoji: '💸'
      },
      {
        name: 'Configuration',
        emoji: '🚧',
        hidden: true
      }
    ])

    wok.on('databaseConnected', (connection, state) => {
      console.log(chalk.green('The state is', state))
    })

    wok.on('commandException', (command, message, error) => {
      console.log(chalk.red(`An exception occured when using command "${command.names[0]}"! The error is:`))
      console.error(error)
    })
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

  // await mongo().then(mongoose =>{
  //   try{
  //     console.log(chalk.green('Connected to mongo!'))
  // } finally {
  //   mongoose.connection.close()
  // }})
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
