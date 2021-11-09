import { Embed } from '@discordjs/builders';
import { error } from 'console';
import Discord, { 
    Intents,
    Message,
    MessageEmbed,
    PartialMessage, 
    TextChannel 
} from 'discord.js'
import path from 'path'
import WOKCommands from 'wokcommands'
const LOGGING_CHANNEL_ID = '771001304600150059';
const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES

    ]

});



client.on('messageDelete', async (messageDelete: Message | PartialMessage) => {

    const logChannel = await client.channels.cache.get(LOGGING_CHANNEL_ID) as TextChannel;
    

    const logMessage = `**Message sent by** <@!${messageDelete.author}> **deleted in** <#${messageDelete.channel.id}> \n   Content:   ** ${messageDelete.content}**`;
     logChannel.send(logMessage)
})
client.on('ready', () => {
    console.log("Bot is online!");

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true
    })
   


    console.log(`Logged in`, 'INFO');
    console.log(`Waiting for events`);

})

client.on('guildMemberAdd', (member: any) => {

    member.guild.channels.get('771001304600150059').send( // A changer !
      new MessageEmbed()
        .setColor('#d347a6') // Go to https://htmlcolorcodes.com
        .setDescription(`Welcome ${member.user.username} 👶`)
        .setTitle(' WElcome!')
    );
  });
  
  client.on('guildMemberRemove', (member: any) => {
  
    member.guild.channels.get('771001304600150059').send( // A changer !
      new MessageEmbed()
        .setColor('#d347a6') // Go to : https://htmlcolorcodes.com
        .setDescription(`${member.user.username} ...`)
        .setTitle('Somebody left..')
        );
    });







client.login("");
