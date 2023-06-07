import useFoods from "../hooks/useFoods";
import { Text } from "@chakra-ui/react";

const FoodGrids = () => {
  const { foods, error } = useFoods();

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
