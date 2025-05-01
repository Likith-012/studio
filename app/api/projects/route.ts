// app/api/projects/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Projects data' });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ received: data });
}