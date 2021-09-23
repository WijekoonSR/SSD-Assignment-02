import app from './express.config';
import authRouter from '../app/routes/auth/auth.routes';
import DriveFileRouter from '../app/routes/drive-file/drive-file.routes';

app.get('/', function (req, res) {
    res.send('welcome');
});

app.use('/api/auth', authRouter);

app.use('/api/drive-upload', DriveFileRouter);

export default app;