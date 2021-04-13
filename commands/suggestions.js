module.exports = {
  name: 'suggestions',
  category: 'info',
  aliases: ['suggest', 'suggestion'],
  permissions: [],
  description: 'creates a suggestion!',
  execute(client, message, cmd, args, Discord) {
      const channel = message.client.channels.cache.find(c => c.name === '〔💡〕suggestions');
      if (!channel) return message.channel.send('I cannot seem to find the suggestions channel!');

      let messageArgs = args.join(' ');
      const embed = new Discord.MessageEmbed()
          .setColor('FADF2E')
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setDescription(messageArgs);

      channel.send(embed).then((msg) => {
          msg.react('👍');
          msg.react('👎');
          message.delete();
      }).catch((err) => {
          throw err;
      });
  }
}