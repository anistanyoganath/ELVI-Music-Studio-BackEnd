import express, { Request, Response } from "express";
import InventoryRoutes from "./src/inventory/routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/inventory", InventoryRoutes);

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
