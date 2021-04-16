const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'purge',
  category: 'Utility',
  minArgs: 1,
  maxArgs: 1,
  aliases: ['clear'],
  expectedArgs: '<amount>',
  permissions: ['ADMINISTRATOR'],
  description: 'Used to clear messages in the chat, max is 100.',
  run: async ({ message, args, client, prefix, language }) => {
    if (!args[0])
      return message.reply(
        'please enter the amount of messages that you want to purge',
      );
    if (isNaN(args[0])) return message.reply('please enter a real number');
    if (args[0] > 100)
      return message.reply("you can't purge more than 100 messages");
    if (args[0] < 1)
      return message.reply('you must delete at least one message');

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },

  // name: 'purge',
  // permissions: ["ADMINISTRATOR"],
  // description: 'Purge messages',
  // async execute(client, message, cmd, args, Discord) {
  //     if (!args[0])
  //       return message.reply(
  //         'please enter the amount of messages that you want to purge',
  //       );
  //     if (isNaN(args[0])) return message.reply('please enter a real number');
  //     if (args[0] > 100)
  //       return message.reply("you can't purge more than 100 messages");
  //     if (args[0] < 1)
  //       return message.reply('you must delete at least one message');

  //     await message.channel.messages
  //       .fetch({ limit: args[0] })
  //       .then((messages) => {
  //         message.channel.bulkDelete(messages);
  //       });

  // },
});
