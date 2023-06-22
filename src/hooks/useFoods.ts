import { Categories } from "./useCategories";
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

const useFoods = (selectedCategory: Categories | null) =>
  useData<Food>("/foods", { params: { categories: selectedCategory?.id } }, [
    selectedCategory?.id,
  ]);

export default useFoods;
