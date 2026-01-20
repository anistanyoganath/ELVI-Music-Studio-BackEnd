import { Router } from "express";
import getAllInvoices from "./get_all";
import getInvoice from "./get";
import recordPayment from "./record_payment";
import createInvoice from "./create";

const routes = Router();

routes.use("/get", getAllInvoices);
routes.use("/get", getInvoice);
routes.use("/pay", recordPayment);
routes.use("/create", createInvoice);

export default routes;
