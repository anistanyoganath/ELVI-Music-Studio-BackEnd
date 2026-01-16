import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const deleteCategory = Router();

deleteCategory.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.category.delete({
    where: {
      id: id,
    },
  });

  res.send(200);
});

export default deleteCategory;
