import { connectDB } from "../../../lib/db"; 
import User from "../../../models/User"; 
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        // 1. Connect to MongoDB
        await connectDB();

        // 2. Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // 3. Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        return NextResponse.json({ message: "Login successful" }, { status: 200 });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}