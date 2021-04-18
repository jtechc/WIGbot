const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'kick',
  userPermissions: ['KICK_MEMBERS'],
  category: 'Moderation',
  description: 'This command kicks a member of the discord server',
  run: ({ message, args, client, prefix, language })=> {
    if (message.author.id === process.env.BOTOWNERID) {
      let member = message.mentions.users.find();
      if (member) {
        let memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        message.channel.send('User has been kicked.');
      } else {
        message.channel.send("You couldn't kick that member.");
      }
    } else {
      message.channel.send("You don't have the permission to do that.");
    }
  },
});
