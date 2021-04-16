const { Event } = require('cdcommands');

module.exports = new Event("messageDelete", (client, message) => {
    console.log(`${client.user.username} saw ${message.author.username} delete ${message.content}`)
})