const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'simjoin',
  description: 'simulate a new member joining',
  details: 'simulate a new member joining',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}simjoin',
  guildOnly: true,
  devOnly: true,
  noDisable: true,
  userPermissions: ['ADMINISTRATOR'],
  category: 'Staff',
  run: ({ message, client }) => {
    client.emit('guildMemberAdd', message.member);
  },
});
