const { MessageEmbed } = require('discord.js')
const ids = require('../ids.json')

module.exports = async (member, bot) => {
  let embed = new MessageEmbed()
  .setTitle('Ele tankou🥲')
  .setColor('GREEN')
  .setDescription(`${member.user.username} não aguentou a pressão e pediu penico kkkj`)
  .setImage('https://c.tenor.com/XAPu_Y8VBnUAAAAS/kiss-sexy.gif')

  if (member.guild.id == ids.guild) {
    bot.channels.cache
    .get(ids.leave)
    .send({
      embeds: [embed]
    })
  }
}
