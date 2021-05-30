const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')
const { status } = require('glitchymobilestatus');

client.on('ready', () => {
    console.log('READY')
})

status.mobile({
    STATUS: "TEST",
    TOKEN: token,
    MOBILE: true
})

client.login(token)
