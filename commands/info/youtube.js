const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'youtube',
  description: 'this is a youtube command',
  details: 'this is a youtube command',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}youtube',
  noDisable: false,
  cooldown: 15000,
  userPermissions: ["ADMINISTRATOR"],
  category: 'Info',
  run: ({ message }) => {
    
    let role = message.guild.roles.cache.find((r) => r.name === 'moderator');

    if (message.member.permissions.has('KICK_MEMBERS')) {
      message.channel.send('You have the permission to kick members');
    } else {
      message.channel.send("You don't have the permission to kick members");
    }
    // if (message.member.roles.cache.some((r) => r.name === 'moderator')) {
    //   message.channel.send('insert link here');
    // } else {
    //   message.channel.send(
    //     "I see you don't have the correct permissions, let me fix that.",
    //   );
    //   message.member.roles.add(role).catch(console.error);
    // }
  },

});

