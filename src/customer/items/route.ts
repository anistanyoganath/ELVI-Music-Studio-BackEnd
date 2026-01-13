import { Router } from "express";
import getItems from "./get";
import RelatedRoutes from "./related/route";
import BestSellingRoutes from "./bestSelling/route";

const routes = Router();

routes.use("/get", getItems);
routes.use("/related", RelatedRoutes);
routes.use("/best-selling", BestSellingRoutes);

export default routes;
