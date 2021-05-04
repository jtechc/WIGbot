const { Command } = require('cdcommands');
const { sudo } = require('weky');

module.exports = new Command({
name: 'sudo',
description: 'Have my bot say something you want',
details: 'Have my bot say something you want',
minArgs: 1,
maxArgs: Infinity,
usage: '{prefix}sudo <message>',
userPermissions: ['MANAGE_MESSAGES'],
noDisable: false,
cooldown: 60000,
category: 'Utility',
run: ({ message, args, client }) => {
  const member = message.mentions.users.first();
  if (!member) return message.reply(`I couldn't find any user...`);
  const msg = args.slice(1).join(" ");
  if (!msg) return message.reply('What should the user say.. hm?');
  const sud = new sudo({
    message: message,
    text: msg,
    member: member,
  })
  sud.start()
/*   const x = new sudo({
    message,
    text,
    member
  })
  x.start() */
}
})