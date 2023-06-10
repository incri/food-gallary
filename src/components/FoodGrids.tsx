import useFoods from "../hooks/useFoods";
import { SimpleGrid, Text } from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import FoodCardSkeleton from "./FoodCardSkeleton";
import FoodCardContainer from "./FoodCardContainer";

const FoodGrids = () => {
  const { foods, error, isLoading } = useFoods();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <FoodCardContainer>
              <FoodCardSkeleton key={skeleton} />
            </FoodCardContainer>
          ))}
        {foods.map((food) => (
          <FoodCardContainer>
            <FoodCard key={food.id} food={food} />
          </FoodCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FoodGrids;
