import express from 'express';
import { Quote } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const quote = await Quote.findAll();
  const randNym = Math.floor(Math.random() * (quote.length - 1));
  const initState = { quote: quote[randNym].dataValues };
  res.render('IndexPage', initState);
});

router.get('*', (req, res) => {
  res.render('NotFoundPage');
});

export default router;
