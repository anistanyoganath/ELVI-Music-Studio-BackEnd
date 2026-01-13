import { Router } from "express";
import getRelatedItems from "./get";

const routes = Router();

routes.use("/get", getRelatedItems);

export default routes;
