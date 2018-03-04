var TelegramBot = require('node-telegram-bot-api');
var token = '516703303:AAHHeFX8akQBYGQFGN2AHHQcwhim8od3XPU';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "Hello!", {caption: "I'm a bot!"});
});