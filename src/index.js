const common = require('./helper');
const moment = require('moment');
const Discord = require('discord.js');
const client = new Discord.Client();

var default_message_timeout = moment();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    switch (msg.content) {
        case '.ping':
            msg.reply('pong');
            break;
        default:
            if (moment() > default_message_timeout
            && common.isHermit(msg.content) === true) {
                msg.reply('let\'s all be hermits!');
                default_message_timeout = moment().add(10, 'minutes');  
            }
    } 
});

client.login(process.env.BOT_TOKEN);
