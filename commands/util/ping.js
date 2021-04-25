const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'ping',
  description: 'check ping',
  details: 'check ping',
  minArgs: 0,
  maxArgs: 0,
  usage: '{prefix}ping',
  noDisable: true,
  cooldown: 15000,
  category: 'Utility',
  run: async ({ message, client }) => {

    const msg = await message.reply('```Checking my ping to the server...```');
    const latency = msg.createdTimestamp - message.createdTimestamp;
    msg.edit(
      `\`\`\`Calculated my ping to the server.\nBot latency: ${latency}ms | API: ${Math.round(client.ws.ping)}ms\`\`\``
    );
  },
});