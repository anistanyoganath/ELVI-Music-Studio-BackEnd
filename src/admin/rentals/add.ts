import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";
import { Prisma } from "@prisma/client";

const addRental = Router();

addRental.post("/", async (req, res) => {
  const data: Prisma.RentalCreateInput = req.body;

  await prisma.rental.create({
    data,
  });

  res.send(200);
});

export default addRental;
