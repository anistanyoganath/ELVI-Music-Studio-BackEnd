import { Router } from "express";
import getStats from "./stats";
import getRecentRentals from "./recent-rentals";

const routes = Router();

routes.use("/stats", getStats);
routes.use("/recent-renatls", getRecentRentals);

export default routes;
