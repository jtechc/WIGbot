let ytdl = require('ytdl-core');
let ytSearch = require('yt-search');

module.exports = {
  name: 'play',
  aliases: ["p", "song"],
  category: 'Music',
  permissions: ["ADMINISTRATOR"],
  description: 'Joins and plays a video from youtube',
  async execute(client, message, args) {
    let voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        'you need to be in a voice channel for this to work!',
      );

    let permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT'))
      if (!permissions.has('SPEAK'))
        return message.channel.send('You don\t have the correct permission');
    if (!args.length)
      return message.channel.send('You need to have something to search!');

    let validURL = (str) => {
      var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (!regex.test(str)) {
        return false;
      } else {
        return true;
      }
    };

    if (validURL(args[0])) {
      let connection = await voiceChannel.join();
      let stream = ytdl(args[0], { filter: 'audioonly' });

      connection.play(stream, { seek: 0, volume: 1 }).on('finish', () => {
        voiceChannel.leave();
        message.channel.send('leaving channel');
      });

      await message.reply(`:thumbsup: Now Playing ***Your Link!***`);

      return;
    }

    let connection = await voiceChannel.join();
    let videoFinder = async (query) => {
      let videoResult = await ytSearch(query);
      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };
    let video = await videoFinder(args.join(' '));
    if (video) {
      let stream = ytdl(video.url, { filter: 'audioonly' });
      connection.play(stream, { seek: 0, volume: 1 }).on('finish', () => {
        voiceChannel.leave();
      });

      await message.reply(`:thumbsup: Now Playing *** ${video.title}***`);
    } else {
      message.channel.send('No video results found');
    }
  },
};
