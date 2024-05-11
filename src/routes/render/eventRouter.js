import { Router } from 'express';
import { Event } from '../../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const events = await Event.findAll({ order: [['updatedAt', 'DESC']] });
  const initState = { events };
  res.render('EventPage', initState);
});

export default router;
