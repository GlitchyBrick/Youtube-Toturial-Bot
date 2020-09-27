const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json')
//Gets The Prefix and The Token From Config.json

client.once('ready', () => {
    console.log(`Bot is Ready And the Prefix is ${prefix}`)
})
//Sends a Message on Console When The Bot Goes Online

client.once('ready', () => {
    client.user.setActivity(`${prefix}help`);
})
//The Bot Status

client.on('message', message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send('Pong')
    }
})//When Someone Sends the message +ping is sends 'Pong' Back

client.login(token)
