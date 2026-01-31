import mongoose from 'mongoose';

export const connectDB = async () => {
    // Prevents creating multiple connections if one is already active
    if (mongoose.connections[0].readyState) {
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully");
        return true;
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
};