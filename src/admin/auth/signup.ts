import bcrypt from "bcryptjs";
import { prisma } from "../../../DB/prisma_client";

export async function createAdmin() {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.admin.create({
    data: {
      name: "Super Admin",
      email: "admin@example.com",
      password: hashedPassword,
    },
  });
  console.log("Admin created:", admin);
}
