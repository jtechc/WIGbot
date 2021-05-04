const { Command, Validator } = require('cdcommands');
const getopts = require('getopts');
const axios = require('axios');
const streamToBuffer = require('stream-to-buffer');
const { join } = require('path');
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { title } = require('node:process');

const sendError = async (message, error, title) => {
  let embed = new MessageEmbed()
  .setColor('#ff4133')
  .setTitle(title);
  embed.setDescription(`\n\`\`\`${error}\`\`\``);

  return message.reply(embed);
}

module.exports = new Command({
name: 'qrcode',
aliases: ['qrreader','qrcodereader'],
description: 'Generates or decodes a QRCode',
details: 'Generates or decodes a QRCode',
minArgs: 1,
maxArgs: Infinity,
usage: '{prefix}qrcode <text>',
noDisable: false,
guildOnly: false,
validate: new Validator({
  validate: ({ message, args, client, prefix, language }) => {
    if (!args[0]) return "INCORRECT_ARGS";
  },
  onError: ({ error, message, args, client, prefix, language }) => {
    if (error === "INCORRECT_ARGS")
    return sendError(message, 'You must specify what you want to become qrcode', 'Invalid Syntax');
  },
  onSuccess: (message) => {
    console.log('Command "qrcode" was ran successfully!');
  }
}),
category: 'Utility',
run: async ({ message, args, client, prefix, language }) => {
  const options = getopts(args, {
    alias: {
      size: 's'
    }
  });

  const res = await axios.get(
    `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      options['_'].join(' ')
    )}&size=${typeof options.size === 'number' && options.size
  ? `${options.size}x${options.size}`
: '150x150'}`,
{ responseType: 'stream' }
  );

  return message.channel.send(
    new MessageEmbed()
    .setColor('#7289da')
    .attachFiles([
      {
        name: 'qrcode.png',
        attachment: streamToBuffer(res.data, function(err, buffer) {
          return buff;
        })
      }
    ])
    .setImage('attachment://qrcode.png')
    .setTitle(options['_'].join(' '))
  );
}
})