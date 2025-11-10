import { Router } from "express";
import AuthRoutes from "./auth/routes";
import InventoryRoutes from "./inventory/routes";
import RentalRoutes from "./rentals/routes";

const routes = Router();
routes.use("/auth", AuthRoutes);
routes.use("/inventory", InventoryRoutes);
routes.use("/rentals", RentalRoutes);

export default routes;
