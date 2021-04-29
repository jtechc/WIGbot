const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'simleave',
  description: 'simulate a new member leaving',
  details: 'simulate a new member leaving',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}simleave',
  guildOnly: true,
  devOnly: true,
  noDisable: true,
  userPermissions: ['ADMINISTRATOR'],
  category: 'Owner',
  run: ({ message, client }) => {
    client.emit('guildMemberRemove', message.member);
  },
});
