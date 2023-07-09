import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Food } from "../hooks/useFoods";
import HotelIconList from "./HotelIconList";
import CriticScore from "./CriticScore";

interface Props {
  food: Food;
}
function FoodCard({ food }: Props) {
  return (
    <Card>
      <Image src={food.background_image}></Image>
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <HotelIconList hotels={food.hotels_list} />
          <CriticScore score={food.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{food.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default FoodCard;
