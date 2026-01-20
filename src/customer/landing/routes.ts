import { Router } from "express";
import getCategories from "./get_categories";

const routes = Router();

routes.use("/categories", getCategories);

export default routes;
