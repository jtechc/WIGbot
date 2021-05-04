const { Command } = require('cdcommands');
const { MessageAttachment } = require('discord.js');
const Canvas  = require('canvas');


module.exports = new Command({
name: 'toiletify',
aliases: ['toilet'],
description: 'Ever imagine what it would look like if your profile picture was in a toilet?',
details: 'Ever imagine what it would look like if your profile picture was in a toilet?',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}toiletify <user>',
noDisable: false,
cooldown: 15000,
category: 'Fun',
run: async ({ message, args, client, prefix, language }) => {
  const member = message.mentions.members.first() || message.member;
  const canvas = Canvas.createCanvas(800, 600);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage('https://i.imgur.com/yU9fSU7.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
  ctx.drawImage(avatar, 135, 350, 205, 205);
  const attachment = new MessageAttachment(canvas.toBuffer(), `toilet_${member.user.username}.jpg`);
  message.channel.send(attachment);
}
})