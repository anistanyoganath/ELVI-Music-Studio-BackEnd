import { Router } from "express";
import { AuthRequest } from "../../../auth.middleware";
import { prisma } from "../../../DB/prisma_client";

const getRecentRentals = Router();

getRecentRentals.get("/", async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const rentals = await prisma.rental.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    res.json(
      rentals.map((r) => ({
        id: r.id,

        status: r.status,
      }))
    );
  } catch (err) {
    console.error("Recent rentals error:", err);
    res.status(500).json({ message: "Failed to fetch recent rentals" });
  }
});

export default getRecentRentals;
