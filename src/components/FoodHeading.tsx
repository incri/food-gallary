import { Heading } from "@chakra-ui/react";
import { FoodQuery } from "../App";

interface Props {
  foodQuery: FoodQuery;
}

const FoodHeading = ({ foodQuery }: Props) => {
  const heading = `${foodQuery.hotel?.name || ""} ${
    foodQuery.category?.name || ""
  } Foods`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default FoodHeading;
