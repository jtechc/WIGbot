const { MessageEmbed } = require('discord.js')
const { Command } = require("cdcommands");
const colors = require('colors/safe')

module.exports = new Command ({
    name: 'answer',
    aliases: ['vhserver'],
    category: 'Info',
    userPermissions: ["ADMINISTRATOR"],
    description: 'Send embed for valheim server',
    run: ({ message, args, client, prefix, language }) => {
        console.log(colors.green('This command is deprecated.'))
    }
    
})