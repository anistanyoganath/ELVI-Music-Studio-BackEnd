import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";
import { Prisma } from "@prisma/client";

const addItem = Router();

addItem.post("/", async (req, res) => {
  const data: Prisma.ItemCreateInput = req.body;

  await prisma.item.create({
    data: {
      ...data,
      dateOfPurchase: new Date(data.dateOfPurchase!),
      createdAt: new Date(),
      updatedAt: new Date(),
      imageUrl: "",
    },
  });

  res.send(200);
});

export default addItem;
