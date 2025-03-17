import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  /** apiKey가 없으면 에러 발생 */
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Missing API key" }), {
      status: 500,
    });
  }

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
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: res.status,
    });
  }

  const data: ChampionRotation = await res.json();
  return NextResponse.json(data);
}
