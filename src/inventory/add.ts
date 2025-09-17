import { Router } from "express";
import { prisma } from "../../DB/prisma_client";

const addItem = Router();

addItem.post("/", async (req, res) => {
  const data = req.body;

  const items = await prisma.item.create({
    data,
  });

  res.send(200);
});

export default addItem;
