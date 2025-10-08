import { Router } from "express";
import Login from "./login";
import Signup from "./signup";

const routes = Router();

routes.use("/login", Login);
routes.use("/signup", Signup);

export default routes;
