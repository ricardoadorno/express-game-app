import { Router } from "express";
import UsersController from "../controllers/UsersController";

const route = Router();

route.get("/users", UsersController.index);

route.post("/users/favorite", UsersController.favoriteGame);

route.get("/users/:id", UsersController.show);

route.post("/users", UsersController.store);

route.put("/users/:id", UsersController.update);

route.delete("/users/:id", UsersController.destroy);

export default route;
