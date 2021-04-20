const { Command } = require("cdcommands");
module.exports = new Command({
  name: 'help',
  category: 'Utility',
  cooldown: '15s',
  description: 'master help command',
  run: ({ message, args, client, prefix, language }) => {
    message.reply('\`\`\`There\'s no help command, good luck.\`\`\`')
  }
  // callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
  //     instance.commandHandler.commands.forEach((command) => {
  //         console.log(command)
  //     })
  // }
});
