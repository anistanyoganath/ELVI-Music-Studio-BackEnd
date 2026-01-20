import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const pendingReturns = Router();

pendingReturns.get("/", async (req, res) => {
  try {
    const data = await prisma.rental.findMany({
      orderBy: { endDate: "asc" },
      where: {},
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch pending returns" });
  }
});

export default pendingReturns;
