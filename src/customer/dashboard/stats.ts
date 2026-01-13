import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";
import { AuthRequest } from "../../../auth.middleware";

const getStats = Router();

getStats.get("/", async (req: AuthRequest, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const [totalRentals, activeRentals, pendingRequests] = await Promise.all([
    prisma.rental.count({ where: { userId } }),
    prisma.rental.count({ where: { userId, status: "ACTIVE" } }),
    prisma.rental.count({ where: { userId, status: "PENDING" } }),
  ]);

  res.json({
    totalRentals,
    activeRentals,
    pendingRequests,
  });
});

export default getStats;
