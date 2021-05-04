const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = new Command({
name: 'add-level-role',
aliases: ['addlevelrole'],
description: 'Add a role that is given when a user reaches a specific level',
details: 'Add a role that is given when a user reaches a specific level',
minArgs: 1,
maxArgs: Infinity,
usage: '{prefix}addlevelrole <role> <level>',
noDisable: false,
userPermissions: ['ADMINISTRATOR'],
cooldown: 60000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
  const provide = new MessageEmbed()
  .setTitle('Please mention a role to use.')
  .setColor('#FF0000')
  .setTimestamp();

  const provideLevel = new MessageEmbed()
  .setTitle('Please provide a level to set to the role.')
  .setDescription('This will be the level that needs to be achieved before giving the user the role.')
  .setColor('RANDOM')
  .setTimestamp();

  const roleToAdd = message.mentions.roles.first()
  if(!roleToAdd) return message.channel.send(provide);

  const levelToReach = args[1];
  if(!levelToReach) return message.channel.send(provideLevel)
  if(isNaN(levelToReach)) return message.channel.send(provideLevel)

  if(levelToReach.includes('+')) return message.channel.send(provideLevel);
  if(levelToReach.includes('-')) return message.channel.send(provideLevel);
  if(levelToReach.includes('.')) return message.channel.send(provideLevel);

  const levelRolesStorage = fs.readFileSync('../../Storages/Level-Roles.json')
  const levelRoles = JSON.parse(levelRolesStorage.toString());

  const levelToReachCheck = levelRoles.find(reach => {
    return (reach.guildId === `${message.guild.id}` && reach.levelToReach === parseInt(levelToReach))
  })
  if(!levelToReachCheck) {
    levelRoles.push(
      {
        guildId: `${message.guild.id}`,
        levelRole: `${roleToAdd.name}`,
        levelRoleId: `${roleToAdd.id}`,
        levelToReach: parseInt(levelToReach)
      }
    )
    const newLevelRole = JSON.stringify(levelRoles, null, 4)
    fs.writeFileSync('../../Storages/Level-Roles.json', newLevelRole)

    const Success = new MessageEmbed()
    .setTitle('New Level Role has been successfully added!')
    .setColor('#00FF00')
    .setTimestamp();
    return message.channel.send(Success)
  } else {
    const Already = new MessageEmbed()
    .setTitle('There is already a role that has that same level to reach... please pick a new level or a new role.')
    .setColor('#FFFF00')
    .setTimestamp();
    return message.channel.send(Already);
  }
}
})