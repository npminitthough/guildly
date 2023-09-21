import { useState, useEffect } from "react";

import { ICategory } from "../../ts/interfaces";
import fetchCategories from "../../api/fetchCategories/fetchCategories";

export default function useGetCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function getCategories() {
      const data = await fetchCategories();
      setCategories(data);
    }

    getCategories();
  }, []);

  return categories;
}
