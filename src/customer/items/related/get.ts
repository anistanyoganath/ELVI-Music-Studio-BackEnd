import { Router } from "express";
import { prisma } from "../../../../DB/prisma_client";

const getRelatedItems = Router();

getRelatedItems.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Example logic: return items from same category excluding current item
    const currentItem = await prisma.item.findUnique({ where: { id } });
    if (!currentItem)
      return res.status(404).json({ message: "Item not found" });

    const relatedItems = await prisma.item.findMany({
      where: {
        category: currentItem.category,
        id: { not: id },
      },
      take: 4, // limit to 4 related items
    });

    res.json(relatedItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch related items" });
  }
});

export default getRelatedItems;
