import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getRentals = Router();

getRentals.get("/", async (req, res) => {
  const rentals = await prisma.rental.findMany();

  res.json(rentals);
});

export default getRentals;
