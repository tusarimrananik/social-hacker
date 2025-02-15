import { NextResponse } from 'next/server';
import gatherFacebookData from '@/app/api/facebook/gatherFacebookData/f3_combineFacebookGatherData'
export async function GET() {
  const data = await gatherFacebookData("fb.com/tusar")
  return NextResponse.json({ data }, { status: 200 });
}