let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");


module.exports = class TestCommand extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      group: "test",
      memberName: "test",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    message.channel.send("test");
  }
};
