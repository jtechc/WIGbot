module.exports = {
  name: 'suggestions',
  aliases: ['suggest', 'suggestion'],
  permissions: [],
  description: 'creates a suggestion',
  execute(message, args, client, Discord) {
    const channel = message.guild.channels.cache.find(
      (c) => c.name === 'suggestions',
    );
    if (!channel)
      return message.channel.send('suggestions channel does not exist');

    let messageArgs = args.join(' ');
    const embed = new Discord.MessageEmbed()
      .setColor('FADF2E')
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true }),
      )
      .setDescription(messageArgs);

    channel.send(embed);
  },
};
