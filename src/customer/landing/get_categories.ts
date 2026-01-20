import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getCategories = Router();

getCategories.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();

  res.json(categories);
});

export default getCategories;
