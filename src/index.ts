import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import dotenv from 'dotenv'
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("Welcome aboard"));
bot.help(ctx => ctx.reply("The secret message is `superuser`"));
bot.hears('superuser', ctx => ctx.reply("You're in"))
bot.on(message('text'), ctx => ctx.reply('Ok...'));

console.debug("Launching...")
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));