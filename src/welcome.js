const { MessageEmbed } = require('discord.js')
const ids = require('../ids.json')

module.exports = async (member, bot) => {
  let embed = new MessageEmbed()
  embed  .setTitle('Seja bem vindo otário')
    .setColor('GREEN')
    .setDescription(`${member} acabou de entrar no servidor, visite o canal <#913019577141698600> e faça seu registro para poder conversar!, e não se esqueça de mamar o adm😃`)
    .addField('Canal de regras', '<#912885062507319386>')
    .addField('Chats', `<#912886408778236005>\n<#958471960445218826>`)
    .setImage('https://c.tenor.com/XAPu_Y8VBnUAAAAS/kiss-sexy.gif')

  if (member.guild.id == ids.guild) {
    bot.channels.cache
      .get(ids.welcome)
      .send({
        embeds: [embed]
      })
  }
}
