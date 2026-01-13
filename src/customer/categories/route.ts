import { Router } from "express";
import getCategories from "./get";

const routes = Router();

routes.use("/get", getCategories);

export default routes;
