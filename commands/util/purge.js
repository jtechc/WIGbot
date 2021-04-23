const { Command, Validator} = require("cdcommands");

module.exports = new Command ({
  name: 'purge',
  aliases: ['clear'],
  description: 'Used to clear messages in the chat, max is 100.',
  details: 'Used to clear messages in the chat, max is 100.',
  minArgs: 1,
  maxArgs: 1,
  usage: '{prefix}purge <amount>',
  validator: new Validator({
    validate: ({ args }) => {
      if (isNaN(args[0]) ||
        args[0] > 100 ||
        args[0] < 1 ||
        !isInteger(args[0])
      )
        return "INVALID_ARGS";
    },
    onError: ({ message }) => {        
      if (error === 'INVALID_ARGS')
        message.channel.send('Invalid Arguments! Please provide a valid number between 1 and 100.')
    }
  }),
  noDisable: false,
  userPermissions: ['ADMINISTRATOR'],
  botPermissions: ['MANAGE_MESSAGES'],
  category: 'Utility',
  run: async ({ message, args }) => {
    try {
      message.channel.bulkDelete(args[0]);
    } catch (error) {
      console.log(error);
      message.channel.send('There was an error deleting the messages, please try again!')
    }
    /* Your code:
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
      });*/
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
