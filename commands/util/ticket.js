const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'ticket',
    aliases: ['ticket', 'support'],
    category: 'Staff',
    minArgs: 1,
    expectedArgs: '<message>',
    description: 'create a ticket for support',
    execute: ({ message, args, text }) => {
        console.log(text)
    }
})