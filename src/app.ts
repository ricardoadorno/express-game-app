import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/', routes.games);

app.listen(3000, () => console.log('Server is running!'));
