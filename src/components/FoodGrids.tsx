import useFoods, { Hotel } from "../hooks/useFoods";
import { SimpleGrid, Text } from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import FoodCardSkeleton from "./FoodCardSkeleton";
import FoodCardContainer from "./FoodCardContainer";
import { Categories } from "../hooks/useCategories";

interface Props {
  selectedCategory: Categories | null;
  selectedHotel: Hotel | null;
}

const FoodGrids = ({ selectedCategory, selectedHotel }: Props) => {
  const { data, error, isLoading } = useFoods(selectedCategory, selectedHotel);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <FoodCardContainer key={skeleton}>
              <FoodCardSkeleton />
            </FoodCardContainer>
          ))}
        {data.map((food) => (
          <FoodCardContainer key={food.id}>
            <FoodCard food={food} />
          </FoodCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default FoodGrids;
