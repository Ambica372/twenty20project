import { connectDB } from "@/lib/db"; 
import User from "@/models/User"; 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// This function MUST be named POST to handle registration data
export async function POST(req) {
    try {
        await connectDB();
        const { email, password } = await req.json();

        // Basic validation
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: "Server error: " + error.message }, { status: 500 });
    }
}
