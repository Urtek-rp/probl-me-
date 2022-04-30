const Discord = require("discord.js")
const mysql = require("mysql")
const Client =require("./Client")

/**
 * @param {Discord.Client} bot 
 * @param {Discord.message} message 
 * @param {string[]} args 
 * @param {mysql.Connection} db
 */

function RunFunction(bot, message, args, db) {}

class Command {

    /**
     * @typedef {{name: string, description: string, utilisation: string, permission: string, category: string, run: RunFunction}}
     * @param {CommandOptions} options
     * @param {string[]} args
     * @
     */

    constructor(options) {

        this.name = options.name;
        this.description = options.description;
        this.utilisation = options.utilisation;
        this.permission = options.permission;
        this.category = options.category;
        this.run = options.run;
    }
}

module.exports = Command;