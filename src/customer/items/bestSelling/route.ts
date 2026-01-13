import { Router } from "express";
import getBestSellingItems from "./get";

const routes = Router();

routes.use("/get", getBestSellingItems);

export default routes;
