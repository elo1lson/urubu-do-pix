const { MessageEmbed } = require('discord.js')
module.exports = async (member, bot) => {
  let embed = new MessageEmbed()
  embed.setTitle('Ele tankou🥲')
  embed.setColor('GREEN')
  embed.setDescription(`${member.username} não aguentou a pressão e pediu penico kkkj`)
  embed.setImage('https://c.tenor.com/XAPu_Y8VBnUAAAAS/kiss-sexy.gif')

  if (member.guild.id == '778374795107631104') {
    bot.channels.cache.get('962848426943459388').send({
      embeds: [embed]
    })
  }
}