import mongoose from "mongoose";

const RepleSchema = new mongoose.Schema(
    {
        author: String,
        password: String,
        content: String,
        repleNum: Number,
    },
    { collection: "reple", timestamps: true }
);

export default mongoose.models.Reple || mongoose.model("Reple", RepleSchema);