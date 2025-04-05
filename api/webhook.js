const { bot } = require('../index');

module.exports = async (req, res) => {
  try {
    // Handle GET requests for health checks
    if (req.method === 'GET') {
      return res.status(200).send('Bot is running');
    }

    // Handle POST requests for webhook
    if (req.method === 'POST') {
      await bot(req, res);
      return;
    }

    // Handle other methods
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};