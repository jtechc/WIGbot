module.exports = {
  name: 'rules',
  description: 'Embeds!',
  execute(client, message, args, Discord) {
    if (message.author.id === process.env.BOTOWNERID) {
      let newEmbed = new Discord.MessageEmbed()
        .setColor('#1E74BB')
        .setTitle('Rules')
        .setURL('https://www.wickedimmortalsgaming.com')
        .setDescription('This is an embed for the server rules!')
        .addFields(
          { name: 'Rule 1', value: 'Be nice' },
          { name: 'Rule 2', value: 'Be even nicer' },
          { name: 'Rule 3', value: 'no memes' },
        )
        .setImage('https://i.imgur.com/I9gPKnJ.png')
        .setFooter('placeholder text');

      message.channel.send(newEmbed);
    }
  },
};
