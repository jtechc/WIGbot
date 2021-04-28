const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("messageUpdate", (client, oldMessage, newMessage) => {
    if(oldMessage.content == newMessage) return;
    if(oldMessage.author.bot) return;

    console.log(
        `${client.user?.tag} saw ${message.author.username} edited their message: ${oldMessage}${message.editedAt}\n${newMessage}`
    );
    return;
})