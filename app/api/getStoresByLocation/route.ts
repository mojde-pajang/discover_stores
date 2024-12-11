import { getStores } from "@/app/lib/stores";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "10");
  const longLat = searchParams.get("longLat") || "";
  if (longLat) {
    const result = await getStores(longLat, limit);
    return NextResponse.json({ result });
  }
}

//"-74.00763403803957,40.71322172252451"
