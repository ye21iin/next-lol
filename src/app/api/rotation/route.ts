import { TpChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  /** apiKey가 없으면 에러 발생 */
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing API key" },
      {
        status: 500,
      },
    );
  }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Riot-Token": apiKey,
        },
      },
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: res.status },
      );
    }

    const data: TpChampionRotation = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Server error",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
