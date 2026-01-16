import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";
import { Prisma } from "@prisma/client";

const addCategory = Router();

addCategory.post("/", async (req, res) => {
  const data: Prisma.CategoryCreateInput = req.body;

  await prisma.category.create({
    data,
  });

  res.send(200);
});

export default addCategory;
