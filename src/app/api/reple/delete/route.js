import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Reple from "@/models/Reple";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { repleId } = await req.json();

    await Reple.deleteOne({ _id: repleId });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ [ERROR] 댓글 삭제 실패:", err);
    return NextResponse.json(
      { success: false, error: "서버 오류" },
      { status: 500 }
    );
  }
}
