import { Router } from "express";
import { prisma } from "../../DB/prisma_client";

const deleteitem = Router();

deleteitem.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.item.delete({
    where: {
      id: id,
    },
  });

  res.send(200);
});

export default deleteitem;
