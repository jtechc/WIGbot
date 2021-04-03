module.exports = {
  name: 'purge',
  description: 'Purge messages',
  async execute(client, message, args) {
    if (message.author.id === process.env.BOTOWNERID) {
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
    } else {
      message.channel.send("You don't have the permission to do that.");
    }
  },
};
