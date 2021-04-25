const { Command, Validator } = require("cdcommands");

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
  },
});
