import 'dotenv/config';
import express from 'express';
import routes from './routes';
import mongo from './database/mongo';
import errorHandler from './middlewares/errorHandler';
import errorNotFound from './middlewares/errorNotFoundHandler';

mongo();

const app = express();
app.use(express.json());

routes(app);

app.use(errorNotFound);

app.use(errorHandler);

app.listen(3000, () => console.log('Server is running! http://localhost:3000'));
