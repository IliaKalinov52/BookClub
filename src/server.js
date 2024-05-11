import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import bookRouter from './routes/render/bookRouter';
import addBookRouter from './routes/render/addBookRouter';
import apiRouter from './routes/api/apiRouter';
import apiBookRouter from './routes/api/apiBookRouter';
// import indexRouter from './routes/render/indexRouter';
// import apiRouter from './routes/api/apiRouter';

import authRouter from './routes/render/authRouter';
import apiAuthRouter from './routes/api/apiAuthRouter';
import resLocals from './middlewares/resLocals';
import eventRouter from './routes/render/eventRouter';
import apiEventsRouter from './routes/api/apiEventsRouter';
import shopRouter from './routes/render/shopRouter';
import checkAuth from './middlewares/checkAuth';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);

app.use('/monthbook', bookRouter);
app.use('/addbook', addBookRouter);
app.use('/api/monthbook', apiBookRouter);
app.use('/api', apiRouter);
app.use('/events', eventRouter);
app.use('/api/events', apiEventsRouter);
app.use('/auth', authRouter);
app.use('/auth', checkAuth, authRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/shop', shopRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
