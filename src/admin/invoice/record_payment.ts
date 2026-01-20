import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

const recordPayment = Router();

recordPayment.post("/:invoiceId", async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const { amount, method = "CASH", reference = "" } = req.body;

    const invoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: { payments: true },
    });

    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    // Record payment
    await prisma.payment.create({
      data: {
        invoiceId,
        amount,
        method,
        reference,
        createdAt: new Date(),
      },
    });

    // Update invoice status
    const totalPaid =
      invoice.payments.reduce((sum, p) => sum + p.amount, 0) + amount;

    let newStatus: "UNPAID" | "PARTIALLY_PAID" | "PAID" = "UNPAID";
    if (totalPaid >= invoice.totalAmount) newStatus = "PAID";
    else if (totalPaid > 0) newStatus = "PARTIALLY_PAID";

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { status: newStatus },
    });

    res.json({ message: "Payment recorded", newStatus });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to record payment" });
  }
});

export default recordPayment;
