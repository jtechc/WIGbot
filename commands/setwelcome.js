const mongo = require('../mongo');
const welcomeSchema = require('../schemas/welcome-schema')

module.exports = {
    name: 'setwelcome',
    category: 'staff',
    aliases: ['setwelcomemessage', 'setjoinmessage' ],
    permissions: ["ADMINISTRATOR"],
    description: 'customize the welcome message',
    async execute(client, message, cmd, args, Discord) {
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
                mongoose.connection.close()
            }
        })
    }
}