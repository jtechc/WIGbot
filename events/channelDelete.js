const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("channelCreate", (client, GuildChannel) => {
  const guild = client.guilds.cache.get('823350523334754364');
  const logChannel = guild.channels.cache.get('823353093671878697');
  
  if(!GuildChannel) {
    return;
  }
  const { type, id, name } = GuildChannel;

  const cdEmbed = new MessageEmbed()
  .setColor('#1E74BB')
  .setAuthor("\u200b", client.user.displayAvatarURL())
  .setDescription(
    `**Channel Deleted**\f
    Channel name: \`${name}\`\f
    Channel Type: \`${type}\``
  )
  .setFooter(`Channel ID: ${id}`)
  .setTimestamp();

  logChannel.send(cdEmbed);
});