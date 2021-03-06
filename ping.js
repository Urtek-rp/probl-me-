const Discord = require("discord.js")
const Command = require("../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Permet de connaître la latence du bot",
    utilisation: "ping",
    permission: "Aucune",
    category: "Information",

    async run(bot, message, args, db) {

            const startTimeDB = Date.now()

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.ID}`, async (err, req) => {

            const endTimeDB = Date.now()

            const startTime = Date.now()

            await message.reply(`En cours...`).then(async msg => {

                const endTime = Date.now()
                
               try {
                await msg.edit(`\`Latence du bot\` : ${endTime - startTime}ms\n\`Latence de l'API de Discord\` : ${bot.ws.ping}ms\n\`Latence de la base de données\` : ${endTimeDB - startTimeDB}`)
               } catch(err) {
                await message.editReply(`\`Latence du bot\` : ${endTime - startTime}ms\n\`Latence de l'API de Discord\` : ${bot.ws.ping}ms\n\`Latence de la base de données\` : ${endTimeDB - startTimeDB}`)
               }
            })
        })
    }
})