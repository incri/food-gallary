import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Food } from "../hooks/useFoods";
import HotelIconList from "./HotelIconList";
import CriticScore from "./CriticScore";

interface Props {
  food: Food;
}
function FoodCard({ food }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden" width={80}>
      <Image src={food.background_image} width={80}></Image>
      <CardBody>
        <Heading fontSize="2xl">{food.name}</Heading>
        <HStack justifyContent="space-between">
          <HotelIconList hotels={food.hotels_list} />
          <CriticScore score={food.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default FoodCard;
