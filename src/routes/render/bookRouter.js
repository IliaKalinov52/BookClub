import express from 'express';
import { Book } from '../../../db/models';

const router = express.Router();

// router.get('/', async (req, res) => {
//   const books = await Book.findAll({ order: [['createdAt', 'DESC']] });
//   const latestBook = await Book.findOne({ order: [['createdAt', 'DESC']] });
//   const initState = { books, latestBook };
//   res.render('BookPage', initState);
// });
router.get('/', async (req, res) => {
  const allBooks = await Book.findAll({ order: [['id', 'DESC']] });
  const latestBook = allBooks.shift(); // Удаляем последний элемент массива (последний по дате)
  const books = allBooks; // Все книги кроме последней
  const initState = { books, latestBook };
  res.render('BookPage', initState);
});

export default router;
