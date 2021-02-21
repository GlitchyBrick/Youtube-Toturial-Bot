const { CommandoClient } = require("discord.js-commando");
const { Structures } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { owner, prefix, token } = require('./config.json');
const path = require("path");

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: owner
});


client.registry.registerDefaultTypes()
client.registry.registerGroups([
  ["member", "Member Commands"]
])

client.registry.registerDefaultGroups()
client.registry.registerDefaultCommands({
  help: false,
  ping: true,
  prefix: false,
  commandState: false,
  unknownCommand: false
})

client.registry.registerCommandsIn(path.join(__dirname, "commands"))

client.on("ready", () => {
  console.log('Ready')
});

client.login(token);
