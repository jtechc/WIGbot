const chalk = require('chalk');
const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("guildMemberAdd", (message) => {
  const welcomeChannel = message.guild.channels.cache.find(ch => ch.name.includes('〔👋〕welcome'))
  if (!welcomeChannel) return;

  let rolesChannel = '820584826351517728';
  let welcomeEmbed = new MessageEmbed()
  .setColor('#1E74BB')
  .setTitle('Welcome to WIG!')
  .setURL('https://www.wickedimmortalsgaming.com')
  .setDescription(
    `Welcome, <@${message.user.id}>, to ${message.guild.name}!\n\nPlease head to <#${rolesChannel} to pick your roles!`,
  )
  .setThumbnail('https://i.imgur.com/I9gPKnJ.png')
  .setTimestamp();

  welcomeChannel.send(`<@${message.user.id}>`, welcomeEmbed);

  console.log(chalk.yellow(`${rolesChannel}`));

});

// console.log(chalk.green.underline('New Member Joined'));
// let welcomeRole = guildMember.guild.roles.cache.find(
//   (role) => role.name === 'Member',
// );
// let welcomeEmbed = new MessageEmbed()
//   .setColor('#1E74BB')
//   .setTitle('Welcome to WIG!')
//   .setURL('https://www.wickedimmortalsgaming.com')
//   .setDescription(
//     `Welcome, <@${guildMember.user.id}>, to Wicked Immortals Gaming!\n\nPlease head to #get-a-role to pick your roles!`,
//   )
//   .setThumbnail('https://i.imgur.com/I9gPKnJ.png')
//   .setFooter(`Member #${guildMember.guild.memberCount}`);

// // guildMember.roles.add(welcomeRole);
// guildMember.guild.channels.cache.get('755142481716314213').send(`<@${guildMember.user.id}>`, welcomeEmbed);
