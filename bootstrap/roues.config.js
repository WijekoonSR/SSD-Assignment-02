import app from './express.config';

app.get('/', function (req, res) {
    res.send('welcome');
});

export default app;