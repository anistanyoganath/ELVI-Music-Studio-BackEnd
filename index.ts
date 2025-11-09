import express, { Request, Response } from "express";
import cors from "cors";
import CustomerRoutes from "./src/customer/routes";
import AdminRoutes from "./src/admin/routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for your frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["*"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

app.use("/customer", CustomerRoutes);
app.use("/admin", AdminRoutes);

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
