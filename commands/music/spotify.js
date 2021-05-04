const { Command } = require('cdcommands');
const { MessageAttachment } = require('discord.js');
const canvacord = require('canvacord');

module.exports = new Command({
name: 'spotify',
aliases: ['spot'],
description: 'Spotify command',
details: 'Spotify command',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}spotify',
noDisable: false,
cooldown: 15000,
category: 'Music',
run: async ({ message, args, client, prefix, language }) => {
  if (message.author.bot) return;

  let user;

  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  let status;
  if (user.presence.activities.length === 1) status = user.presence.activities[0];
  else if (user.presence.activities.length > 1) status = user.presence.activities[1];

  if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.assets !== null) {
    let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
    name = status.details,
    art = status.state,
    album = status.assets.largeText;

    const card = new canvacord.Spotify()
    .setAuthor(artist)
    .setAlbum(album)
    .setStartTimestamp(status.timestamps.start)
    .setEndTimestamp(status.timestamps.end)
    .setImage(image)
    .setTitle(name);

    card.build()
    .then(buffer => {
      canvacord.write(buffer, "spotify.png");

      let attachment = new MessageAttachment(buffer, "spotify.png");
      return message.channel.send(attachment);
    })
  }
}
})