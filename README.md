# Amazon Referral Telegram Bot

A Telegram bot that automatically adds referral IDs to Amazon links. The bot can process both full URLs and short URLs, and works in both private chats and groups.

## Features

- Processes Amazon links (both full URLs and short URLs)
- Adds custom referral ID to Amazon links
- Works with `/link` command in both private and group chats
- Serverless deployment on Vercel

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   - Get a bot token from [@BotFather](https://t.me/BotFather)
   - Add the token to your `.env` file

## Development

Run the bot locally:
```bash
npm run dev
```

## Deployment

1. Create a Vercel account if you haven't already
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy to Vercel:
   ```bash
   vercel
   ```
4. Set up your bot's webhook URL:
   ```
   https://api.telegram.org/bot<BOT_TOKEN>/setWebhook?url=<VERCEL_URL>/api/webhook
   ```

## Usage

- Send any Amazon link directly to the bot
- Use the `/link` command followed by an Amazon URL
- Add the bot to a group and use the `/link` command there

## Environment Variables

- `BOT_TOKEN`: Your Telegram bot token from @BotFather
- `NODE_ENV`: Set to 'development' for local testing, 'production' for deployment

## License

ISC