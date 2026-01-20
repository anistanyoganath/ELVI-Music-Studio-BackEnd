import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const rentals = Router();

rentals.get("/", async (req, res) => {
  try {
    const items = await prisma.rental.findMany({
      orderBy: { startDate: "desc" },
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch rentals" });
  }
});

export default rentals;
