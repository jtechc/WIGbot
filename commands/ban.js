module.exports = {
  name: 'ban',
  description: 'The command bans a member of the discord',
  execute(client, message, args) {
    if (message.author.id === process.env.BOTOWNERID) {
      let member = message.mentions.user.first();
      if (member) {
        let memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.ban();
        message.channel.send('User has been banned.');
      } else {
        message.channel.send("You couldn't ban that member");
      }
    } else {
      message.channel.send("You don't have the permission to do that.");
    }
  },
};
