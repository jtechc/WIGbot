const channels = ['755142481716314216'];
const { Feature } = require('cdcommands');

module.exports = new Feature((client, instance) => {
  client.on('message', (message) => { // This is an event not a feature, you also can't do client.on events, see more in the pull request.
    if (message.channel.id === channels) {

    const { content } = message;
    const eachLine = content.split('\n');

    for (const line of eachLine) {
      if (line.includes('=')) {
        const split = line.split('=');
        const emoji = split[0].trim();
        message.react(emoji);
      }
    }
  }});
});
