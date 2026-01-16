import { Router } from "express";
import deleteCategory from "./delete";
import addCategory from "./add";
import getCategory from "./get";

const routes = Router();

routes.use("/get", getCategory);
routes.use("/delete", deleteCategory);
routes.use("/add", addCategory);

export default routes;
