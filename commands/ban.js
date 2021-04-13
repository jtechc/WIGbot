module.exports = {
  name: 'ban',
  aliases: [''],
  permissions: ['BAN_MEMBERS'],
  category: 'moderation',
  description: 'The command bans a member of the discord',
  execute(client, message, args) {
    let member = message.mentions.user.first();
    if (member) {
      let memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send('User has been banned.');
    } else {
      message.channel.send("You couldn't ban that member");
    }
  },
};
