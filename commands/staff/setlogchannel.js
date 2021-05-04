const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const { Mongoose } = require('mongoose');
const log = require('../../schemas/logSchema');
const colors = require('colors');

module.exports = new Command({
name: 'setlogchannel',
aliases: ['setlogs'],
description: 'Set the log channel per guild',
details: 'Set the log channel per guild',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}setlogs',
noDisable: false,
userPermissions: ['ADMINISTRATOR'],
cooldown: 60000,
category: 'Staff',
run: async ({ message, args, client, prefix, language }) => {
try {const channel = message.mentions.channels.first()
  if (!channel) return message.reply(`**Can't seem to find this channel**`).then(m => m.delete({ timeout: 3000 }));

  await log.findOne({
    guildId: message.guild.id
  }, async (err, data) => {
    if (err) console.error(err);
    if (!data) {
      const newLog = new log({
        _id: mongoose.SchemaTypes.ObjectId(),
        guildId: message.guild.id,
        logChannel: channel.id
      });
      await newLog.save()
      .then(result => console.log(result))
      .catch(err => console.log(err));

      return message.reply(`Log channel has been updated to ${channel}`);
    } else {
      log.updateOne({
        logChannel: channel.id
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));

      return message.reply(`Log channel has been updated to ${channel}`);
    }
  })} catch (error) {
    console.log('error'.red)
  }
} 
})