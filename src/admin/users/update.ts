import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const updateUser = Router();

updateUser.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  delete data.id;

  const user = await prisma.user.update({
    data,
    where: {
      id: id,
    },
  });

  res.json(user);
});

export default updateUser;
