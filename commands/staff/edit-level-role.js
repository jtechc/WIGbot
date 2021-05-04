const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = new Command({
name: 'edit-level-role',
aliases: ['editlevelrole'],
description: 'Edit a level role that is given when a user levels up',
details: 'Edit a level role that is given when a user levels up',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}editlevelrole <role> <newLevel>',
noDisable: false,
cooldown: 60000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
  const provide = new MessageEmbed()
  .setTitle('Please mention a role to use.')
  .setColor('#FF0000')
  .setTimestamp();

  const provideId = new MessageEmbed()
  .setTitle('Please provide an Id of a role to edit.')
  .setDescription('This will be the level that needs to be achieved before giving the user the role.')
  .setColor('RANDOM')
  .setTimestamp();

  const roleToEdit = args[0];
  if(!roleToEdit) return message.channel.send(provide);

  const newLevel = args[1];
  if(!newLevel) return message.channel.send(provideId)
  if(isNaN(newLevel)) return message.channel.send(provideId);

  if(newLevel.includes('+')) return message.channel.send(provideId);
  if(newLevel.includes('-')) return message.channel.send(provideId);
  if(newLevel.includes('.')) return message.channel.send(provideId);

  const levelRolesStorage = fs.readFileSync('../../Storages/Level-Roles.json')
  const levelRoles = JSON.parse(levelRolesStorage.toString());

  const levelRoleIdCheck = levelRoles.find(id => {
    return (id.guildId === `${message.guild.id}` && id.levelRoleId === roleToEdit)
  })
  if(!levelRoleIdCheck) {
    const noRoles = new MessageEmbed()
    .setTitle('There is not a level role with that Id.')
    .setColor('#FFFF00')
    .setTimestamp();
    return message.channel.send(noRoles)
  } else {
    const newLevelNumber = levelRoleIdCheck.levelToReach = parseInt(newLevel)

    const updatingData = JSON.stringify(newLevelNumber, null, 4)
    fs.writeFileSync('../../Storages/Level-Roles.json', updatingData)

    const updatedData = JSON.stringify(levelRoles, null, 4)
    fs.writeFileSync('../../Storages/Level-Roles.json', updatedData)

    const Success = new MessageEmbed()
    .setTitle('Level role has successfully been updated.')
    .setColor('#00FF00')
    .setTimestamp();
    return message.channel.send(Success);
  }
}
})