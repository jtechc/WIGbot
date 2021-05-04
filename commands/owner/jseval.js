const chalk = require('chalk');
const { inspect } = require('util');
const { create } = require('sourcebin');
const { Command } = require("cdcommands");
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
.setColor('GREEN')
.setTitle('Output')


/**
 * Curteousy of Exxon
 */

module.exports = new Command ({
  name: 'jseval',
  aliases: ['eval', 'evaluate'],
  description: 'evaluates Javascript code represented as a string.',
  details: 'evaluates Javascript code represented as a string.',
  devOnly: true,
  minArgs: 1,
  maxArgs: Infinity,
  usage: '{prefix}jseval <Code>',
  category: 'Owner',
  run: async ({ message, args }) => {

    let result;
    try {
      let data = args.join(' ').replace(/token/g, 'niceTry');
      let evaled = eval(data);

      if (evaled instanceof Promise)
        evaled = await evaled;
      
      evaled = typeof evaled !== 'string' ? inspect(evaled) : evaled;
      result= evaled.split(process.env.DISCORD_TOKEN).join('[Hahahahaha, u tried to get the token, nice try]');
    } catch (error) {
      result = error.toString();
      embed.setColor('RED');
    }
    let response = result;
    if (response.length >= 2000) {
      let src;
      try {
        src = await create([
          {
            name: 'Eval output',
            content: response,
            language: 'text',
          }
        ],
          {
            title: 'Eval response',
            description: 'Exxon#0293 kek'
          
          }
        );
      } catch (error) {
        response = response.slice(0, 1997) + '...';
        embed.setDescription(`\`\`\`\n${result}\`\`\``);

        return message.channel
          .send(embed)
          .catch(() =>
            message.reply(
              `\`\`\`\n${result}\`\`\``
            )
          );
      }

      return message.channel
        .send(`The output was too long so I have uploaded it to Sourcebin. You can find the response [here](${src.url})`);
    }

    embed.setDescription(`\`\`\`\n${result}\`\`\``);
    message.channel
      .send(embed)
      .catch(() =>
        message.reply(
          `\`\`\`\n${result}\`\`\``
        )
      );
  },
});
