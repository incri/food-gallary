import useFoods from "../hooks/useFoods";
import { SimpleGrid, Text } from "@chakra-ui/react";
import FoodCard from "./FoodCard";

const FoodGrids = () => {
  const { foods, error } = useFoods();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default FoodGrids;
