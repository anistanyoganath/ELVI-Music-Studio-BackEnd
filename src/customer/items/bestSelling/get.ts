import { Router } from "express";
import { prisma } from "../../../../DB/prisma_client";

const getBestSellingItems = Router();

getBestSellingItems.get("/", async (req, res) => {
  try {
    const bestSelling = await prisma.item.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: 6,
    });

    res.json(bestSelling);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch best selling items" });
  }
});

export default getBestSellingItems;
