const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../config")

module.exports = async(bot) => {

    var data = new SlashCommandBuilder()  = [

        new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Permet de connaitre la latence du bot"),
        new SlashCommandBuilder()
        .setName("prefix")
        .setDescription("Permet de changer le prefix")
        .addStringOption(option => option.setName("prefix").setDescription("Le prefix que le bot doit avoir").setRequired(true))
    ]

    const rest = new REST({ version: '9'}).setToken(token)

    bot.guilds.cache.forEach(async guild => {
        
        await rest.put(Routes.applicationGuildCommand(bot.user.id, bot.guilds[i].id), { body: commands });   
    })

    console.log("Les slashs commandes ont été crées avec succès !")    
}

    
