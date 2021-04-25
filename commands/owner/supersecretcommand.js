const { MessageEmbed } = require('discord.js')
const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'supersecretcommand',
    aliases: ['testalias', 'ilysm'],
    description: 'super secret command meant for only one person to use',
    details: 'super secret command meant for only one person to use',
    minArgs: 0,
    maxArgs: 0,
    usage: '{prefix}supersecretcommand',
    noDisable: false,
    category: 'Staff',
    run: async ({ message, args, client, prefix, language }) => {
        const authorId = '368602557649649667'
        if (message.author.id !== authorId) {
            return message.channel.send('Is your name Fate? Or Chelsi? I didn\'t think so. This command isn\'t for you!')
        }
        const emojiReactionBackward = '💖'
        const emojiReactionForward = '💕'

        const embed = new MessageEmbed()
        .setColor('#8000ff')
        .setTitle('Things that I love about you')
        .setURL('https://www.youtube.com/watch?v=fM8V1XOI-14')
        .setAuthor('Dear Chelsi Elise Rockwell')
        .setDescription('I have been working on this on and off for a while and you probably will never understand how complicated it was to make it work correctly, lol.')
        .setThumbnail('https://i.imgur.com/m2w6pF5.png')
        .addFields(
            { name: 'I know things have been rough but I really am trying my best at amending everything that has happened.', value: ':)' },
            { name: 'I\'m sorry, even if it doesn\'t mean much', value: 'but I am working on being less of a shit head.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'I love you', value: 'more than I think you know.', inline: true },
            { name: 'I wish you could see', value: 'what you actually mean to me.', inline: true },
        )
        .addField('Placeholder', 'Placeholder', true)
        .setTimestamp()
        .setFooter('The reactions are also placeholder', 'https://i.imgur.com/ptBQo9O.jpg');

        let messageEmbed = await message.author.send(embed)
        messageEmbed.react(emojiReactionBackward)
        messageEmbed.react(emojiReactionForward)
    }
})