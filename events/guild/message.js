require('dotenv').config();
module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
  if (command) command.execute(client, message, args, Discord);
};

// client.on('message', (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//
//   const args = message.content.slice(prefix.length).split(/ +/);
//   const command = args.shift().toLowerCase();
//
//   if (command === 'rules') {
//     client.commands.get('rules').execute(message, args, Discord);
//   } else if (command === 'purge') {
//     client.commands.get('purge').execute(message, args);
//   } else if (command === 'kick') {
//     client.commands.get('kick').execute(message, args);
//   } else if (command === 'ban') {
//     client.commands.get('ban').execute(message, args);
//   } else if (command === 'reactionrole') {
//     client.commands.get('reactionrole').execute(message, args, Discord, client);
//   } else if (command === 'play') {
//     client.commands.get('play').execute(message, args);
//   } else if (command === 'leave') {
//     client.commands.get('leave').execute(message, args);
//   }
// });
