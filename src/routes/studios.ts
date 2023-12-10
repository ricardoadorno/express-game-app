import { Router } from "express";
import StudiosController from "../controllers/StudiosController";

const route = Router();

route.get("/studios", StudiosController.index);

route.get("/studios/:id", StudiosController.show);

route.post("/studios", StudiosController.store);

route.put("/studios/:id", StudiosController.update);

route.delete("/studios/:id", StudiosController.destroy);

export default route;
