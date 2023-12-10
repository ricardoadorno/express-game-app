import { Request, Response } from 'express';
import { Studios } from '../models';

class StudiosController {
  static async index(req: Request, res: Response) {
    const studios = await Studios.find({});
    return res.json(studios);
  }

  static async show(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const game = await Studios.findById(id);
    return res.json(game);
  }

  static async store(req: Request, res: Response) {
    const { body } = req;

    try {
      const game = await Studios.create(body);
      return res.json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;

    try {
      const game = await Studios.findByIdAndUpdate(id, body);
      return res.json(game);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async destroy(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    try {
      const game = await Studios.findByIdAndDelete(id);

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

export default StudiosController;
