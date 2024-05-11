import { Router } from 'express';
// import { where } from 'sequelize';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';

const router = Router();

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) return res.status(400).json({ message: 'нужно заполнить все поля ' });
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { username, password: await bcrypt.hash(password, 10), isAdmin: false },
  });
  if (!created) {
    return res.status(403).json({ message: 'пользователь уже создан ' });
  }
  const plainUser = user.get();
  delete plainUser.password;
  const { accessToken, refreshToken } = generateTokens({ user: plainUser });
  res.cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh).sendStatus(200);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(400).json({ message: 'нужно заполнить все поля ' });
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(403).json({ message: 'рользователь не найден' });
  }
  const correctPass = await bcrypt.compare(password, user.password);

  if (!correctPass) {
    return res.status(401).json({ message: 'не верный пароль ' });
  }

  const plainUser = user.get();
  delete plainUser.password;
  const { accessToken, refreshToken } = generateTokens({ user: plainUser });
  res.cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh).sendStatus(200);
});

router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200);
});

export default router;
