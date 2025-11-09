import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../DB/prisma_client";

const Signup = Router();

Signup.post("/", async (req: Request, res: Response) => {
  try {
    const { firstName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    //Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered." });
    }

    // Hash password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const newUser = await prisma.user.create({
      data: {
        name: firstName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    // 5️⃣ Send success response
    return res.status(201).json({
      message: "Signup successful.",
      user: newUser,
    });
  } catch (error: any) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

export default Signup;
