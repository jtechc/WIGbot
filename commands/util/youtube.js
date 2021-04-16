const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'youtube',
  category: 'Info',
  permissions: ["ADMINISTRATOR"],
  description: 'this is a youtube command',
  execute(client, message, args) {
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
