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
    `Welcome, <@${message.user.id}>, to ${message.guild.name}!\n\nPlease head to <#${rolesChannel}> to pick your roles!`,
  )
  .setThumbnail('https://i.imgur.com/I9gPKnJ.png')
  .setTimestamp();

  welcomeChannel.send(`<@${message.user.id}>`, welcomeEmbed);

  console.log(chalk.yellow(`${rolesChannel}`));

});