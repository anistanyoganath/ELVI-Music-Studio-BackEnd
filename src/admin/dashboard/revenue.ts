import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const revenue = Router();

revenue.get("/", async (req, res) => {
  try {
    const payments = await prisma.payment.findMany({
      select: {
        amount: true,
        createdAt: true,
      },
    });

    const revenueByMonth = payments.reduce(
      (acc, p) => {
        const month = `${p.createdAt.getFullYear()}-${String(
          p.createdAt.getMonth() + 1,
        ).padStart(2, "0")}`;

        acc[month] = (acc[month] || 0) + p.amount;
        return acc;
      },
      {} as Record<string, number>,
    );

    res.json(revenueByMonth);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to calculate monthly revenue" });
  }
});

export default revenue;
