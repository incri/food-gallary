import { FoodQuery } from "../App";
import useData from "./useData";

export interface Hotel {
  id: number;
  name: string;
  slug: string;
}

export interface Food {
  id: number;
  name: string;
  background_image: string;
  hotels_list: Hotel[];
  metacritic: number;
}

const useFoods = (foodQuery: FoodQuery) =>
  useData<Food>(
    "/foods",
    {
      params: {
        categories: foodQuery.category?.id,
        hotels: foodQuery.hotel?.id,
      },
    },
    [foodQuery]
  );

export default useFoods;
