import { NextResponse } from 'next/server';
import {connectToDB} from '@/lib/connectToDB';
import Reple from '@/models/Reple';

// GET: /api/reple/list
export async function GET() {
  try {
    await connectToDB();
    const repleList = await Reple.find();
    return NextResponse.json({ success: true, repleList });
  } catch (err) {
    return NextResponse.json({ success: false, error: '서버 오류' }, { status: 500 });
  }
}