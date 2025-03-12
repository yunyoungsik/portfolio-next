import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
    {
        name: String,
        repleNum: Number,
    },
    { collection: "counter" }
);

export default mongoose.models.Counter || mongoose.model("Counter", CounterSchema);