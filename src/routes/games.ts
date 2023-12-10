import { Router } from 'express';
import GamesController from '../controllers/GamesController';

const route = Router();

route.get('/games', GamesController.index);

route.get('/games/search', GamesController.searchByName);

route.get('/games/:id', GamesController.show);

route.post('/games', GamesController.store);

route.put('/games/:id', GamesController.update);

route.delete('/games/:id', GamesController.destroy);

export default route;
