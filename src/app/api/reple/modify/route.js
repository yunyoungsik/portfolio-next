import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Reple from "@/models/Reple";

// PATCH: /api/reple/update
export async function PATCH(req) {
  try {
    await connectToDB();

    const { repleId, content } = await req.json();

    const updatedReple = await Reple.updateOne(
      { _id: repleId },
      { $set: { content } }
    );

    if (updatedReple.modifiedCount === 0) {
      return NextResponse.json(
        { success: false, error: "댓글 수정 실패" },
        { status: 400 }
      );
    }

    console.log("✅ [SUCCESS] 댓글 수정 완료:", updatedReple);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ [ERROR] 댓글 수정 실패:", err);
    return NextResponse.json(
      { success: false, error: "서버 오류" },
      { status: 500 }
    );
  }
}
