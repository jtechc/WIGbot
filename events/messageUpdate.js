const { Event } = require('cdcommands');

module.exports = new Event("messageUpdate", (client, message) => {
    console.log(
        `${message.author.username} edited their message: ${message.content}${message.editedAt}\n${message.edits}`
    );
})