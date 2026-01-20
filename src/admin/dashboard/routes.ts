import { Router } from "express";
import availableIntruments from "./available_instruments";
import pendingReturns from "./pending_returns";
import rentals from "./rentals";
import revenue from "./revenue";

const routes = Router();

routes.use("/available-instruments", availableIntruments);
routes.use("/pending-returns", pendingReturns);
routes.use("/rentals", rentals);
routes.use("/revenue", revenue);

export default routes;
