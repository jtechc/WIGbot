const { Command } = require('cdcommands');
const { parse } = require ('twemoji-parser');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
  name: 'enlarge',
  description: 'Enlarge an emoji',
  details: 'Enlarge an emoji',
  minArgs: 1,
  maxArgs: 1,
  usage: '{prefix}enlarge <emoji>',
  noDisable: false,
  cooldown: 15000,
  category: 'Utility',
  run: ({ message, args, client }) => {
    const emoji = args[0];
    
    let custom = client.parse(emoji);

    const embed = new MessageEmbed()
    .setTitle(`Enlarged version of ${emoji}`)
    .setColor('#FFFF00')
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))

    if (custom.id) {
      embed.setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`)
      return message.channel.send(embed)
    }
    else {
      let parsed = parse(emoji, { assetType: "png" });
      if (!parsed[0]) return message.channel.send('Error! Invalid Emoji Provided! Please provide an emoji to enlarge')

      embed.setImage(parsed[0].url);
      return message.channel.send(embed)
    }
  }

})