require('dotenv').config();
const { Telegraf } = require('telegraf');
const { isAmazonUrl, transformAmazonUrl } = require('./amazonUtils');

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN must be provided!');
}

const bot = new Telegraf(process.env.BOT_TOKEN);

// Handle /start command
bot.command('start', (ctx) => {
  ctx.reply('Welcome! Send me an Amazon link or use the /link command followed by an Amazon URL to get a referral link.');
});

// Handle /link command
bot.command('link', async (ctx) => {
  const message = ctx.message.text;
  const url = message.split(' ')[1];

  if (!url) {
    return ctx.reply('Please provide an Amazon URL after the /link command.');
  }

  if (!isAmazonUrl(url)) {
    return ctx.reply('Please provide a valid Amazon URL.');
  }

  try {
    const transformedUrl = await transformAmazonUrl(url);
    if (!transformedUrl) {
      return ctx.reply('Sorry, I could not process this Amazon URL.');
    }
    ctx.reply(`Here's your referral link:\n${transformedUrl}`);
  } catch (error) {
    console.error('Error processing URL:', error);
    ctx.reply('Sorry, I encountered an error while processing this URL.');
  }
});

// Handle regular messages containing Amazon links
bot.on('text', async (ctx) => {
  const message = ctx.message.text;
  
  if (!isAmazonUrl(message)) {
    return;
  }

  try {
    const transformedUrl = await transformAmazonUrl(message);
    if (!transformedUrl) {
      return ctx.reply('Sorry, I could not process this Amazon URL.');
    }
    ctx.reply(`Here's your referral link:\n${transformedUrl}`);
  } catch (error) {
    console.error('Error processing URL:', error);
    ctx.reply('Sorry, I encountered an error while processing this URL.');
  }
});

// Error handling
bot.catch((err, ctx) => {
  console.error('Bot error:', err);
  ctx.reply('Sorry, something went wrong while processing your request.');
});

// For local development
if (process.env.NODE_ENV === 'development') {
  bot.launch();
}

// Export for serverless deployment
module.exports = {
  bot: bot.webhookCallback('/api/webhook')
};