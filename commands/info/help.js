const { Command, Validator } = require("cdcommands");
const { MessageEmbed } = require('discord.js');
const { ProperCase, FormatCooldown, FormatPerms } = require('../../Functions');

module.exports = new Command({
  name: 'help',
  description: 'master help command',
  details: 'master help command',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}help',
  noDisable: false,
  cooldown: 15000,
  category: 'Info',
  validate: new Validator({
    validate: ({ client, args }) => {
      const command_category = (args[0] || "").toLowerCase();
      const command = client.commands.get(
        [...client.commands.keys()].filter(command => command.toLowerCase() === command_category)[0] || [...client.aliases.keys()].filter(alias => alias.toLowerCase() === command_category)[0]
      );
      const category = client.commands.filter(
        (c) => c.category.toLowerCase() === command_category,
      );

      if (!command && category.size < 1 && command_category)
        return "NON_EXISTANT_COMMAND_CATEGORY";
    },
    onError: ({ args, prefix, message, client, error, language }) => {
      if (error === "NON_EXISTANT_COMMAND_CATEGORY") {
        const command_category = args[0] || "None";
        const res = client.defaultResponses.getValue(
          language,
          "HELP_COMMAND",
          "INVALID_COMMAND_CATEGORY",
          client.defaultResponses.fileData[language].HELP_COMMAND
            .INVALID_COMMAND_CATEGORY.embed
            ? {
                description: [
                  {
                    key: "COMMAND_CATEGORY",
                    replace: ProperCase(command_category),
                  },
                  {
                    key: "PREFIX",
                    replace: prefix,
                  },
                ],
              }
            : [
                {
                  key: "COMMAND_CATEGORY",
                  replace: ProperCase(command_category),
                },
                {
                  key: "PREFIX",
                  replace: prefix,
                },
              ],
        );
        if (res instanceof MessageEmbed) message.channel.send({ embed: res });
        else message.channel.send(res);
      }
    },
  }),
  run: async ({ message, args, client, prefix, language }) => {
    const command_category = (args[0] || "").toLowerCase();
    const command = client.commands.get(
      [...client.commands.keys()].filter(command => command.toLowerCase() === command_category)[0] || [...client.aliases.keys()].filter(alias => alias.toLowerCase() === command_category)[0]
    );
    const category = client.commands.filter(
      (c) => c.category.toLowerCase() === command_category,
    );

    const helpEmbed = new MessageEmbed()
      .setColor('#1E74BB')
      .setAuthor(
        "<Required> [Optional]",
        client.user.displayAvatarURL({ format: "png" }),
      )
      .setFooter(
        `Requested by ${message.author.username}`,
        message.author.displayAvatarURL({ format: "png", dynamic: true }),
      )
      .setTimestamp();

    if (command) {
      helpEmbed
        .setTitle(`${ProperCase(command.name)} Help Menu`)
        .setDescription(
          `*${
            command.details || "No extra details provided!"
          }*\n\n**Usage:** ${command.usage.replace(
            /{prefix}/gi,
            prefix,
          )}\n**Required Member Permissions:** ${
            FormatPerms(command.userPermissions) || "None"
          }\n**Required Bot Permissions:** ${
            FormatPerms(command.botPermissions) || "None"
          }\n**Cooldown:** ${
            FormatCooldown(command.cooldown) || "None"
          }\n**Global Cooldown** ${
            FormatCooldown(command.globalCooldown) || "None"
          }`,
        );
      return message.channel.send("", { embed: helpEmbed });
    } else if (category.size) {
      helpEmbed.setTitle(`${ProperCase(command_category)} Help Menu`);

      const cateCommands = category.array();

      /** @type {Command[][]} */
      const pages = [];
      for (let i = 0; i < cateCommands.length; i += 5)
        pages.push(cateCommands.slice(i, i + 5));

      let curPage = 0;
      const page1 = pages[curPage];
      pages.length > 1
        ? helpEmbed.setAuthor(
            `Page: 1/${pages.length}`,
            client.user.displayAvatarURL({ format: "png" }),
          )
        : null;
      helpEmbed
        .setDescription(
          page1
            .map(
              (c) =>
                `\`${c.name}\` → ${
                  c.description
                }\n**Aliases:** ${c.aliases.join(
                  ", ",
                )}\n**Usage:** ${c.usage.replace(/{prefix}/gi, prefix)}`,
            )
            .join("\n\n"),
        )
        .setFooter(
          `Use ${prefix}help [command] for more info`,
          message.author.displayAvatarURL({ format: "png" }),
        );

      const helpMessage = await message.channel.send("", { embed: helpEmbed });

      if (pages.length > 1) {
        const emojis = ["⬅️", "❌", "➡️"];
        emojis.forEach((e) => helpMessage.react(e));

        /**
         * @param {MessageReaction} reaction
         * @param {User} user
         */
        const filter = (reaction, user) =>
          message.author.id === user.id && emojis.includes(reaction.emoji.name);

        const collector = helpMessage.createReactionCollector(filter, {
          time: 90 * 1000,
        });

        collector.on("collect", async (reaction, user) => {
          switch (reaction.emoji.name) {
            case "⬅️":
              if (curPage > 0) curPage--;
              break;
            case "➡️":
              if (curPage < pages.length - 1) curPage++;
              break;
            case "❌":
              await helpMessage.reactions.removeAll();
              return collector.stop();
          }

          helpEmbed
            .setAuthor(
              `Page: ${curPage + 1}/${pages.length}`,
              client.user.displayAvatarURL({ format: "png" }),
            )
            .setDescription(
              pages[curPage]
                .map(
                  (c) =>
                    `\`${c.name}\` → ${
                      c.description
                    }\n**Aliases:** ${c.aliases.join(
                      ", ",
                    )}\n**Usage:** ${c.usage.replace(/{prefix}/gi, prefix)}`,
                )
                .join("\n\n"),
            );
          await reaction.users
            .remove(user)
            .catch((err) => client.logError({ data: err }));
          await helpMessage.edit(helpEmbed);
        });
      }
    } else {
      helpEmbed
        .setTitle("Help Menu")
        .setAuthor(`Total Commands: ${client.commands.size}`)
        .setFooter(`Use ${prefix}help [category] for more info`);

      const categories = Array.from(
        new Set(client.commands.map((c) => c.category)),
      );
      /** @type {string[][]} */
      const pages = [];

      for (let i = 0; i < categories.length; i += 6)
        pages.push(categories.slice(i, i + 6));

      pages.length > 1
        ? helpEmbed.setAuthor(
            `Page: 1/${pages.length}`,
            client.user.displayAvatarURL({ format: "png" }),
          )
        : null;
      let curPage = 0;
      for (const category of pages[curPage])
        helpEmbed.addField(
          `${category} [${
            client.commands.filter((c) => c.category === category).size
          }]`,
          client.commands
            .filter((c) => c.category === category)
            .array()
            .slice(0, 3)
            .map((c) => `\`${c.name}\``)
            .join(", ") + "...",
        );

      const helpMessage = await message.channel.send("", { embed: helpEmbed });

      if (pages.length > 1) {
        const emojis = ["⬅️", "❌", "➡️"];
        emojis.forEach((e) => helpMessage.react(e));

        /**
         * @param {MessageReaction} reaction
         * @param {User} user
         */
        const filter = (reaction, user) =>
          message.author.id === user.id && emojis.includes(reaction.emoji.name);

        const collector = helpMessage.createReactionCollector(filter, {
          time: 90 * 1000,
        });

        collector.on("collect", async (reaction, user) => {
          const reactedEmbed = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor(
              `Page: ${curPage + 1}/${pages.length}`,
              client.user.displayAvatarURL({ format: "png" }),
            )
            .setTimestamp()
            .setTitle("Help Menu")
            .setFooter(`Use ${prefix}help [category] for more info`);

          switch (reaction.emoji.name) {
            case "⬅️":
              if (curPage > 0) curPage--;
              break;
            case "➡️":
              if (curPage < pages.length - 1) curPage++;
              break;
            case "❌":
              await helpMessage.reactions.removeAll();
              return collector.stop();
          }

          for (const category of pages[curPage])
            reactedEmbed.addField(
              `${category} [${
                client.commands.filter((c) => c.category === category).size
              }]`,
              client.commands
                .filter((c) => c.category === category)
                .array()
                .slice(0, 3)
                .map((c) => `\`${c.name}\``)
                .join(", ") + "...",
            );

          await reaction.users
            .remove(user)
            .catch((err) => client.logError({ data: err }));
          await helpMessage.edit(reactedEmbed);
        });
      }
    }
  }

  /** 
   * You can get the commands by doing `client.commands`
   */
});
