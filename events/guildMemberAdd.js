const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("guildMemberAdd", (client, member) => {
  const welcomeChannel = client.channels.cache.find(ch => ch.name.includes('〔👋〕welcome'))
  if (!welcomeChannel) return;

  let rolesChannel = '823353077142257664';
  let welcomeEmbed = new MessageEmbed()
  .setColor('#1E74BB')
  .setTitle('Welcome to WIG!')
  .setURL('https://www.wickedimmortalsgaming.com')
  .setDescription(
    `Welcome, <@${member.user?.id}>, to ${member.guild.name}!\n\nPlease head to <#${rolesChannel}> to pick your roles!`,
  )
  .setThumbnail('https://i.imgur.com/I9gPKnJ.png')
  .setTimestamp()
  .setFooter(`Member #${member.guild.memberCount}`);

  welcomeChannel.send(`<@${member.user?.id}>`, welcomeEmbed);

});
