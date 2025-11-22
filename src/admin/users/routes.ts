import { Router } from "express";
import getUsers from "./get";
import addRentals from "./add";
import updateUser from "./update";
import deleteUser from "./delete";

const routes = Router();

routes.use("/get", getUsers);
routes.use("/add", addRentals);
routes.use("/update", updateUser);
routes.use("/delete", deleteUser);

export default routes;
