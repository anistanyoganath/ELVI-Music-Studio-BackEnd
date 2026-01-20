import { Router } from "express";
import { prisma } from "../../../DB/prisma_client";

export const createInvoice = Router();

createInvoice.post("/", async (req, res) => {
  try {
    const { rentalId, userId, issueDate, dueDate, discount = 0 } = req.body;

    // Fetch rental to calculate subtotal
    const rental = await prisma.rental.findUnique({
      where: { id: rentalId },
      include: { item: true }, // item could be null
    });

    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    if (!rental.item) {
      return res.status(400).json({
        message:
          "Rental does not have an associated item. Cannot create invoice.",
      });
    }

    const rentalDays =
      (new Date(rental.endDate).getTime() -
        new Date(rental.startDate).getTime()) /
      (1000 * 60 * 60 * 24);

    const subtotal = rentalDays * rental.item.pricePerDay;
    const totalAmount = subtotal - discount;

    // Generate invoice number
    const invoiceNumber =
      "INV-" +
      Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");

    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        rentalId,
        userId,
        issueDate: new Date(issueDate),
        dueDate: new Date(dueDate),
        subtotal,
        discount,
        lateFee: 0,
        totalAmount,
        status: "UNPAID",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        user: true,
        rental: { include: { item: true } },
        payments: true,
      },
    });

    res.json(invoice);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create invoice" });
  }
});

export default createInvoice;
