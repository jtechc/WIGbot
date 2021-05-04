const { Command, Validator } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const mcapi = require('mcapi');

module.exports = new Command({
name: 'mcuser',
aliases: ['findmcuser', 'mcaccount'],
description: 'Find information on a minecraft user!',
details: 'Find information on a minecraft user!',
minArgs: 1,
maxArgs: 1,
usage: '{prefix}mcuser <username>',
noDisable: false,
cooldown: 15000,
validate: new Validator({
  validate: ({ message, args, client }) => {
    if (args[0]) return "INCORRECT_USAGE";
  },
  onError: ({ error, message, args, client }) => {
    let embed1 = new MessageEmbed()
    .setTitle('There\'s an error!')
    .setDescription(`Required Arguments\n\`\`\`${client.prefix}mcuser <username>\`\`\``)
    .setColor('#FF0000');

    if (error === "INCORRECT_USAGE")
    message.reply(embed1);
  }
}),
category: 'Info',
run: async ({ message, args, client, prefix, language }) => {
  try{
    let uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
    let embed = new MessageEmbed()
    .setTitle(`User: ${args.join(" ")}`)
    .addField("Name:", `${args.join(" ")}`)
    .addField("UUID:", uuid)
    .addField("Download:", `[Download](https://minotar.net/download/${args.join(" ")})`)
    .addField("NameMC:", `[Click Here!](https://mine.ly/${args.join(" ")}.1)`)
    .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args.join(" ")}/700`)
    .setColor('RANDOM')
    .setThumbnail(`https://minotar.net/cube/${args.join(" ")}/100.png`);
    message.channel.send(embed);
  } catch(e) {
    let embed2 = new MessageEmbed()
    .setDescription('That user was not able to be found :/')
    message.channel.send(embed2);
  };

}
})