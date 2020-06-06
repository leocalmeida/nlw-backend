import express from "express";
//1:17:29 Dia 02

import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();

import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();

const routes = express.Router();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;
