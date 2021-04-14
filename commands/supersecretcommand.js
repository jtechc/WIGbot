const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['testalias'],
    category: 'Staff',
    minArgs: 0,
    maxArgs: 0,
    description: 'super secret command meant for only one person to use',
    execute: ({ message, args, text, channel }) => {
        const authorId = '132631391983632384'
        if (message.author.id !== authorId) {
            return message.channel.send('This command isn\'t for you!')
        }
        const heartEmojiReaction = ''

        const embed = new MessageEmbed()
        .setColor('#8000ff')
        .setTitle('All the many things that I love about you')
        .setURL('https://www.youtube.com/watch?v=fM8V1XOI-14')
        .setAuthor('Dear Chelsi Elise Rockwell')
        .setDescription('I love you.')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'I know things have been rough,', value: 'but I really am trying my best at ammending everything that has happened.' },
            { name: 'I have been working on this on and off for a while', value: 'and you probably will never understand how complicated it was to make it work correctly, lol.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/ptBQo9O.jpg');



        message.author.send(embed)

    }
}