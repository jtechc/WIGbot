const { Command } = require("cdcommands");
module.exports = new Command({
  name: 'help',
  description: 'master help command',
  details: 'master help command',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}help',
  noDisable: false,
  cooldown: 15000,
  category: 'Utility',
  run: ({ message }) => {
    message.reply('\`\`\`There\'s no help command, good luck.\`\`\`')
  }

  /** 
   * You can get the commands by doing `client.commands`
   */
  // callback: ({ message, args, text, client, prefix, instance, channel, interaction }) => {
  //     instance.commandHandler.commands.forEach((command) => {
  //         console.log(command)
  //     })
  // }
});
