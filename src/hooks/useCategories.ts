import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Categories {
  id: number;
  name: string;
}

interface FetchCategoriesRespose {
  count: number;
  results: Categories[];
}

const useCategories = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchCategoriesRespose>("/categories", { signal: controller.signal })
      .then((res) => {
        setCategories(res.data.results), setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { categories, error, isLoading };
};

export default useCategories;
