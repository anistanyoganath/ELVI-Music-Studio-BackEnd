import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getItems = Router();

getItems.get("/", async (req, res) => {
  try {
    const { q = "", page = "1", limit = "12" } = req.query;

    const pageNumber = Number(page);
    const take = Number(limit);
    const skip = (pageNumber - 1) * take;

    const items = await prisma.item.findMany({
      where: q
        ? {
            OR: [
              { name: { contains: String(q), mode: "insensitive" } },
              { category: { contains: String(q), mode: "insensitive" } },
            ],
          }
        : undefined,
      take,
      skip,
      orderBy: { createdAt: "desc" },
    });

    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

export default getItems;
