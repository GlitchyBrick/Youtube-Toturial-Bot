const Discord = require('discord.js')
const client = new Discord.Client()
const { Collection, MessageEmbed} = require('discord.js')
const { prefix, token } = require('./config.json')
const fs = require('fs')

//Colections
client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0) {
        console.log("Couldnt find commands");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`)
        client.commands.set(props.help.name, props);
    })
});

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`)
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.content.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift()

    let commandfile = client.commands.get(command);
    if(commandfile) commandfile.run(client, message, args)
})

client.login(token)
