const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'simjoin',
  userPermissions: ['ADMINISTRATOR'],
  category: 'Staff',
  description: 'simulate a new member joining',
  run: ({ message, args, client, prefix, language }) => {
    if (message.author.id === process.env.BOTOWNERID) {
      client.emit('guildMemberAdd', message.member);
    } else {
      message.channel.send("You don't have the permission to do that.");
    }
  },
});
