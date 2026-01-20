import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const getInvoice = Router();

getInvoice.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        user: true,
        rental: { include: { item: true } },
        payments: true,
      },
    });
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.json(invoice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch invoice" });
  }
});
export default getInvoice;
