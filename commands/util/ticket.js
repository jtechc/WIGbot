const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'ticket',
    guildOnly: true,
    aliases: ['ticket', 'support'],
    category: 'Staff',
    minArgs: 1,
    expectedArgs: '<message>',
    description: 'create a ticket for support',
    run: ({ message, args, client, prefix, language }) => {
        console.log(text)
    }
})