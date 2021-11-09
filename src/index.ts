import { Embed } from '@discordjs/builders';
import { error } from 'console';
import Discord, { 
    Intents,
} from 'discord.js'
import path from 'path'
import WOKCommands from 'wokcommands'

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log("Bot is online!");

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true
    })
})




client.login("");
