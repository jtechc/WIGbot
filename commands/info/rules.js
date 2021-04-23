const { MessageEmbed } = require('discord.js');
const { Command } = require("cdcommands");

module.exports = new Command({
  name: 'rules',
  description: 'Shows the rules',
  details: 'Shows the rules',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}rules',
  noDisable: true,
  userPermissions: ["ADMINISTRATOR"],
  category: 'Info',
  run: ({ message }) => {
    const myEmbed = new MessageEmbed()
    .setColor('#1E74BB')
    .setTitle('Rules')
    .setURL('https://www.wickedimmortalsgaming.com')
    .setDescription('This is a embed for the server rules')
    .addFields(
      {name: 'Rule 1', value: 'Be nice'},
      {name: 'Rule 2', value: 'Be even nicer'},
      {name: 'Rule 3', value: 'no memes'},
    )
    .setImage('https://i.imgur.com/I9gPKnJ.png')
    .setFooter('Make sure to check out the rules channel');
    
    message.channel
      .send(myEmbed)
      .catch(console.error);
  }       
})