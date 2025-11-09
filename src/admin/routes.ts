import { Router } from "express";
import AuthRoutes from "./auth/routes";

const routes = Router();
routes.use("/auth", AuthRoutes);

export default routes;
