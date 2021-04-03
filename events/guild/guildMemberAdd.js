const chalk = require('chalk');

module.exports = (Discord, client, guildMember) => {
  // const guildMember = Discord.GuildMember;
  console.log(chalk.green.underline('New Member Joined'));
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === 'member',
  );
  let welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#1E74BB')
    .setTitle('Welcome to WIG!')
    .setURL('https://www.wickedimmortalsgaming.com')
    .setDescription(
      `Welcome, <@${guildMember.user.id}>, to Wicked Immortals Gaming!\n\nPlease head to #get-a-role to pick your roles!`,
    )
    .setThumbnail('https://i.imgur.com/I9gPKnJ.png');

  // guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('824338151748403230').send(welcomeEmbed);

  //  .send(`Welcome, <@${guildMember.user.id}>, to our server!\n`);

  //  console.log(chalk.green.underline('New Member Joined'));
  //  const defaultChannel = member.guild.channels.find((channel) =>
  //    channel.permissionsFor(guild.me).has('SEND_MESSAGE'),
  //  );
  //  defaultChannel
  //    .send(`Welcome ${member.user} to this server.`)
  //    .catch(console.error);
};
