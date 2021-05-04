const Discord = require('discord.js');
const { parse } = require('twemoji-parser');
const { Command } = require('cdcommands');

module.exports = new Command ({
  name: 'enlarge',
  description: 'Enlarge an emoji to a bigger picture',
  details: 'Enlarge an emoji to a bigger picture',
  minArgs: 1,
  maxArgs: 1,
  usage: '{prefix}enlarge <emoji>',
  noDisable: false,
  category: 'Utility',
  run: async ({ client, message, args }) => {
    const Emoji = args[0];
    if (!Emoji) return message.reply('Please specify an emoji');
    let custom = Discord.Util.parseEmoji(Emoji);
    try {
      if (custom.id) {
        return
        message.channel.send(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
      }
      else {
        let parsed = parse(Emoji, { assetType: "png" });
        if (!parsed[0]) return message.reply(`Failed to enlarge ${Emoji}`);

        return message.channel.send(parsed[0].url);
      }
    } catch (err) {
      message.reply(`I'm unable to enlarge the emoji: ${Emoji}`)
    }
  }
})
