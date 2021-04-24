const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
let fs = require('fs')

module.exports.run = async (client, message, args) => {
    const embed = new MessageEmbed()
    embed.setDescription('PONG')
    embed.setColor('RANDOM')

    message.channel.send(embed)
}

module.exports.help = {
    name: "ping"
}
