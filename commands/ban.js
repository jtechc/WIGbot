module.exports = {
  name: 'ban',
  description: 'This command bans a member of the discord',
  execute(client, message, args) {
    let member = message.mentions.users.first();
    if (member) {
      let memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send('User has been banned.');
    } else {
      message.channel.send("You couldn't ban that member");
    }
  },
};
