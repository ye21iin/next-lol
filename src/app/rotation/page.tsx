"use client";
import { use } from "react";
import Card from "@/components/Card";
import { fetchRotationChampions, fetchRotationData } from "../api/fetchData";

const Rotation = () => {
  const dataset = use(fetchRotationData());
  const champions = use(fetchRotationChampions(dataset.freeChampionIds));

  return (
    <div>
      <h1 className="ml-4 text-3xl font-bold">이번 주 무료 챔피언</h1>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
        {dataset.freeChampionIds.map((id: number) => {
          const champKey: string | undefined = Object.keys(champions).find(
            (key: string) => champions[key].key === String(id),
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
