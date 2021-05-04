const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

module.exports = new Command({
name: 'emojify',
aliases: ['turntoemojis'],
description: 'Return provided text in emojify (emotes) form.',
details: 'Return provided text in emojify (emotes) form',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}emojify',
noDisable: false,
cooldown: 15000,
category: 'Fun',
run: async ({ message, args, client, prefix, language }) => {
  if(args.length < 1) {
    message.channel.send('You must provide SOMETHING to emojify!');
  }
  message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(''));
}
})