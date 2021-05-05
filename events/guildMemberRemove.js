const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event('guildMemberRemove', (client, member) => {
  const guild = client.guilds.cache.get('755142481317855293');
  const logChannel = guild.channels.cache.get('832501191698415646');

  if (logChannel) {
    if (client.user.bot) {
      return;
    } else {
      const memberRemoveEmbed = new MessageEmbed()
        .setColor('#1E74BB')
        .setDescription(
          `Member has left the building!\f
    Member: <@${member.user?.id}\f
    Last Message: ${member.lastMessage.content}\f
    Join Date: ${member.joinedTimestamp}
    `,
        )
        .setAuthor(
          `\u200b`,
          `${client.user.displayAvatarURL({ format: 'png' })}`,
        )
        .setTimestamp();
      logChannel.send(memberRemoveEmbed);
    }
  } else return;
});
