require('dotenv').config();

const { Command } = require("cdcommands");

module.exports = new Command ({
  name: 'reactionrole',
  category: 'Staff',
  guildOnly: true,
  userPermissions: ["ADMINISTRATOR"],
  description: 'Sets up a reaction role message',
  run: async ({ message, args, client, prefix, language }) => {



    if (message.author.id === process.env.BOTOWNERID) {
      let channel = process.env.REACTIONROLECHANNEL;
      let yellowTeamRole = message.guild.roles.cache.find(
        (role) => role.name === 'reactionrole1',
      );
      let blueTeamRole = message.guild.roles.cache.find(
        (role) => role.name === 'reactionrole2',
      );
      let yellowTeamEmoji = '🍋';
      let blueTeamEmoji = '🔵';

      let embed = new Discord.MessageEmbed()
        .setColor('#e42642')
        .setTitle('Choose which role you want')
        .setDescription(
          'Choosing a role will allow you to interact with that room\n\n' +
            `${yellowTeamEmoji} for role 1\n` +
            `${blueTeamEmoji} for role 2`,
        );

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(yellowTeamEmoji);
      messageEmbed.react(blueTeamEmoji);

      client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(yellowTeamRole);
          }
          if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(blueTeamRole);
          }
        } else {
          return;
        }
      });
      client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(yellowTeamRole);
          }
          if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(blueTeamRole);
          }
        } else {
          return;
        }
      });
    } else {
      message.channel.send(
        "You don't have the permission to use that command.",
      );
    }
  },
});


