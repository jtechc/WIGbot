const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("inviteCreate", (client, Invite) => {
  const guild = client.guilds.cache.get('755142481317855293');
  const logChannel = guild.channels.cache.get('832501191698415646');

  let chanType;
  if (channel.type === "text") {
    chanType = "Text";
  } else if (channel.type === "voice") {
    chanType = "Voice";
  } else if (channel.type === "news") {
    chanType = "News";
  }

  const inviteEmbed = new MessageEmbed()
  .setColor('#1E74BB')
  .setAuthor("\u200b", client.user.displayAvatarURL())
  .setDescription(
    `**Invite Created**\f
    Inviter: <@${Invite.inviter.id}>\f
    Channel: <#${Invite.channel.id}>\f
    Channel Type: \`${chanType}\``
  )
  .setFooter(`discord.gg/${Invite.code}`)
  .setTimestamp();

  logChannel.send(inviteEmbed);
});