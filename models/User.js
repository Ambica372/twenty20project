import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Check if the model already exists before defining it to prevent errors during hot reloads
export default mongoose.models.User || mongoose.model("User", UserSchema);