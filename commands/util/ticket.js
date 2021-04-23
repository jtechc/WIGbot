const { Command } = require("cdcommands");

module.exports = new Command ({
    name: 'ticket',
    aliases: ['ticket', 'support'],
    description: 'create a ticket for support',
    details: 'create a ticket for support',
    minArgs: 1,
    maxArgs: Infinity,
    usage: '{prefix}ticket <message>',
    guildOnly: true,
    noDisable: false,
    category: 'Staff',
    run: ({ args }) => {
        console.log(args.join(' '))
        // console.log(text) - Text is undefined kek, you mean args.join(' ')? Or message.content?
    }
})