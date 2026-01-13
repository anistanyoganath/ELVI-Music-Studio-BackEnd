import { Router } from "express";

const routes = Router();

routes.use("/categories", getItems);

export default routes;
