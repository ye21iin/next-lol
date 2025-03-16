"use client";
import { useEffect, useState } from "react";
import { GET } from "../api/rotation/route";

const Rotation = () => {
  interface Dataset {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
  }

  const [dataset, setDataset] = useState<Dataset | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/rotation").then((res) => res.json());
        setDataset(response);
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
      Rotation page
      <ul>
        {dataset && dataset.freeChampionIds.map((id) => <li key={id}>{id}</li>)}
      </ul>
    </div>
  );
};

export default Rotation;
