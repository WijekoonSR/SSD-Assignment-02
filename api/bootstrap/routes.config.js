import app from './express.config';
import authRouter from '../app/routes/auth/auth.routes';
import driveFileRouter from '../app/routes/drive-file/drive-file.routes';
import linkedInRouter from '../app/routes/linkedIn/linkedIn.routes';

app.get('/', function (req, res) {
    res.send('welcome');
});

app.use('/api/auth', authRouter);

app.use('/api/drive-upload', driveFileRouter);

app.use('/api/linked-in', linkedInRouter);

export default app;