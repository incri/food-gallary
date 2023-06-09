import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Food } from "../hooks/useFoods";
import HotelIconList from "./HotelIconList";

interface Props {
  food: Food;
}
function FoodCard({ food }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden" width={80}>
      <Image src={food.background_image} width={80}></Image>
      <CardBody>
        <Heading fontSize="2xl">{food.name}</Heading>
        <HotelIconList hotels={food.hotels_list} />
      </CardBody>
    </Card>
  );
}

export default FoodCard;
