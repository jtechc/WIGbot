const { MessageEmbed } = require('discord.js')
const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'answer',
    aliases: ['vhserver'],
    category: 'Info',
    permissions: ["ADMINISTRATOR"],
    description: 'Send embed for valheim server',
    callback: ({ message, args, text, client, channel }) => {
        const vhChannel = channel.channels.cache.find(c => c.name == '〔🏹〕valheim-info')
        console.log(vhChannel)

        const embed = new MessageEmbed()
        .setColor('#2A609C')
        .setTitle('Wicked Immortals Gaming')
        .setDescription('Valheim mod pack update 04-15-2021\nYou will need to update your personal plugins folder in-order to connect')
        .setThumbnail('https://i.imgur.com/nGAqI16.png')
        .setImage('https://i.imgur.com/Ze39T67.png')
        .setTimestamp();

        message.delete().then(() => {
            message.channel.send(embed)
        })
    }
    
})