const mongo = require('../../mongo');
const welcomeSchema = require('../../schemas/welcome-schema')
const { Command } = require("cdcommands");

/**
 * With CDCommands it connects to the database on startup, hence why it
 * logs it in your console. In this file for some reason you are doing
 * what everyone loves to do which is stupid and will make stuff not work.
 * You do not need to connect to mongo in this file, you are already connected.
 * All you need to do is use it as normal, also DON'T close your connection.
 * There is no need to close the connection and all it will do is mess up your
 * stuff.
 * 
 * I don't really have the time to remake / format everything so I'm kinda just
 * changing stuff like the command params that you need but haven't used.
 */

module.exports = new Command ({
    name: 'setwelcome',
    aliases: ['setwelcomemessage', 'setjoinmessage'],
    description: 'customize the welcome message',
    details: 'customize the welcome message',
    minArgs: 1,
    maxArgs: Infinity,
    usage: '{prefix}setwelcome <Welcome Message>',
    guildOnly: true,
    noDisable: false,
    userPermissions: ["ADMINISTRATOR"],
    category: 'Staff',
    run: async ({ message }) => {
        const { member, channel, content } = message;

        if (!member.hasPermissions('ADMINISTRATOR')) {
            channel.send('You do not have the permission to run this command.')
            return
        }

        let text = content

        const split = text.split(' ')

        if (split.length < 2) {
            channel.send('Please provide a welcome message')
            return
        }

        split.shift()
        text = split.join(' ')

        welcomeSchema
            .findOneAndUpdate({
                _id: guild.id // I wouldn't recommend using _id, just use guildId: String, or gId: String, (Or Number tbf)
            }, {
                _id: guild.id,
                channelId: channel.id,
                text,
            }, {
                upsert: true
            })
            .catch(console.error);

        /* Here is your way:
        await mongo().then(async (mongoose) => {
            try {
                await welcomeSchema.findOneAndUpdate({
                    _id: guild.id
                }, {
                    _id: guild.id,
                    channelId: channel.id,
                    text,
                }, {
                    upsert: true
                })
            } finally {
                mongoose.connection.close() // 
            }
        })*/
    }
})