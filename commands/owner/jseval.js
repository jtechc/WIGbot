const chalk = require('chalk');
const { inspect } = require('util');
const { create } = reqire('sourcebin');
const { Command } = require("cdcommands");
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
.setColor('GREEN')
.setTitle('Output')


/**
 * You'll need to do `npm i sourcebin` for this. If you did something like
 * {prefix}jseval message
 * The output would be too big and you'd get an error sending it. I've kinda jus yeeted
 * the eval command I have on my bot but just not added everything from it :)
 */

module.exports = new Command ({
  name: 'jseval',
  aliases: ['eval', 'evaluate'],
  description: 'evaluates Javascript code represented as a string.',
  details: 'evaluates Javascript code represented as a string.',
  minArgs: 1,
  maxArgs: Infinity,
  usage: '{prefix}jseval <Code>',
  category: 'Owner',
  run: ({ message, args }) => {

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



    /* Your Eval Command: (I'd just delete it if u wanna stick with what I made, idk why you keep so much code in comments, just delete it)
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
    }*/
  },
});
