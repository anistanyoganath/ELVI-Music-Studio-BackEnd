import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getUsers = Router();

getUsers.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

export default getUsers;
