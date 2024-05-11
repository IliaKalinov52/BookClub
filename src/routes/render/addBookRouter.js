import express from 'express';
import { Book } from '../../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('AddBookPage');
});

router.get('/change/:id', async (req, res) => {
  const { id } = req.params;
  if (!Number.isNaN(+id)) {
    const editBook = await Book.findByPk(id);
    if (editBook) {
      const initState = { editBook };
      res.render('BookChangePage', initState);
    } else {
      res.status(404).send('Book not found');
    }
  } else {
    console.log('error');
    res.status(400).send('Invalid ID');
  }
});

export default router;
