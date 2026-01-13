import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getCategories = Router();

getCategories.get("/", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

export default getCategories;
