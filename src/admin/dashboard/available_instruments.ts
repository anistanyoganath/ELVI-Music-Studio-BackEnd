import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const availableIntruments = Router();

availableIntruments.get("/", async (req, res) => {
  try {
    const instruments = await prisma.item.findMany({
      orderBy: { name: "asc" },
    });

    res.json(instruments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch instruments" });
  }
});

export default availableIntruments;
