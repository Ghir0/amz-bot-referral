# Amazon Referral Bot 🤖

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14-blue.svg)](https://nodejs.org/)
[![Telegram Bot](https://img.shields.io/badge/Telegram-Bot-blue.svg)](https://core.telegram.org/bots)

A powerful Telegram bot that transforms Amazon product links into affiliate referral links with advanced features and smart URL handling.

## 🌟 Features

- **Smart URL Handling**  
  Processes both full Amazon URLs and shortened links (amzn.to)
  
- **Multi-Affiliate Support**  
  Randomly selects from multiple affiliate IDs for each conversion

- **Seamless Integration**  
  Works in both private chats and group conversations

- **Advanced URL Parsing**  
  Automatically extracts product IDs from complex URLs

- **Error Handling**  
  Provides clear error messages for invalid or unsupported URLs

- **Serverless Ready**  
  Designed for easy deployment on serverless platforms

## 🛠️ Technical Specifications

| Category          | Details                          |
|-------------------|----------------------------------|
| Language          | JavaScript (Node.js)            |
| Framework         | Telegraf.js                     |
| URL Parsing       | Regular Expressions             |
| HTTP Client       | node-fetch                      |
| Deployment        | Vercel/Serverless               |
| Environment       | Node.js v14+                   |
| License           | MIT                             |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Telegram bot token from [@BotFather](https://t.me/BotFather)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/amazon-ref-bot.git
cd amazon-ref-bot
```