const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'embedmaker',
aliases: ['makeembed', 'newembed', 'sendembed'],
description: 'Advanced on-the-fly embed maker, link options with \^',
details: 'Advanced on-the-fly embed maker, link options with \^',
minArgs: 1,
maxArgs: Infinity,
usage: '{prefix}embedmaker <title>^<description>^<footer>^<[optional]color>^<[optional]thumbnail link>^<[optional]color>',
noDisable: false,
userPermissions: ['ADMINISTRATOR'],
category: 'Owner',
run: async ({ message, args }) => {
  let embed = null;
  const channel = message.mentions.channels.first();
  if(!channel) return message.channel.send ('Specify a channel to send an embed')
  args.shift();
  const arg = args.join(" ");
  const title = arg.split('^')[0];
  if (!title) return message.channel.send('Specify a title for the embed!')
  const description = arg.split('^')[1];
  if (!description) return message.channel.send('Specify a description for the embed!')
  const footer = arg.split('^')[2];
  if (!footer) return message.channel.send('Specify a footer for the embed!')

  const color = `#${arg.split('^')[3]}`
  const thumbnail = arg.split('^')[4]
  const image = arg.split('^')[5]

  if (![color, thumbnail, image]) {
    let embed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer);
    channel.send(embed);
  } else if (![thumbnail, image]) {
    let embed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color);
    channel.send(embed);
  } else if (!image) {
    let embed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color)
    .setThumbnail(thumbnail);
    channel.send(embed);
  } else if ([color, thumbnail, image]) {
    let embed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color)
    .setThumbnail(thumbnail)
    .setImage(image);
    channel.send(embed);
  }
}
})