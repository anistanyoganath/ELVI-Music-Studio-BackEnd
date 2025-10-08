import express, { Request, Response } from "express";
import CustomerRoutes from "./src/customer/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/customer", CustomerRoutes);

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
