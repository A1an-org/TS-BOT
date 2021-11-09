
import { ICommand } from 'wokcommands'
import { MessageEmbed } from 'discord.js'
export default {
  category: 'fun',
  description: 'Replies with kill', // Required for slash commands
  
  slash: 'both', // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds
  
  callback: ({ message, interaction }) => {
  
    const user = message.mentions.users.first();

    if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to kill :/');
    const embed = new MessageEmbed()
    .setTitle(`Killed a person`)
    .setColor(`#f3f3f3`)
    .setDescription(`${message.author.username} killed ${user.username}!`)

    // message is provided for a legacy command
    if (message) {
       

      message.reply({
        embeds: [embed]
      })
      return
    }

    // interaction is provided for slash commands
    interaction.reply({
        embeds: [embed]
    })
    
    // Alternatively we can just simply return our reply object
    // OR just a string as the content.
    // WOKCommands will handle the proper way to reply with it
    return {
        embeds: [embed]
    }
  },
} as ICommand