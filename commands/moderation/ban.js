const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'ban',
  aliases: [''],
  userPermissions: ['BAN_MEMBERS'],
  category: 'Moderation',
  description: 'The command bans a member of the discord',
  run: ({ message, args, client, prefix, language }) => {
  let member = message.mentions.user.first()
  if (member) {
    let memberTarget = message.guild.members.cache.get(member.id)
    memberTarget.ban()
    message.channel.send('User has been banned.')
  } else {
    message.channel.send("You couldn't ban that member")
  
  }
}
})