import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";
import { Prisma } from "@prisma/client";

const addUser = Router();

addUser.post("/", async (req, res) => {
  const data: Prisma.UserCreateInput = req.body;

  await prisma.user.create({
    data: {
      ...data,
      password: "changeMe123!",
    },
  });

  res.send(200);
});

export default addUser;
