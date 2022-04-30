const Command = require("../../Structure/Command");
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {

    if(interaction.isCommand()) {

        const Command = bot.commands.get(interaction.commandName)

        Command.run(bot, interaction, interaction.options, bot.db)
    }
})
