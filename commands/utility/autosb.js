const { Command, Validator } = require('cdcommands');
const sb = require('sourcebin');
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
name: 'autosb',
aliases: ['sourcecode', 'autosourcebin', 'sb'],
description: 'Automatically uploads message to sourcebin',
details: 'Automatically uploads message to sourcebin',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}autosb <code>',
noDisable: false,
validate: new Validator({
  validate: ({ message, args }) => {
    let content = args.join(' ');
    if (!content) return "INCORRECT_USAGE";
  },
  onError: ({ error, message, args }) => {
    if (error === "INCORRECT_USAGE")
    message.reply(
      new MessageEmbed()
      .setTitle('Usage Error')
      .setDescription(`Usage: ${client.prefix}autosb <code>`)
    )
  }
}),
category: 'Utility',
run: async ({ message, args, client, prefix, language }) => {
  let content = args.join(' ');
  const value = await sb.create([
    {
      name: 'Your Sourcebin Output',
      content,
      language: 'javascript'
    }
  ]);
  await message.reply(
    new MessageEmbed()
    .setTitle('Sourcebin')
    .setDescription(`Here is the output: ${value.url}`)
    .setColor('RANDOM')
    .setFooter(`Requested by ${client.user.tag}`)
  );


}
});