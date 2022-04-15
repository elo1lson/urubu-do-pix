const Discord = require('discord.js')
const welcome = require('./src/welcome.js')
const godbye = require('./src/godbye.js')

const bot = new Discord.Client({
  intents: 3267
})
bot.once('ready', () => {
  console.log('Logado como ' + bot.user.username)
})

bot.on('guildMemberAdd', async (member) => {
    welcome(member, bot)
})
bot.on('guildMemberRemove', async (member) => {
  godbye(member, bot)
})

bot.login(process.env.TOKEN)
