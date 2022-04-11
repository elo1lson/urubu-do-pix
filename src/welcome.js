const { MessageEmbed } = require('discord.js')
module.exports = async (member, bot) => {
  let embed = new MessageEmbed()
  embed.setTitle('Seja bem vindo otário')
  embed.setColor('GREEN')
  embed.setDescription(`${member} acabou de entrar no servidor, visite o canal <#913019577141698600> e faça seu registro para poder conversar!, e não se esqueça de mamar o adm😃`)
  embed.addField('Canal de regras', '<#912885062507319386>')
  embed.addField('Chats', `<#912886408778236005>\n<#958471960445218826>`)
  embed.setImage('https://c.tenor.com/XAPu_Y8VBnUAAAAS/kiss-sexy.gif')

  if (member.guild.id == '778374795107631104') {
    bot.channels.cache.get('962848426943459388').send({
      embeds: [embed]
    })
  }
}