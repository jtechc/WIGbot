const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const log = require('../../schemas/logSchema.js');
const colors = require('colors');

module.exports = new Command({
name: 'setlogchannel',
aliases: ['setlogs', 'logs'],
description: 'Set the log channel per guild',
details: 'Set the log channel per guild',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}setlogs',
noDisable: false,
guildOnly: true,
userPermissions: ['ADMINISTRATOR'],
cooldown: 15000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
  try {
    let logChannel = message.mentions.channels.first()
    if(!logChannel) {
      await log.findOneAndDelete({
        guildId: message.guild.id
      })
      const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Log Channel')
      .setDescription(`${message.author} changed Log Channel to \`None\``)

      message.channel.send(embed)
      return
    }
    const logFind = await log.findOne({
      guildId: message.guild.id
    })
    if(!logFind) {
      const newLog = new log({
        guildId: message.guild.id,
        channelId: logChannel.id
      });
      await newLog.save()
      .catch(err => message.reply(`There was an error: ${err.message}`));
    } else {
      await log.findOneAndUpdate({
        guildId: message.guild.id
      }, {
        channelId: logChannel.id,
        guildId: message.guild.id,
      }, {
        upsert: true
      })
    }
    const embed2 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Log Channel')
    .setDescription(`${message.author} changed Log Channel to ${logChannel}`)

    message.channel.send(embed2).catch(() => {})
  } catch (e) {
    message.reply('`[❌]` Error. Please report!').catch(() => {})
    console.log(e)
    return
  }
} 
})