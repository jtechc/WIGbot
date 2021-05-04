const { Command } = require('cdcommands');
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

const sendError = async (message, error, title) => {
  let embed = new MessageEmbed()
  .setColor('#ff4133')
  .setTitle(title);
  embed.setDescription(`\n\`\`\`${error}\`\`\``);

  return message.reply(embed);
}

module.exports = new Command({
name: 'deqrcode',
description: 'Provide a qr code to decypher',
details: 'Provide a qr code to decypher',
minArgs: 1,
maxArgs: Infinity,
usage: '{prefix}deqrcode <qrcode>',
noDisable: false,
cooldown: 15000,
guildOnly: false,
category: 'Utility',
run: async ({ message, args, client, prefix, language }) => {
  let url = (message.attachments).array()[0]?.url || args[0]?.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g)
  if (!url)
    return sendError(message, 'You must provide a qrcode to decypher.', 'Invalid Syntax');

    const r = await axios(`https://api.qrserver.com/v1/read-qr-code/?fileurl=${encodeURIComponent(url)}`)
    const embed = new MessageEmbed()
    .setColor('#7289da')
    .setImage(Array.isArray(url) ? url[0] : url)
    .setTitle(r.data[0].symbol[0].data);

    if(r.data[0].symbol[0].error != null) return sendError(message, 'There was some type of error while decyphering that qr code.', 'Error')
    return message.channel.send(embed)
}
})