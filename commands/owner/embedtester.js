const { MessageEmbed } = require('discord.js');
const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'embedtester',
  aliases: ['testembed', 'embedtest'],
  description: 'MessageEmbed visualizer',
  details: 'MessageEmbed visualizer',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}embedtester',
  devOnly: true,
  noDisable: true,
  category: 'Owner',
  run: ({ message }) => {
    const testChannel = '832501191698415646'

    if (message.channel.id !== testChannel) {
      return message.channel.send('You can\'t use this command here.')
    } else {
    const embed = new MessageEmbed()
    .setColor('#2A609C')
    .setTitle('Wicked Immortals Gaming')
    .setDescription('Valheim mod pack update 04-15-2021\nYou will need to update your personal plugins folder in-order to connect')
    .setThumbnail('https://i.imgur.com/nGAqI16.png')
    .setImage('https://i.imgur.com/Ze39T67.png')
    .setTimestamp();

    message.delete().then(() => { // .then :peepoSad:
    message.channel.send(embed)
    })}

  },
});