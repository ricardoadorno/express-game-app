import { Router } from 'express';

const route = Router();

const games = [
  {
    id: 1,
    name: 'Super Mario World',
    description: 'Best game ever',
    price: 10,
  },
  {
    id: 2,
    name: 'Donkey Kong Country',
    description: 'Second best game ever',
    price: 15,
  },
  {
    id: 3,
    name: 'The Legend of Zelda: A Link to the Past',
    description: 'Third best game ever',
    price: 20,
  },
];

route.get('/', (_, response) => {
  return response.json(games);
});

route.get('/:id', (request, response) => {
  const { id } = request.params;

  const game = games.find((game) => game.id === Number(id));

  if (!game) {
    return response.status(404).json({ error: 'Game not found' });
  }

  return response.json(game);
});

route.post('/', (request, response) => {
  const { name, description, price } = request.body;

  const game = {
    id: games.length + 1,
    name,
    description,
    price,
  };

  games.push(game);

  return response.json(game);
});

route.put('/:id', (request, response) => {
  const { id } = request.params;
  const { name, description, price } = request.body;

  const gameIndex = games.findIndex((game) => game.id === Number(id));

  if (gameIndex < 0) {
    return response.status(404).json({ error: 'Game not found' });
  }

  const game = {
    id: Number(id),
    name,
    description,
    price,
  };

  games[gameIndex] = game;

  return response.json(game);
});

route.delete('/:id', (request, response) => {
  const { id } = request.params;

  const gameIndex = games.findIndex((game) => game.id === Number(id));

  if (gameIndex < 0) {
    return response.status(404).json({ error: 'Game not found' });
  }

  games.splice(gameIndex, 1);

  return response.status(204).send();
});

export default route;
