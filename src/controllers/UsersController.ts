import { Request, Response } from 'express';
import { Users } from '../models';

class UsersController {
  static async favoriteGame(req: Request, res: Response) {
    const { userId, gameId } = req.body;

    try {
      const user = await Users.findByIdAndUpdate(userId, {
        favoriteGame: gameId,
      });

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async index(req: Request, res: Response) {
    const users = await Users.find({});
    return res.json(users);
  }

  static async show(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const user = await Users.findById(id);
    return res.json(user);
  }

  static async store(req: Request<{}, {}, typeof Users>, res: Response) {
    const { body } = req;

    try {
      const user = await Users.create(body);
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async update(
    req: Request<{ id: string }, {}, typeof Users>,
    res: Response
  ) {
    const { id } = req.params;
    const { body } = req;

    try {
      const user = await Users.findByIdAndUpdate(id, body);
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }

  static async destroy(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    try {
      const user = await Users.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}

export default UsersController;
