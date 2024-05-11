import fs from 'fs/promises';
import express from 'express';
import sharp from 'sharp';
import { Event } from '../../../db/models';
import upload from '../../middlewares/multer';

const apiEventsRouter = express.Router();

apiEventsRouter.post('/', upload.single('img'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    // Handle form data and add new event to the database
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`./public/img/${name}`, outputBuffer);

    const response = await Event.create({
      title: req.body.title,
      description: req.body.description,
      img: name,
      userId: req.body.userId,
    });

    return res.json(response).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server error' });
  }
});
export default apiEventsRouter;
