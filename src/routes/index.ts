import games from './games';
import studios from './studios';
import express from 'express';
import users from './users';

const routes = (app: express.Application) => {
  app.use(express.json(), games, studios, users);
};

export default routes;
