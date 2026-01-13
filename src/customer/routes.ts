import { Router } from "express";
import AuthRoutes from "./auth/routes";
import ItemsRoutes from "./items/route";
import CategoriesRoutes from "./categories/route";
import DashboardRoutes from "./dashboard/route";

const routes = Router();
routes.use("/auth", AuthRoutes);
routes.use("/items", ItemsRoutes);
routes.use("/categories", CategoriesRoutes);
routes.use("/dashboard", DashboardRoutes);

export default routes;
