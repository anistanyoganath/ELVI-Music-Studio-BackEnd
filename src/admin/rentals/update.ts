import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const updateRental = Router();

updateRental.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  delete data.id;

  const rentals = await prisma.rental.update({
    data,
    where: {
      id: id,
    },
  });

  res.json(rentals);
});

export default updateRental;
