const chalk = require('chalk');
const { Event } = require('cdcommands');
const { MessageEmbed } = require('discord.js');

module.exports = new Event("messageDelete", (client, message) => {
    client.logInfo({ data: `${client.user.username} saw ${message.author.username} delete ${message.content}`})

    const guild = client.guilds.cache.get('755142481317855293');
    const logChannel = guild.channels.cache.get('832501191698415646');

    if (logChannel) {
        if (message.author.bot) {
            return;
        } else {
            const embed = new MessageEmbed()
            .setDescription(
                `Message deleted in \`#${message.channel.name}\`\f
                    Message: \`\`\`${message}\`\`\`\f
                    User: ${message.author.tag}`
            )
            .setAuthor(
                `\u200b`,
                `${client.user.displayAvatarURL({ format: "png" })}`
            )
            .setTimestamp()
            .setColor('#1E74BB')
            .setFooter(`Author ID: ${message.author.id}`);
        logChannel.send(embed);
        }
    } else return;
});