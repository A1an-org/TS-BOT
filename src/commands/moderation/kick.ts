import { ICommand } from "wokcommands"

export default {
    category: "moderation",
    description: "bans people off",

    testOnly: false,
    callback: ({ message, interaction }) => {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild?.members.cache.get(member.id)
            memberTarger?.kick();
            message.reply({
                content: member + " is now kicked"
            })
        } else {
            message.reply({
                content: "Either the member doesn't exist or you cannot kick that member"
            })
        }
    }
} as ICommand