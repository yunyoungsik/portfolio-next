import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Reple from "@/models/Reple";
import Counter from "@/models/Counter";

export async function POST(req) {
  try {
    await connectToDB();

    const { author, password, content } = await req.json();

    const counter = await Counter.findOneAndUpdate(
      { name: "counter" },
      { $inc: { repleNum: 1 } },
      { new: true, upsert: true }
    );

    const newReple = new Reple({
      author,
      password,
      content,
      repleNum: counter.repleNum,
    });

    await newReple.save();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ [ERROR] 댓글 등록 실패:", err);
    return NextResponse.json(
      { success: false, error: "서버 오류" },
      { status: 500 }
    );
  }
}
