// var TelegramBot = require('node-telegram-bot-api');
// var token = '1473429893:AAHyZBM8LY1flG4DkLz3TNT0ONPTXzu0e08';
// var bot = new TelegramBot(token, {polling:true});
// bot.onText(/\/echo(.+)/,function(msg,match){
//     var chatId = msg.chat.id;
//     var echo = match[1];
//     bot.sendMessage(chatId,echo);
// });

const TeleBot = require('telebot');
const bot = new TeleBot("1473429893:AAEma1F-j_Eo0Wqre0UR2qGCGxW7v1xkwhY");

bot.on('text', (msg) => msg.reply.text(msg.text));
bot.start();