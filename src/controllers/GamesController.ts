import { Request, Response } from 'express';
import { Games, Studios } from '../models';

class GamesController {
  static async index(req: Request, res: Response) {
    const games = await Games.find({});
    return res.json(games);
  }

  static async show(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const game = await Games.findById(id);
    return res.json(game);
  }

  static async searchByName(req: Request, res: Response) {
    const { name } = req.query;

    try {
      const games = await Games.find({
        name: { $regex: name as string },
      });

      return res.json(games);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async store(req: Request, res: Response) {
    const { body } = req;

    try {
      const studio = await Studios.findById(body.studio);

      if (!studio) {
        return res.status(404).json({ error: 'Studio not found' });
      }

      const game = await Games.create({ ...body, studio });
      return res.json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async update(
    req: Request<{ id: string }, {}, typeof Games>,
    res: Response
  ) {
    const { id } = req.params;
    const { body } = req;

    try {
      const game = await Games.findByIdAndUpdate(id, body);
      return res.json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async destroy(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    try {
      const game = await Games.findByIdAndDelete(id);

      if (!game) {
        return res.status(404).json({ error: 'Game not found' });
      }

      return res.json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

export default GamesController;
