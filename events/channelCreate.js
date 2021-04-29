const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("channelCreate", (client, GuildChannel) => {
  if(!GuildChannel) {
    return;
  }
  const { type, id, name, nsfw } = GuildChannel;

  let noSafe;
  if (nsfw === false) {
    noSafe = "No";
  } else if (nsfw === true) {
    noSafe = "Yes";
  }

  const ccEmbed = new MessageEmbed()
  .setColor('#1E74BB')
  .setAuthor("\u200b", client.user.displayAvatarURL())
  .setDescription(
    `**New Channel**\f
    Channel: <#${id}>\f
    Channel Type: \`${type}\`\f
    NSFW?: \`${noSafe}\``
  )
  .setFooter(`Channel ID: ${id}`)
  .setTimestamp();

  logChannel.send(ccEmbed);
})