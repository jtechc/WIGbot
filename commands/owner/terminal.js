const { Command, Validator } = require('cdcommands');
const process = require('child_process');
const chalk = require('chalk');
const { stdout } = require('node:process');
module.exports = new Command({
    name: 'terminal',
    aliases: ['console', 'shell'],
    category: 'Owner',
    description: 'Use a terminal in discord chat!',
    minArgs: 1,
    maxArgs: Infinity,
    usage: '{prefix} <command to run>',
    devOnly: true,
    valdiate: new Validator({
        validate: ({ message, args, client, prefix, language }) => {
            if (args[0] !== 'send') return "INCORRECT_ARGS";
        },
        onError: ({ error, message, args, client, prefix, language }) => {
            if (error === 'INCORRECT_ARGS')
            message.channel.send('```Your first argument must be \'send\'!```')
        },
        onSuccess: (message) => {
            console.log(chalk.blue('Succesfully ran terminal command.'))
        }
    }),
    run: async ({ message, args, client, prefix, language }) => {
        if(message.author.id === 'OWNER_ID') {
            const msg = await message.channel.send(`Please wait, this may take a while`);
            msg.delete({timeout: 4000})
            process.exec(args.join(" ") , (error, stdout) => { let result = (stdout || error);
            message.channel.send(result, { code: "asciidoc", split: "\n"}).catch(err => message.channel.send(err))
        })
        } else {
            return message.reply(`Developers Only!`);
        }

    }


})