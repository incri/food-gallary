import useData from "./useData";

interface Hotels {
  id: number;
  name: string;
  slug: string;
}

const useHotels = () => useData<Hotels>("/hotels");

export default useHotels;
