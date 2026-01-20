import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getAllInvoices = Router();

getAllInvoices.get("/", async (_req, res) => {
  try {
    const invoices = await prisma.invoice.findMany({
      orderBy: { issueDate: "desc" },
      include: {
        user: true,
        rental: { include: { item: true } },
        payments: true,
      },
    });
    res.json(invoices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch invoices" });
  }
});

export default getAllInvoices;
