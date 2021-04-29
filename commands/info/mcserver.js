const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');
const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'mcserver',
  aliases: ['mc', 'mccheck', 'minecraft'],
  description: 'Gets information on a Minecraft server',
  details: 'Gets information on a Minecraft server',
  minArgs: 0,
  maxArgs: 2,
  usage: '{prefix}mcserver <Server IP> <Server Ports>',
  noDisable: false,
  category: 'Info',
  run: ({ message, args, client }) => {
    if (!args[0])
      return message.channel.send('Please enter a minecraft server IP');
    if (!args[1])
      return message.channel.send('Please enter a minecraft server ports');

    util
      .status(args[0], { port: parseInt(args[1]) })
      .then((response) => {
        // console.log(response);
        const embed = new MessageEmbed()
          .setColor('#1E74BB')
          .setTitle('Mc server status')
          .addFields(
            { name: 'Server IP', value: response.host },
            { name: 'Online Players', value: response.onlinePlayers },
            { name: 'Max Players', value: response.maxPlayers },
            { name: 'Version', value: response.version },
          )
          .setFooter('Mc server util by Jaegnah');

        message.channel.send(embed);
      })
      .catch((error) => {
        message.channel.send('there was an error finding this server');
        client.logError({ data: error });
      });
  },
})
