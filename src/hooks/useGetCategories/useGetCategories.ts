import { useState, useEffect } from "react";

import fetchCategories from "../../api/fetchCategories/fetchCategories";

interface ICategories {
  // [id]: categoryName
  [key: string]: string
}

export default function useGetCategories() {
  const [categories, setCategories] = useState<ICategories>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();
        setLoading(false);
        const cats = {} as ICategories
        data.forEach(cat => {
          cats[cat.id as string] = cat.name
        })
        setCategories(cats);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    }

    getCategories();
  }, []);

  return { loading, error, result: categories };
}
