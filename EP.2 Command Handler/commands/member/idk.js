let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");


module.exports = class TestCommand extends Command {
  constructor(client) {
    super(client, {
      name: "COMMAND NAME",
      group: "member",
      memberName: "COMMAND NAME",
      guildOnly: true,
      description: "test"
    });
  }

  run(message) {
    //CODE
  }
};
