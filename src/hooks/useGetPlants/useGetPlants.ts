import { useState, useEffect } from "react";

import fetchPlants from "../../api/fetchPlants/fetchPlants";

export default function useGetPlants(initialState: any) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const getPlants = async function () {
      try {
        const data = await fetchPlants();
        setState({loading:false, error: false, result: data})
      } catch (err) {
        setState({loading:false, error: err, result: undefined})
      }
    };

    getPlants();
  }, []);

  return state;
}
