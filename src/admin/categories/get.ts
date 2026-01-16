import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getCategory = Router();

getCategory.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();

  res.json(categories);
});

export default getCategory;
