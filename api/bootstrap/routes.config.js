import app from './express.config';
import authRouter from '../app/routes/auth/auth.routes';

app.get('/', function (req, res) {
    res.send('welcome');
});

app.use('/api/auth', authRouter);

export default app;