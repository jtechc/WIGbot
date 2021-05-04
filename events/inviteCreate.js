const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("inviteCreate", (client, invite) => {
  const guild = client.guilds.cache.get('823350523334754364');
  const logChannel = guild.channels.cache.get('823353093671878697');
  const { code, inviter, channel } = invite;

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
    Inviter: <@${inviter.id}>\f
    Channel: <#${channel.id}>\f
    Channel Type: \`${chanType}\``
  )
  .setFooter(`discord.gg/${code}`)
  .setTimestamp();

  logChannel.send(inviteEmbed);
});
