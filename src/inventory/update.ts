import { Router } from "express";
import { prisma } from "../../DB/prisma_client";

const updateItem = Router();

updateItem.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const items = await prisma.item.update({
    data,
    where: {
      id: id,
    },
  });

  res.json(items);
});

export default updateItem;
