module.exports = {
  name: 'kick',
  description: 'This command kicks a member of the discord server',
  execute(client, message, args) {
    let member = message.mentions.users.find();
    if (member) {
      let memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.kick();
      message.channel.send('User has been kicked.');
    } else {
      message.channel.send("You couldn't kick that member");
    }
  },
};
