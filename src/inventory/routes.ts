import { Router } from "express";
import getItems from "./get";
import addItem from "./add";
import updateItem from "./update";
import deleteitem from "./delete";

const routes = Router();

routes.use("/get", getItems);
routes.use("/add", addItem);
routes.use("/update", updateItem);
routes.use("/delete", deleteitem);

export default routes;
