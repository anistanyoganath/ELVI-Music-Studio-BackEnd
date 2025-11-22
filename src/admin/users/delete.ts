import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const deleteUser = Router();

deleteUser.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await prisma.user.delete({
    where: {
      id: id,
    },
  });

  res.send(200);
});

export default deleteUser;
