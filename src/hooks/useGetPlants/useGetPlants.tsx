import { useState, useEffect } from "react";

import fetchPlants from "../../api/fetchPlants/fetchPlants";
import { IPlant } from "../../ts/interfaces";

export default function useGetPlants() {
  const [plants, setPlants] = useState<IPlant[]>([]);

  useEffect(() => {
    const getPlants = async function () {
      const data = await fetchPlants();
      setPlants(data);
    };

    getPlants();
  }, []);

  return plants;
}
