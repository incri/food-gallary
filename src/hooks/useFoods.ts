import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Food {
    id: number;
    name: string;
  }


interface FetchFoodResponse {
    count: number;
    results: Food[];
  }

const useFoods = () => {

    const [foods, setFoods] = useState<Food[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchFoodResponse>("/foods", { signal: controller.signal})
      .then((res) => setFoods(res.data.results))
      .catch((err) =>{
        if (err instanceof CanceledError) return;
        setError(err.message)} );

    return () => controller.abort()
  }, []);

  return {foods, error}

}

export default useFoods;