const { Command } = require('cdcommands');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = new Command({
name: 'weather',
aliases: ['weatherinformation'],
description: 'Find the weather of a specific city',
details: 'Find the weather of a specific city',
minArgs: 0,
maxArgs: Infinity,
usage: '{prefix}weather <place>',
noDisable: false,
cooldown: 15000,
category: 'Info',
run: async ({ message, args, client, prefix, language }) => {
  const city = args.slice(0).join(' ');

  (() => {
    if (!city) return message.channel.send('Please enter a city to get the weather in!');

    weather.find({
      search: city,
      degreeType: 'F'
    }, function (err, result) {
      if (err) console.log(err)

      if (result.length === 0) {
        return message.channel.send(`No data was found for \`${(String(city).length > 1959) ? String(city).substring(0, 1956) + '...' : city}\``)
      } else {
        const dc = Math.round(((result[0].current.temperature - 32) * 5 / 9) * 100) / 100
        const dc2 = Math.round(((result[0].current.feelslike - 32) * 5 / 9) * 100) / 100
        const b4 = result[0].current.winddisplay.split('mph')
        const a4 = Math.round(b4[0] * 1.609344) + ' kph' + b4[1]

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Weather in: ${result[0].location.name}`)
        .setThumbnail(result[0].current.imageUrl)
        .addField('Temperature: ', `${result[0].current.temperature}°F \n ${dc}°C`, true)
        .addField('Feels like: ', `${result[0].current.feelslike}°F \n ${dc2}°C`, true)
        .addField('Humidity: ', `${result[0].current.humidity}%`, true)
        .setDescription(`**Sky weather:** ${result[0].current.skytext} \n\n **Wind info:** ${result[0].current.winddisplay} (${a4})`);
        return message.channel.send(embed)
      }
    })
  })
}
})