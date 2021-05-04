const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = new Command({
name: 'level-roles',
aliases: ['levelroles'],
description: 'Shows a list of the level roles of the server',
details: 'Shows a list of the level roles of the server',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}levelroles',
noDisable: false,
cooldown: 60000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
  const levelRolesStorage = fs.readFileSync('../../Storages/Level-Roles.json');
  const levelRoles = JSON.parse(levelRolesStorage.toString());

  const guildCheck = levelRoles.find(reach => {
    return reach.guildId === `${message.guild.id}`
  })
  if(!guildCheck) {
    const noRoles = new MessageEmbed()
    .setTitle('There are no level roles yet.')
    .setColor('RANDOM')
    .setTimestamp();
    return message.channel.send(noRoles);
  };
  const listofLevelRoles = levelRoles.filter(levelRoles => {
    return levelRoles.guildId === message.guild.id
  }).map(Roles => {
    return Roles.levelRole
  })
  const listOfLevelsToReach = levelRoles.filter(levelRoles => {
    return levelRoles.guildId === message.guild.id
  }).map(Roles => {
    return Roles.levelToReach
  })
  const listOfIds = levelRoles.filter(levelRoles => {
    return levelRoles.guildId === message.guild.id
  }).map(Roles => {
    return Roles.levelRoleId
  })

  const Success = new MessageEmbed()
  .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
  .setTitle('[ Level Roles ]')
  .addFields(
    {
      name: 'Name',
      value: listofLevelRoles.join('\n'),
      inline: true
    },
    {
      name: 'Level to Reach',
      value: `${listOfLevelsToReach.join('\n')}`,
      inline: true
    },
    {
      name: 'ID',
      value: `${listOfIds.join('\n')}`,
      inline: true
    }
  )
  .setImage('https://media.discordapp.net/attachments/832519166459510795/832837073274273797/Level_Roles.png?width=1085&height=610')
  .setColor("#c98aff")
  .setTimestamp()
  return message.channel.send(Success)
}
})