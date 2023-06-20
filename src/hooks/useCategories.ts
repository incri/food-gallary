import useData from "./useData";

export interface Categories {
  id: number;
  name: string;
}

const useCategories = () => useData<Categories>("/categories");

export default useCategories;
