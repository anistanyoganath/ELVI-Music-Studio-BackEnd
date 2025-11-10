import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const deleteRental = Router();

deleteRental.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.rental.delete({
    where: {
      id: id,
    },
  });

  res.send(200);
});

export default deleteRental;
