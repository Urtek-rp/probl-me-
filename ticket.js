const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Permet d'envoyer l'embed des tickets'",
    utilisation: "",
    alias : ["ticket", "t"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "Ticket",
    cooldown: 10,

    async run(bot, message, args, db) {

        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle(`ticket`)
        .setDescription("Appuyez sur le bouton pour contacter notre support")

        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setLabel("Ouvrir un ticket")
        .setEmoji("🔓")
        .setCustomId("ticket"))

        await message.delete()
        await message.channel.send({embed: [Embed], components: [btn]})
        
    }
})