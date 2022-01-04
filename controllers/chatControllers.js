const { Router } = require('express');
const { getAllMessages, saveMessage } = require('../models/modelChat');

const router = Router();

router.get('/chatweb', async (_req, res) => {
  const chatweb = await getAllMessages();
  return res.status(200).json(chatweb);
});

router.post('/', async (req, res) => {
  const chatweb = await saveMessage(req.body);
  return res.status(200).json(chatweb);
});

module.exports = router;