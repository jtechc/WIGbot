const { MessageEmbed } = require('discord.js')


module.exports = {
    commands: ['vhserver'],
    category: 'Fun',
    permissions: 'ADMINISTRATOR',
    description: 'Send embed for valheim server',
    callback: ({ message, args, text, client, channel }) => {
        const vhChannel = channel.channels.cache.find(c => c.name == '〔🏹〕valheim-info')
        console.log(vhChannel)

        const embed = new MessageEmbed()

    }
    
}