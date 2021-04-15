const { MessageEmbed } = require('discord.js');
const chalk = require('chalk');

module.exports = {
  //   ownerOnly: true,
  category: 'Owner',
  aliases: ['eval', 'evaluate'],
  description: 'evaluates Javascript code represented as a string.',
  callback: ({ message, args, text, client, prefix, instance, channel }) => {
    const { member, content } = message;

    if (message.author.id === process.env.BOTOWNERID) {
      const result = eval(content.replace('?eval ', ''));

      const embed = new MessageEmbed()
        .setColor('#1E74BB')
        .addField('Eval Output', `${result}`)
        .setTimestamp();

      message.channel.send(embed);
    } else {
      console.log(chalk.red(`${message.author.tag} attempted to use eval.`));
      message.reply('```diff\n- You are not allowed to use my eval command.```');
      return;
    }
  },
};
