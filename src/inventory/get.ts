import { Router } from "express";
import { prisma } from "../../DB/prisma_client";

const getItems = Router();

getItems.get("/", async (req, res) => {
  const items = await prisma.item.findMany();

  res.json(items);
});

export default getItems;
