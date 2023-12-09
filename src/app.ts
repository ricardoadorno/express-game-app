import 'dotenv/config';
import express from 'express';
import routes from './routes';
import mongo from './database/mongo';

const app = express();
app.use(express.json());

mongo();

app.use('/games', routes.games);

app.listen(3000, () => console.log('Server is running! http://localhost:3000'));
