const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'leave',
  aliases: ['stop', 's'],
  description: 'Stop\'s the current song and leave the channel',
  details: 'Stop\'s the current song and leaves the channel',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}leave',
  noDisable: false,
  userPermissions: ["ADMINISTRATOR"],
  category: 'Music',
  run: async ({ message }) => {
    const channel = message.member.voice.channel;
    if (!channel)
      return message.channel.send('You need to be in a voice channel to stop the music!');
    
    channel.leave();
    message.channel.send('Leaving channel :smiling_face_with_tear:');
  },
});
