import { connectDB } from "../../../lib/db"; 
import User from "../../../models/User"; 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // 1. Connect to MongoDB
        await connectDB();

        // 2. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // 3. Secure the password and save
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}