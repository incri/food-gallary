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

const useFoods = () => useData<Food>("/foods");

export default useFoods;
