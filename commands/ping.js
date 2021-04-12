module.exports = {
  name: 'ping',
  permissions: [],
  description: 'this is a ping command',
  execute(client, message, args) {
    if (message.author.id === process.env.BOTOWNERID) {
      message.channel.send('pong!');
    }
  },
};
