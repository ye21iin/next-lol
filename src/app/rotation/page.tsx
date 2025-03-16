"use client";
import { useEffect, useState } from "react";
import { GET } from "../api/rotation/route";
import Card from "@/components/Card";
import { VERSION } from "@/lib/constant";
import { Champion } from "@/types/Champion";

const Rotation = () => {
  interface Dataset {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
  }

  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [champions, setChampions] = useState<Record<string, Champion>>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/rotation").then((res) => res.json());
        setDataset(response);

        const resChampion = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/ko_KR/champion.json`,
        );
        const allChampions = await resChampion.json();

        const rotationChampions: Record<string, Champion> = {};
        response.freeChampionIds.forEach((id: number) => {
          const champKey = Object.keys(allChampions.data).find(
            (key) => allChampions.data[key].key === String(id),
          );
          if (champKey) {
            rotationChampions[champKey] = allChampions.data[champKey];
          }
        });

        setChampions(rotationChampions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <>Loading...</>;

  return (
    <div>
      <h1 className="ml-4 text-3xl font-bold">이번 주 무료 챔피언</h1>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
        {dataset?.freeChampionIds.map((id) => {
          const champKey = Object.keys(champions).find(
            (key) => champions[key].key === String(id),
          );

          return (
            <div key={id}>
              {champKey ? (
                <Card champion={champions[champKey]} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rotation;
