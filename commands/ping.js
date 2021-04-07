module.exports = {
  name: 'ping',
  description: 'this is a ping command',
  execute(client, message, args) {
    if (message.author.id === process.env.BOTOWNERID) {
      message.channel.send('pong!');
    }
  },
};
