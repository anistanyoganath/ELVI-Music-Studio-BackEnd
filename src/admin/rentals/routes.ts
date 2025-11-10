import { Router } from "express";
import getRentals from "./get";
import addRentals from "./add";
import updateRental from "./update";
import deleteRental from "./delete";

const routes = Router();

routes.use("/get", getRentals);
routes.use("/add", addRentals);
routes.use("/update", updateRental);
routes.use("/delete", deleteRental);

export default routes;
