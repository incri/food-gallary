import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Food {
  id: number;
  name: string;
}

interface FetchFoodResponse {
  count: number;
  results: Food[];
}

const FoodGrids = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchFoodResponse>("/foods")
      .then((res) => setFoods(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {foods.map((food) => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FoodGrids;
