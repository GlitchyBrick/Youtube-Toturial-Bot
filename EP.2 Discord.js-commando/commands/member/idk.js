let fs = require("fs");
const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const { Client, MessageAttachment, MessageEmbed } = require("discord.js");


module.exports = class TestCommand extends Command {
  constructor(client) {
    super(client, {
      name: "COMMAND NAME",
      group: "FOLDER NAME",
      memberName: "COMMAND NAME",
      guildOnly: true,
      description: "DESCRIPTION"
    });
  }

  run(message) {
    //CODE
  }
};
