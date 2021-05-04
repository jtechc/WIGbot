const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = new Command({
name: 'remove-level-role',
aliases: ['removelevelrole'],
description: 'Remove a level role that is given when a user levels up',
details: 'Remove a level role that is given when a user levels up',
minArgs: 2,
maxArgs: Infinity,
usage: '{prefix}removelevelrole <role>',
noDisable: false,
userPermissions: ['ADMINISTRATOR'],
cooldown: 60000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
  const provide = new MessageEmbed()
  .setTitle('Please mention a role to remove.')
  .setColor('#FF0000')
  .setTimestamp();

  const roleToRemove = args[0];
  if(!roleToRemove) return message.channel.send(provide)
  if(isNaN(roleToRemove)) return messsage.channel.send(provide)

  const levelRolesStorage = fs.readFileSync('../../Storages/Level-Roles.json');
  const levelRoles = JSON.parse(levelRolesStorage.toString());

  const levelRoleIdCheck = levelRoles.find(id => {
    return (id.guildId === `${message.guild.id}` && id.levelRoleId === roleToRemove)
  });
  if(!levelRoleIdCheck) {
    const noRoles = new MessageEmbed()
    .setTitle('There is not a level role with that Id.')
    .setColor('#FFFF00')
    .setTimestamp();
    return message.channel.send(noRoles)
  } else {
    const removingLevelRole = levelRoles.filter(id => {
      return id.levelRoleId !== `${roleToRemove}`
    });
    fs.writeFileSync('../../Storages/Level-Roles.json', JSON.stringify(removingLevelRole, null, 4));

    const Success = new MessageEmbed()
    .setTitle('Level role has successfully been removed')
    .setColor('#00FF00')
    .setTimestamp();
    message.channel.send(Success)
    return setTimeout(() => {
      const savingData = fs.readFileSync('../../Storages/Level-Roles.json', 'utf8')
      const savedData = JSON.parse(savingData.toString())
      fs.writeFileSync('../../Storages/Level-Roles.json', JSON.stringify(savedData, null, 4))
    }, 1000)
  }

}
})