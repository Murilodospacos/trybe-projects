const { Router } = require('express');
const { getAllMessages, saveMessage } = require('../models/modelChat');

const router = Router();

router.get('/chat', async (_req, res) => {
  try {
    const chatweb = await getAllMessages();
    return res.status(200).json(chatweb);
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const chatweb = await saveMessage(req.body);
    return res.status(200).json(chatweb);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;