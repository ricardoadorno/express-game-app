import { Router } from 'express';
import { GamesModel } from '../models';

const route = Router();

route.get('/', async (_, response) => {
  await GamesModel.find({}).then((games) => {
    return response.json(games);
  });
});

route.get('/:id', async (request, response) => {
  const { id } = request.params;

  await GamesModel.findById(id).then((game) => {
    return response.json(game);
  });
});

route.post('/', async (request, response) => {
  const { body } = request;

  await GamesModel.create(body).then((game) => {
    return response.json(game);
  });
});

route.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { body } = request;

  await GamesModel.updateOne({ _id: id }, body).then((game) => {
    return response.json(game);
  });
});

route.delete('/:id', async (request, response) => {
  const { id } = request.params;

  await GamesModel.deleteOne({ _id: id }).then((game) => {
    return response.json(game);
  });
});

export default route;
