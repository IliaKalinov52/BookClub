import express from 'express';
import { Book } from '../../../db/models';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    title, author, img, month,
  } = req.body;
  const newBook = await Book.create({
    title, author, img, month,
  });

  res.json(newBook);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Book.destroy({ where: { id } });
  res.sendStatus(200);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    title, author, img, month,
  } = req.body;
  try {
    const updatedBook = await Book.update({
      title, author, img, month,
    }, { where: { id } });
    if (updatedBook[0] === 0) {
      res.status(404).send('Book not found');
    } else {
      res.status(200).send('Book updated successfully');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
