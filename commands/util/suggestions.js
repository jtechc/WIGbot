const { MessageEmbed } = require('discord.js')
const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    description: 'creates a suggestion!',
    details: 'creates a suggestion!',
    minArgs: 1,
    maxArgs: Infinity,
    usage: '{prefix}suggestions <Suggestion>',
    guildOnly: true,
    noDisable: false,
    category: 'Info',
    run: ({ message, args }) => {
        const channel = message.client.channels.cache.find(c => c.name === '〔💡〕suggestions');
        if (!channel)
            return message.channel.send('I cannot seem to find the suggestions channel!');

        let messageArgs = args.join(' ');
        const embed = new MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) => {
            console.log(err)
        });
    }
})