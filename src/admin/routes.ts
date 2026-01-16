import { Router } from "express";
import AuthRoutes from "./auth/routes";
import InventoryRoutes from "./inventory/routes";
import RentalRoutes from "./rentals/routes";
import UserRoutes from "./users/routes";
import CategoryRoutes from "./categories/routes";

const routes = Router();
routes.use("/auth", AuthRoutes);
routes.use("/inventory", InventoryRoutes);
routes.use("/rentals", RentalRoutes);
routes.use("/users", UserRoutes);
routes.use("/categories", CategoryRoutes);

export default routes;
