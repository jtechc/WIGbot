const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("messageUpdate", (client, oldMessage, newMessage) => {
    if(oldMessage.content == newMessage) return;
    if(oldMessage.author.bot) return;

    console.log(
        `${client.user?.tag} saw ${newMessage.author.username} edited their message: ${oldMessage} at:${newMessage.editedAt}\nNew Message Content: ${newMessage}`
    );
    return;
})