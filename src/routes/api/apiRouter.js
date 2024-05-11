import express from 'express';
import { Quote } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.get('/random', async (req, res) => {
  const quote = await Quote.findAll();
  const randNym = Math.floor(Math.random() * (quote.length - 1));
  const initState = { quote: quote[randNym].dataValues };
  res.send(initState);
});

export default router;
