const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("messageUpdate", (client, oldMessage, newMessage) => {
    if(oldMessage.content == newMessage) return;
    if(oldMessage.author.bot) return;

    const guild = client.guilds.cache.get('755142481317855293');
    const logChannel = guild.channels.cache.get('832501191698415646');

    if (logChannel) {
        if (newMessage.author.bot) {
            return;
        } else {
            const embed = new MessageEmbed()
            .setDescription(
                `Message edited in \`#${newMessage.channel.name}\`\f
                    Old Message: \`\`\`${oldMessage}\`\`\`\f
                    New Messsage: \`\`\`${newMessage}\`\`\`\f
                    User: ${newMessage.author.tag}`
            )
            .setAuthor(
                `\u200b`,
                `${client.user.displayAvatarURL({ format: "png" })}`
            )
            .setTimestamp()
            .setColor('#1E74BB')
            .setFooter(`Author ID: ${newMessage.author.id}`);
        logChannel.send(embed);
        client.logInfo({
            data: `${client.user?.tag} saw ${newMessage.author.username} edit their message: ${oldMessage} at: ${newMessage.editedAt}\nNew Message Content: ${newMessage}`
        });
        };
    } else return;
});